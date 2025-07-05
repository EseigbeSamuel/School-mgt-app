import { Injectable, inject, signal, computed, effect } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject, of, timer, EMPTY } from 'rxjs';
import { catchError, switchMap, tap, finalize } from 'rxjs/operators';

export interface QueryState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: HttpErrorResponse | null;
  isFetching: boolean;
  isSuccess: boolean;
  lastUpdated: Date | null;
}

export interface QueryOptions {
  staleTime?: number; // Time in ms before data becomes stale
  cacheTime?: number; // Time in ms to keep data in cache
  retry?: number; // Number of retries on error
  retryDelay?: number; // Delay between retries in ms
  refetchOnWindowFocus?: boolean;
  refetchInterval?: number; // Auto refetch interval in ms
  enabled?: boolean; // Whether query should run
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
  timestamp: Date;
  staleTime: number;
  cacheTime: number;
  subscribers: Set<string>;
}

@Injectable({
  providedIn: 'root',
})
export class AngularQueryService {
  private http = inject(HttpClient);
  private cache = new Map<string, CacheEntry<any>>();
  private queryStates = new Map<string, BehaviorSubject<QueryState<any>>>();
  private mutationStates = new Map<
    string,
    BehaviorSubject<MutationState<any>>
  >();
  private refetchIntervals = new Map<string, any>();

  private defaultOptions: QueryOptions = {
    staleTime: 5 * 60 * 1000, // 5 minutes
    cacheTime: 10 * 60 * 1000, // 10 minutes
    retry: 3,
    retryDelay: 1000,
    refetchOnWindowFocus: true,
    enabled: true,
  };

  constructor() {
    // Handle window focus refetch
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', () => {
        this.refetchOnWindowFocus();
      });
    }

    // Cleanup stale cache entries
    setInterval(() => {
      this.cleanupCache();
    }, 60000); // Check every minute
  }

  /**
   * Creates a query hook similar to React Query's useQuery
   */
  createQuery<T>(
    queryKey: string | string[],
    queryFn: () => Observable<T>,
    options: QueryOptions = {}
  ) {
    const key = Array.isArray(queryKey) ? queryKey.join(':') : queryKey;
    const opts = { ...this.defaultOptions, ...options };

    // Initialize query state if not exists
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

    const stateSubject = this.queryStates.get(key)!;

    // Create signals for reactive state
    const state = signal<QueryState<T>>(stateSubject.value);

    // Subscribe to state changes
    const subscription = stateSubject.subscribe((newState) => {
      state.set(newState);
    });

    // Auto-execute query if enabled
    if (opts.enabled) {
      this.executeQuery(key, queryFn, opts);
    }

    // Setup auto-refetch interval
    if (opts.refetchInterval) {
      this.setupRefetchInterval(key, queryFn, opts);
    }

    return {
      data: computed(() => state().data),
      isLoading: computed(() => state().isLoading),
      isError: computed(() => state().isError),
      error: computed(() => state().error),
      isFetching: computed(() => state().isFetching),
      isSuccess: computed(() => state().isSuccess),
      lastUpdated: computed(() => state().lastUpdated),
      refetch: () => this.refetchQuery(key, queryFn, opts),
      invalidate: () => this.invalidateQuery(key),
      state: computed(() => state()),
      cleanup: () => {
        subscription.unsubscribe();
        this.cleanupQuery(key);
      },
    };
  }

  createMutation<T, V = any>(
    mutationFn: (variables: V) => Observable<T>,
    options: {
      onSuccess?: (data: T, variables: V) => void;
      onError?: (error: HttpErrorResponse, variables: V) => void;
      onMutate?: (variables: V) => void;
    } = {}
  ) {
    const key = `mutation_${Date.now()}_${Math.random()}`;

    this.mutationStates.set(
      key,
      new BehaviorSubject<MutationState<T>>({
        data: null,
        isLoading: false,
        isError: false,
        error: null,
        isSuccess: false,
      })
    );

    const stateSubject = this.mutationStates.get(key)!;
    const state = signal<MutationState<T>>(stateSubject.value);

    const subscription = stateSubject.subscribe((newState) => {
      state.set(newState);
    });

    const mutate = (variables: V) => {
      options.onMutate?.(variables);

      this.updateMutationState(key, {
        isLoading: true,
        isError: false,
        error: null,
        isSuccess: false,
      });

      return mutationFn(variables).pipe(
        tap((data) => {
          this.updateMutationState(key, {
            data,
            isLoading: false,
            isSuccess: true,
          });
          options.onSuccess?.(data, variables);
        }),
        catchError((error) => {
          this.updateMutationState(key, {
            isLoading: false,
            isError: true,
            error,
            isSuccess: false,
          });
          options.onError?.(error, variables);
          throw error;
        })
      );
    };

    const mutateAsync = (variables: V) => {
      return mutate(variables).toPromise();
    };

    return {
      data: computed(() => state().data),
      isLoading: computed(() => state().isLoading),
      isError: computed(() => state().isError),
      error: computed(() => state().error),
      isSuccess: computed(() => state().isSuccess),
      mutate,
      mutateAsync,
      state: computed(() => state()),
      reset: () => this.resetMutation(key),
      cleanup: () => {
        subscription.unsubscribe();
        this.mutationStates.delete(key);
      },
    };
  }

  prefetchQuery<T>(
    queryKey: string | string[],
    queryFn: () => Observable<T>,
    options: QueryOptions = {}
  ): Observable<T> {
    const key = Array.isArray(queryKey) ? queryKey.join(':') : queryKey;
    const opts = { ...this.defaultOptions, ...options };

    if (!this.isDataStale(key, opts.staleTime!)) {
      const cachedData = this.getCachedData(key);
      if (cachedData !== null) {
        return of(cachedData as T);
      }
    }

    return this.executeQuery(key, queryFn, opts, false);
  }

  invalidateQueries(queryKey?: string | string[]) {
    if (queryKey) {
      const key = Array.isArray(queryKey) ? queryKey.join(':') : queryKey;
      this.invalidateQuery(key);
    } else {
      // Invalidate all queries
      for (const key of this.cache.keys()) {
        this.invalidateQuery(key);
      }
    }
  }

  setQueryData<T>(queryKey: string | string[], data: T) {
    const key = Array.isArray(queryKey) ? queryKey.join(':') : queryKey;

    this.cache.set(key, {
      data,
      timestamp: new Date(),
      staleTime: this.defaultOptions.staleTime!,
      cacheTime: this.defaultOptions.cacheTime!,
      subscribers: new Set(),
    });

    if (this.queryStates.has(key)) {
      this.updateQueryState(key, {
        data,
        isSuccess: true,
        lastUpdated: new Date(),
      });
    }
  }

  getQueryData<T>(queryKey: string | string[]): T | null {
    const key = Array.isArray(queryKey) ? queryKey.join(':') : queryKey;
    return this.getCachedData(key);
  }

  private executeQuery<T>(
    key: string,
    queryFn: () => Observable<T>,
    options: QueryOptions,
    updateLoadingState: boolean = true
  ): Observable<T> {
    if (!this.isDataStale(key, options.staleTime!)) {
      const cachedData = this.getCachedData(key);
      if (cachedData !== null) {
        this.updateQueryState(key, {
          data: cachedData,
          isSuccess: true,
          lastUpdated: this.cache.get(key)?.timestamp || new Date(),
        });
        return of(cachedData as T);
      }
    }

    if (updateLoadingState) {
      this.updateQueryState(key, {
        isLoading: true,
        isFetching: true,
        isError: false,
        error: null,
      });
    } else {
      this.updateQueryState(key, {
        isFetching: true,
      });
    }

    return this.retryQuery(queryFn, options.retry!, options.retryDelay!).pipe(
      tap((data) => {
        this.cache.set(key, {
          data,
          timestamp: new Date(),
          staleTime: options.staleTime!,
          cacheTime: options.cacheTime!,
          subscribers: new Set(),
        });

        this.updateQueryState(key, {
          data,
          isLoading: false,
          isFetching: false,
          isSuccess: true,
          isError: false,
          error: null,
          lastUpdated: new Date(),
        });
      }),
      catchError((error) => {
        this.updateQueryState(key, {
          isLoading: false,
          isFetching: false,
          isError: true,
          error,
          isSuccess: false,
        });
        return EMPTY;
      })
    );
  }

  private retryQuery<T>(
    queryFn: () => Observable<T>,
    retryCount: number,
    retryDelay: number
  ): Observable<T> {
    return queryFn().pipe(
      catchError((error) => {
        if (retryCount > 0) {
          return timer(retryDelay).pipe(
            switchMap(() =>
              this.retryQuery(queryFn, retryCount - 1, retryDelay * 2)
            )
          );
        }
        throw error;
      })
    );
  }

  private updateQueryState<T>(key: string, updates: Partial<QueryState<T>>) {
    const stateSubject = this.queryStates.get(key);
    if (stateSubject) {
      const currentState = stateSubject.value;
      stateSubject.next({ ...currentState, ...updates });
    }
  }

  private updateMutationState<T>(
    key: string,
    updates: Partial<MutationState<T>>
  ) {
    const stateSubject = this.mutationStates.get(key);
    if (stateSubject) {
      const currentState = stateSubject.value;
      stateSubject.next({ ...currentState, ...updates });
    }
  }

  private isDataStale(key: string, staleTime: number): boolean {
    const cacheEntry = this.cache.get(key);
    if (!cacheEntry) return true;

    const now = new Date().getTime();
    const dataAge = now - cacheEntry.timestamp.getTime();
    return dataAge > staleTime;
  }

  private getCachedData<T>(key: string): T | null {
    const cacheEntry = this.cache.get(key);
    return cacheEntry ? cacheEntry.data : null;
  }

  private refetchQuery<T>(
    key: string,
    queryFn: () => Observable<T>,
    options: QueryOptions
  ): Observable<T> {
    return this.executeQuery(key, queryFn, options, false);
  }

  private invalidateQuery(key: string) {
    this.cache.delete(key);
    if (this.queryStates.has(key)) {
      const stateSubject = this.queryStates.get(key)!;
      const currentState = stateSubject.value;
      stateSubject.next({
        ...currentState,
        isSuccess: false,
        lastUpdated: null,
      });
    }
  }

  private setupRefetchInterval<T>(
    key: string,
    queryFn: () => Observable<T>,
    options: QueryOptions
  ) {
    if (this.refetchIntervals.has(key)) {
      clearInterval(this.refetchIntervals.get(key));
    }

    const interval = setInterval(() => {
      this.refetchQuery(key, queryFn, options).subscribe();
    }, options.refetchInterval!);

    this.refetchIntervals.set(key, interval);
  }

  private refetchOnWindowFocus() {
    for (const [key, stateSubject] of this.queryStates) {
      const state = stateSubject.value;
      if (state.isSuccess && state.lastUpdated) {
        // Trigger refetch for active queries
        // This would need the query function reference, which we'd need to store
        // For now, we'll just invalidate the cache
        this.invalidateQuery(key);
      }
    }
  }

  private cleanupQuery(key: string) {
    if (this.refetchIntervals.has(key)) {
      clearInterval(this.refetchIntervals.get(key));
      this.refetchIntervals.delete(key);
    }
  }

  private cleanupCache() {
    const now = new Date().getTime();

    for (const [key, cacheEntry] of this.cache) {
      const dataAge = now - cacheEntry.timestamp.getTime();
      if (dataAge > cacheEntry.cacheTime && cacheEntry.subscribers.size === 0) {
        this.cache.delete(key);
        this.queryStates.delete(key);
      }
    }
  }

  private resetMutation(key: string) {
    this.updateMutationState(key, {
      data: null,
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: false,
    });
  }
}
