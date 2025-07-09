import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of, throwError, timer } from 'rxjs';
import {
  catchError,
  map,
  shareReplay,
  switchMap,
  tap,
  finalize,
  retry,
  retryWhen,
  delay,
  take,
} from 'rxjs/operators';

// Types and Interfaces
export interface QueryOptions {
  staleTime?: number; // Time before data is considered stale (default: 5 minutes)
  cacheTime?: number; // Time to keep unused data in cache (default: 10 minutes)
  refetchOnWindowFocus?: boolean;
  refetchInterval?: number; // Auto refetch interval
  retry?: number; // Number of retry attempts
  retryDelay?: number; // Delay between retries
  enabled?: boolean; // Whether query should run
}

export interface QueryState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: any;
  isFetching: boolean;
  isSuccess: boolean;
  lastUpdated: number;
  isStale: boolean;
}

export interface MutationState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: any;
  isSuccess: boolean;
}

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  observable: Observable<T>;
  subscribers: number;
}

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private cache = new Map<string, CacheEntry<any>>();
  private queryStates = new Map<string, BehaviorSubject<QueryState<any>>>();
  private mutationStates = new Map<
    string,
    BehaviorSubject<MutationState<any>>
  >();

  constructor(private http: HttpClient) {
    this.setupWindowFocusRefetch();
  }

  // Main Query Method
  useQuery<T>(
    key: string | string[],
    queryFn: () => Observable<T>,
    options: QueryOptions = {}
  ): Observable<QueryState<T>> {
    const queryKey = this.getQueryKey(key);
    const defaultOptions: QueryOptions = {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: true,
      retry: 3,
      retryDelay: 1000,
      enabled: true,
      ...options,
    };

    if (!this.queryStates.has(queryKey)) {
      this.queryStates.set(
        queryKey,
        new BehaviorSubject<QueryState<T>>(this.getInitialState())
      );
    }

    const stateSubject = this.queryStates.get(queryKey)!;

    if (options.enabled !== false) {
      this.executeQuery(queryKey, queryFn, defaultOptions);
    }

    // Setup auto refetch
    if (defaultOptions.refetchInterval) {
      this.setupAutoRefetch(queryKey, queryFn, defaultOptions);
    }

    return stateSubject.asObservable();
  }

  // HTTP GET Query
  get<T>(
    key: string | string[],
    url: string,
    options: QueryOptions = {}
  ): Observable<QueryState<T>> {
    return this.useQuery(key, () => this.http.get<T>(url), options);
  }

  // HTTP POST Query (for fetching with POST)
  post<T>(
    key: string | string[],
    url: string,
    body: any,
    options: QueryOptions = {}
  ): Observable<QueryState<T>> {
    return this.useQuery(key, () => this.http.post<T>(url, body), options);
  }

  // Mutation Method
  useMutation<T, V = any>(
    mutationFn: (variables: V) => Observable<T>,
    options: {
      onSuccess?: (data: T, variables: V) => void;
      onError?: (error: any, variables: V) => void;
      onSettled?: (data: T | null, error: any, variables: V) => void;
    } = {}
  ): {
    mutate: (variables: V) => void;
    mutateAsync: (variables: V) => Promise<T>;
    state$: Observable<MutationState<T>>;
    reset: () => void;
  } {
    const mutationKey = `mutation_${Date.now()}_${Math.random()}`;
    const stateSubject = new BehaviorSubject<MutationState<T>>(
      this.getInitialMutationState()
    );

    this.mutationStates.set(mutationKey, stateSubject);

    const mutate = (variables: V) => {
      this.executeMutation(mutationKey, mutationFn, variables, options);
    };

    const mutateAsync = (variables: V): Promise<T> => {
      return new Promise((resolve, reject) => {
        this.executeMutation(mutationKey, mutationFn, variables, {
          ...options,
          onSuccess: (data: any) => {
            options.onSuccess?.(data, variables);
            resolve(data);
          },
          onError: (error: any) => {
            options.onError?.(error, variables);
            reject(error);
          },
        });
      });
    };

    const reset = () => {
      stateSubject.next(this.getInitialMutationState());
    };

    return {
      mutate,
      mutateAsync,
      state$: stateSubject.asObservable(),
      reset,
    };
  }

  // HTTP Mutations
  createMutation<T, V = any>(
    url: string,
    options?: {
      onSuccess?: (data: T, variables: V) => void;
      onError?: (error: any, variables: V) => void;
      onSettled?: (data: T | null, error: any, variables: V) => void;
    }
  ) {
    return this.useMutation<T, V>(
      (variables: V) => this.http.post<T>(url, variables),
      options
    );
  }

  updateMutation<T, V = any>(
    url: string,
    options?: {
      onSuccess?: (data: T, variables: V) => void;
      onError?: (error: any, variables: V) => void;
      onSettled?: (data: T | null, error: any, variables: V) => void;
    }
  ) {
    return this.useMutation<T, V>(
      (variables: V) => this.http.put<T>(url, variables),
      options
    );
  }

  deleteMutation<T, V = any>(
    urlFn: (variables: V) => string,
    options?: {
      onSuccess?: (data: T, variables: V) => void;
      onError?: (error: any, variables: V) => void;
      onSettled?: (data: T | null, error: any, variables: V) => void;
    }
  ) {
    return this.useMutation<T, V>(
      (variables: V) => this.http.delete<T>(urlFn(variables)),
      options
    );
  }

  // Cache Management
  invalidateQueries(key: string | string[]): void {
    const queryKey = this.getQueryKey(key);
    const patterns = Array.isArray(key) ? [queryKey] : [queryKey];

    patterns.forEach((pattern) => {
      for (const [cacheKey] of this.cache) {
        if (cacheKey.includes(pattern) || pattern.includes(cacheKey)) {
          this.cache.delete(cacheKey);
          const stateSubject = this.queryStates.get(cacheKey);
          if (stateSubject) {
            const currentState = stateSubject.value;
            stateSubject.next({
              ...currentState,
              isStale: true,
            });
          }
        }
      }
    });
  }

  setQueryData<T>(key: string | string[], data: T): void {
    const queryKey = this.getQueryKey(key);
    const stateSubject = this.queryStates.get(queryKey);

    if (stateSubject) {
      stateSubject.next({
        data,
        isLoading: false,
        isError: false,
        error: null,
        isFetching: false,
        isSuccess: true,
        lastUpdated: Date.now(),
        isStale: false,
      });
    }

    // Update cache
    this.cache.set(queryKey, {
      data,
      timestamp: Date.now(),
      observable: of(data),
      subscribers: 0,
    });
  }

  getQueryData<T>(key: string | string[]): T | null {
    const queryKey = this.getQueryKey(key);
    const cacheEntry = this.cache.get(queryKey);
    return cacheEntry ? cacheEntry.data : null;
  }

  refetchQueries(key?: string | string[]): void {
    if (key) {
      const queryKey = this.getQueryKey(key);
      const stateSubject = this.queryStates.get(queryKey);
      if (stateSubject) {
        const currentState = stateSubject.value;
        stateSubject.next({
          ...currentState,
          isFetching: true,
          isStale: true,
        });
      }
    } else {
      // Refetch all queries
      this.queryStates.forEach((stateSubject) => {
        const currentState = stateSubject.value;
        stateSubject.next({
          ...currentState,
          isFetching: true,
          isStale: true,
        });
      });
    }
  }

  clearCache(): void {
    this.cache.clear();
    this.queryStates.clear();
    this.mutationStates.clear();
  }

  // Private Methods
  private executeQuery<T>(
    queryKey: string,
    queryFn: () => Observable<T>,
    options: QueryOptions
  ): void {
    const stateSubject = this.queryStates.get(queryKey)!;
    const cacheEntry = this.cache.get(queryKey);
    const currentState = stateSubject.value;

    // Check if we have fresh cached data
    if (cacheEntry && !this.isStale(cacheEntry, options.staleTime!)) {
      stateSubject.next({
        data: cacheEntry.data,
        isLoading: false,
        isError: false,
        error: null,
        isFetching: false,
        isSuccess: true,
        lastUpdated: cacheEntry.timestamp,
        isStale: false,
      });
      return;
    }

    // Set loading state
    stateSubject.next({
      ...currentState,
      isLoading: !currentState.data,
      isFetching: true,
      isError: false,
      error: null,
    });

    // Execute query
    const query$ = queryFn().pipe(
      retry(options.retry || 0),
      retryWhen((errors) =>
        errors.pipe(delay(options.retryDelay || 1000), take(options.retry || 0))
      ),
      tap((data) => {
        // Update cache
        this.cache.set(queryKey, {
          data,
          timestamp: Date.now(),
          observable: of(data),
          subscribers: 1,
        });

        // Update state
        stateSubject.next({
          data,
          isLoading: false,
          isError: false,
          error: null,
          isFetching: false,
          isSuccess: true,
          lastUpdated: Date.now(),
          isStale: false,
        });
      }),
      catchError((error) => {
        stateSubject.next({
          ...currentState,
          isLoading: false,
          isError: true,
          error,
          isFetching: false,
          isSuccess: false,
          lastUpdated: Date.now(),
          isStale: true,
        });
        return throwError(error);
      }),
      shareReplay(1)
    );

    query$.subscribe();
  }

  private executeMutation<T, V>(
    mutationKey: string,
    mutationFn: (variables: V) => Observable<T>,
    variables: V,
    options: any
  ): void {
    const stateSubject = this.mutationStates.get(mutationKey)!;

    stateSubject.next({
      data: null,
      isLoading: true,
      isError: false,
      error: null,
      isSuccess: false,
    });

    mutationFn(variables)
      .pipe(
        tap((data) => {
          stateSubject.next({
            data,
            isLoading: false,
            isError: false,
            error: null,
            isSuccess: true,
          });
          options.onSuccess?.(data, variables);
          options.onSettled?.(data, null, variables);
        }),
        catchError((error) => {
          stateSubject.next({
            data: null,
            isLoading: false,
            isError: true,
            error,
            isSuccess: false,
          });
          options.onError?.(error, variables);
          options.onSettled?.(null, error, variables);
          return throwError(error);
        })
      )
      .subscribe();
  }

  private setupAutoRefetch<T>(
    queryKey: string,
    queryFn: () => Observable<T>,
    options: QueryOptions
  ): void {
    timer(options.refetchInterval!, options.refetchInterval!).subscribe(() => {
      this.executeQuery(queryKey, queryFn, options);
    });
  }

  private setupWindowFocusRefetch(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('focus', () => {
        this.queryStates.forEach((stateSubject, queryKey) => {
          const currentState = stateSubject.value;
          if (currentState.isStale) {
            stateSubject.next({
              ...currentState,
              isFetching: true,
            });
          }
        });
      });
    }
  }

  private isStale(cacheEntry: CacheEntry<any>, staleTime: number): boolean {
    return Date.now() - cacheEntry.timestamp > staleTime;
  }

  private getQueryKey(key: string | string[]): string {
    return Array.isArray(key) ? key.join('_') : key;
  }

  private getInitialState<T>(): QueryState<T> {
    return {
      data: null,
      isLoading: true,
      isError: false,
      error: null,
      isFetching: true,
      isSuccess: false,
      lastUpdated: 0,
      isStale: false,
    };
  }

  private getInitialMutationState<T>(): MutationState<T> {
    return {
      data: null,
      isLoading: false,
      isError: false,
      error: null,
      isSuccess: false,
    };
  }
}
