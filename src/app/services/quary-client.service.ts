// query-client.service.ts
import {
  Injectable,
  inject,
  signal,
  computed,
  effect,
  DestroyRef,
} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
  Observable,
  BehaviorSubject,
  timer,
  EMPTY,
  of,
  Subscription,
} from 'rxjs';
import {
  catchError,
  switchMap,
  tap,
  finalize,
  shareReplay,
} from 'rxjs/operators';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

export interface QueryState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: HttpErrorResponse | null;
  isFetching: boolean;
  isSuccess: boolean;
  lastUpdated: number | null;
}

export interface QueryOptions {
  staleTime?: number; // Time in ms before data is considered stale
  cacheTime?: number; // Time in ms before inactive data is garbage collected
  refetchOnWindowFocus?: boolean;
  refetchInterval?: number; // Auto refetch interval in ms
  retry?: number; // Number of retry attempts
  retryDelay?: number; // Delay between retries in ms
  enabled?: boolean; // Whether the query should run
}

export interface MutationState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: HttpErrorResponse | null;
  isSuccess: boolean;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  subscribers: number;
  queryFn?: () => Observable<T>;
  options?: QueryOptions;
}

interface QueryResult<T> {
  data: ReturnType<typeof signal<T | null>>;
  isLoading: ReturnType<typeof signal<boolean>>;
  isError: ReturnType<typeof signal<boolean>>;
  error: ReturnType<typeof signal<HttpErrorResponse | null>>;
  isFetching: ReturnType<typeof signal<boolean>>;
  isSuccess: ReturnType<typeof signal<boolean>>;
  refetch: () => Observable<T>;
  state$: Observable<QueryState<T>>;
}

@Injectable({
  providedIn: 'root',
})
export class QueryClient {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private cache = new Map<string, CacheEntry<any>>();
  private activeQueries = new Map<string, Observable<any>>();
  private queryStates = new Map<string, BehaviorSubject<QueryState<any>>>();
  private intervalSubscriptions = new Map<string, Subscription>();

  private defaultOptions: QueryOptions = {
    staleTime: 0,
    cacheTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
    retry: 3,
    retryDelay: 1000,
    enabled: true,
  };

  constructor() {
    // Set up window focus refetching
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', () => {
        this.refetchStaleQueries();
      });
    }

    // Periodic cleanup of expired cache entries
    timer(0, 60000)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.cleanupExpiredCache();
      });
  }

  /**
   * Create a query that fetches data from an endpoint
   */
  query<T>(
    queryKey: string | string[],
    queryFn: () => Observable<T>,
    options: QueryOptions = {}
  ): QueryResult<T> {
    const key = Array.isArray(queryKey) ? queryKey.join('-') : queryKey;
    const opts = { ...this.defaultOptions, ...options };

    // Initialize state if it doesn't exist
    if (!this.queryStates.has(key)) {
      this.queryStates.set(
        key,
        new BehaviorSubject<QueryState<T>>({
          data: null,
          isLoading: false,
          isError: false,
          error: null,
          isFetching: false,
          isSuccess: false,
          lastUpdated: null,
        })
      );
    }

    const state$ = this.queryStates.get(key)!;
    const currentState = state$.value;

    // Create reactive signals that update with state changes
    const dataSignal = signal<T | null>(currentState.data);
    const isLoadingSignal = signal(currentState.isLoading);
    const isErrorSignal = signal(currentState.isError);
    const errorSignal = signal<HttpErrorResponse | null>(currentState.error);
    const isFetchingSignal = signal(currentState.isFetching);
    const isSuccessSignal = signal(currentState.isSuccess);

    // Subscribe to state changes and update signals
    state$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((state) => {
      dataSignal.set(state.data);
      isLoadingSignal.set(state.isLoading);
      isErrorSignal.set(state.isError);
      errorSignal.set(state.error);
      isFetchingSignal.set(state.isFetching);
      isSuccessSignal.set(state.isSuccess);
    });

    // Store query function and options for refetching
    let cached = this.cache.get(key);
    if (cached) {
      cached.queryFn = queryFn;
      cached.options = opts;
      cached.subscribers++;
    }

    // Check if we have cached data
    if (cached && !this.isStale(cached, opts.staleTime!)) {
      if (!currentState.data) {
        state$.next({
          ...currentState,
          data: cached.data,
          isSuccess: true,
          lastUpdated: cached.timestamp,
        });
      }
    } else if (opts.enabled && !this.activeQueries.has(key)) {
      // Fetch data if enabled and not already fetching
      this.fetchData(key, queryFn, opts).subscribe();
    }

    // Set up auto refetch interval
    if (
      opts.refetchInterval &&
      opts.refetchInterval > 0 &&
      !this.intervalSubscriptions.has(key)
    ) {
      const intervalSub = timer(opts.refetchInterval, opts.refetchInterval)
        .pipe(
          takeUntilDestroyed(this.destroyRef),
          switchMap(() =>
            opts.enabled ? this.refetch(key, queryFn, opts) : EMPTY
          )
        )
        .subscribe();
      this.intervalSubscriptions.set(key, intervalSub);
    }

    return {
      data: dataSignal,
      isLoading: isLoadingSignal,
      isError: isErrorSignal,
      error: errorSignal,
      isFetching: isFetchingSignal,
      isSuccess: isSuccessSignal,
      refetch: () => this.refetch(key, queryFn, opts),
      state$: state$.asObservable(),
    };
  }

  /**
   * Create a mutation for data modification operations
   */
  mutation<TData, TVariables = any>(
    mutationFn: (variables: TVariables) => Observable<TData>
  ) {
    const state = signal<MutationState<TData>>({
      data: null,
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: false,
    });

    const mutate = (variables: TVariables) => {
      state.set({
        ...state(),
        isLoading: true,
        isError: false,
        error: null,
        isSuccess: false,
      });

      return mutationFn(variables).pipe(
        tap((data) => {
          state.set({
            data,
            isLoading: false,
            isError: false,
            error: null,
            isSuccess: true,
          });
        }),
        catchError((error: HttpErrorResponse) => {
          state.set({
            ...state(),
            isLoading: false,
            isError: true,
            error,
            isSuccess: false,
          });
          throw error;
        })
      );
    };

    return {
      mutate,
      data: computed(() => state().data),
      isLoading: computed(() => state().isLoading),
      isError: computed(() => state().isError),
      error: computed(() => state().error),
      isSuccess: computed(() => state().isSuccess),
      reset: () =>
        state.set({
          data: null,
          isLoading: false,
          isError: false,
          error: null,
          isSuccess: false,
        }),
    };
  }

  /**
   * Invalidate queries by key pattern
   */
  invalidateQueries(queryKey: string | string[]) {
    const pattern = Array.isArray(queryKey) ? queryKey.join('-') : queryKey;

    for (const [key, cached] of this.cache.entries()) {
      if (key.includes(pattern)) {
        // Mark as stale by setting timestamp to 0
        cached.timestamp = 0;

        // Trigger refetch if there are active subscribers and we have the query function
        if (cached.queryFn && cached.options) {
          this.fetchData(key, cached.queryFn, cached.options).subscribe();
        }
      }
    }
  }

  /**
   * Set query data manually
   */
  setQueryData<T>(queryKey: string | string[], data: T) {
    const key = Array.isArray(queryKey) ? queryKey.join('-') : queryKey;

    // Update or create cache entry
    const existing = this.cache.get(key);
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      subscribers: existing?.subscribers || 0,
      queryFn: existing?.queryFn,
      options: existing?.options,
    });

    const state$ = this.queryStates.get(key);
    if (state$) {
      const currentState = state$.value;
      state$.next({
        ...currentState,
        data,
        isSuccess: true,
        isError: false,
        error: null,
        lastUpdated: Date.now(),
      });
    }
  }

  /**
   * Get cached query data
   */
  getQueryData<T>(queryKey: string | string[]): T | null {
    const key = Array.isArray(queryKey) ? queryKey.join('-') : queryKey;
    const cached = this.cache.get(key);
    return cached ? cached.data : null;
  }

  /**
   * Remove query from cache
   */
  removeQueries(queryKey: string | string[]) {
    const pattern = Array.isArray(queryKey) ? queryKey.join('-') : queryKey;

    for (const [key] of this.cache.entries()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
        this.queryStates.delete(key);

        // Clean up interval subscription
        const intervalSub = this.intervalSubscriptions.get(key);
        if (intervalSub) {
          intervalSub.unsubscribe();
          this.intervalSubscriptions.delete(key);
        }
      }
    }
  }

  private fetchData<T>(
    key: string,
    queryFn: () => Observable<T>,
    options: QueryOptions,
    retryCount = 0
  ): Observable<T> {
    const state$ = this.queryStates.get(key)!;
    const currentState = state$.value;

    // Set loading states
    state$.next({
      ...currentState,
      isLoading: !currentState.data,
      isFetching: true,
      isError: false,
      error: null,
    });

    const query$ = queryFn().pipe(
      tap((data) => {
        // Cache the data
        const existing = this.cache.get(key);
        this.cache.set(key, {
          data,
          timestamp: Date.now(),
          subscribers: existing?.subscribers || 0,
          queryFn,
          options,
        });
        // Update state
        state$.next({
          data,
          isLoading: false,
          isError: false,
          error: null,
          isFetching: false,
          isSuccess: true,
          lastUpdated: Date.now(),
        });
      }),
      catchError((error: HttpErrorResponse) => {
        if (retryCount < options.retry!) {
          // Retry after delay
          return timer(options.retryDelay!).pipe(
            switchMap(() =>
              this.fetchData(key, queryFn, options, retryCount + 1)
            )
          );
        } else {
          // Set error state
          state$.next({
            ...currentState,
            isLoading: false,
            isError: true,
            error,
            isFetching: false,
            isSuccess: false,
          });
          return EMPTY;
        }
      }),
      finalize(() => {
        this.activeQueries.delete(key);
      }),
      shareReplay(1)
    );

    this.activeQueries.set(key, query$);
    return query$;
  }

  private refetch<T>(
    key: string,
    queryFn: () => Observable<T>,
    options: QueryOptions
  ): Observable<T> {
    this.activeQueries.delete(key);
    return this.fetchData(key, queryFn, options);
  }

  private isStale(cached: CacheEntry<any>, staleTime: number): boolean {
    return Date.now() - cached.timestamp > staleTime;
  }

  private refetchStaleQueries() {
    const now = Date.now();
    for (const [key, cached] of this.cache.entries()) {
      if (
        cached.queryFn &&
        cached.options &&
        this.isStale(cached, cached.options.staleTime || 0)
      ) {
        if (cached.options.refetchOnWindowFocus && cached.subscribers > 0) {
          this.fetchData(key, cached.queryFn, cached.options).subscribe();
        }
      }
    }
  }

  private cleanupExpiredCache() {
    const now = Date.now();
    for (const [key, entry] of this.cache.entries()) {
      if (
        entry.subscribers === 0 &&
        now - entry.timestamp > this.defaultOptions.cacheTime!
      ) {
        this.cache.delete(key);
        this.queryStates.delete(key);

        // Clean up interval subscription
        const intervalSub = this.intervalSubscriptions.get(key);
        if (intervalSub) {
          intervalSub.unsubscribe();
          this.intervalSubscriptions.delete(key);
        }
      }
    }
  }
}

// Example usage service
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private queryClient = inject(QueryClient);
  private http = inject(HttpClient);

  // GET request helper
  get<T>(url: string, queryKey?: string | string[], options?: QueryOptions) {
    const key = queryKey || url;
    return this.queryClient.query(key, () => this.http.get<T>(url), options);
  }

  // POST mutation helper
  post<T>(url: string) {
    return this.queryClient.mutation<T, any>((data) =>
      this.http.post<T>(url, data)
    );
  }

  // PUT mutation helper
  put<T>(url: string) {
    return this.queryClient.mutation<T, any>((data) =>
      this.http.put<T>(url, data)
    );
  }

  // DELETE mutation helper
  delete<T>(url: string) {
    return this.queryClient.mutation<T, string>((id) =>
      this.http.delete<T>(`${url}/${id}`)
    );
  }

  // Direct access to query client methods
  invalidateQueries(queryKey: string | string[]) {
    this.queryClient.invalidateQueries(queryKey);
  }

  setQueryData<T>(queryKey: string | string[], data: T) {
    this.queryClient.setQueryData(queryKey, data);
  }

  getQueryData<T>(queryKey: string | string[]): T | null {
    return this.queryClient.getQueryData<T>(queryKey);
  }
}
