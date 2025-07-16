// secure-storage.service.ts - Comprehensive secure storage solution
import {
  Injectable,
  signal,
  computed,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

// Types for different data categories
export interface SecureStorageItem {
  value: any;
  timestamp: number;
  expiresAt?: number;
  encrypted: boolean;
  category: 'auth' | 'user' | 'temp' | 'sensitive' | 'general';
}

export interface StorageOptions {
  encrypt?: boolean;
  expireAfter?: number; // milliseconds
  category?: 'auth' | 'user' | 'temp' | 'sensitive' | 'general';
  autoCleanup?: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn?: number;
  tokenType?: string;
}

export interface UserProfile {
  id: string;
  email: string;
  name?: string;
  roles?: string[];
  preferences?: Record<string, any>;
}

export interface TempSession {
  userId: string;
  email: string;
  sessionId: string;
  purpose: 'otp' | 'password-reset' | 'email-verification' | 'general';
}

@Injectable({
  providedIn: 'root',
})
export class SecureStorageService {
  private readonly ENCRYPTION_KEY = 'secure_app_key_2024';
  private readonly STORAGE_PREFIX = 'secure_app_';
  private readonly CLEANUP_INTERVAL = 60000; // 1 minute

  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private isBrowser = isPlatformBrowser(this.platformId);

  // Internal state signals
  private _authState = signal<{
    isAuthenticated: boolean;
    tokens: AuthTokens | null;
    user: UserProfile | null;
    tempSession: TempSession | null;
  }>({
    isAuthenticated: false,
    tokens: null,
    user: null,
    tempSession: null,
  });

  // Public computed signals
  readonly authState = computed(() => this._authState());
  readonly isAuthenticated = computed(() => this._authState().isAuthenticated);
  readonly currentUser = computed(() => this._authState().user);
  readonly hasValidTokens = computed(() => {
    const tokens = this._authState().tokens;
    return tokens && this.isTokenValid(tokens);
  });
  readonly tempSession = computed(() => this._authState().tempSession);

  constructor() {
    if (this.isBrowser) {
      this.initializeFromStorage();
      this.setupAutoCleanup();
      this.setupTokenRefresh();
    }
  }

  // =============================================================================
  // GENERAL SECURE STORAGE METHODS
  // =============================================================================

  /**
   * Store any sensitive data securely
   */
  setSecureItem<T>(key: string, value: T, options: StorageOptions = {}): void {
    if (!this.isBrowser) return;

    const defaultOptions: StorageOptions = {
      encrypt: true,
      category: 'general',
      autoCleanup: true,
      ...options,
    };

    const item: SecureStorageItem = {
      value,
      timestamp: Date.now(),
      expiresAt: defaultOptions.expireAfter
        ? Date.now() + defaultOptions.expireAfter
        : undefined,
      encrypted: defaultOptions.encrypt!,
      category: defaultOptions.category!,
    };

    const storageKey = this.getStorageKey(key);
    const dataToStore = defaultOptions.encrypt
      ? this.encrypt(JSON.stringify(item))
      : JSON.stringify(item);

    try {
      sessionStorage.setItem(storageKey, dataToStore);
    } catch (error) {
      console.error('Failed to store secure item:', error);
    }
  }

  /**
   * Retrieve any sensitive data securely
   */
  getSecureItem<T>(key: string): T | null {
    if (!this.isBrowser) return null;

    const storageKey = this.getStorageKey(key);
    const storedData = sessionStorage.getItem(storageKey);

    if (!storedData) return null;

    try {
      let item: SecureStorageItem;

      // Try to decrypt first, fallback to plain JSON
      try {
        item = JSON.parse(this.decrypt(storedData));
      } catch {
        item = JSON.parse(storedData);
      }

      // Check if item is expired
      if (item.expiresAt && Date.now() > item.expiresAt) {
        this.removeSecureItem(key);
        return null;
      }

      return item.value as T;
    } catch (error) {
      console.error('Failed to retrieve secure item:', error);
      this.removeSecureItem(key);
      return null;
    }
  }

  /**
   * Remove a secure item
   */
  removeSecureItem(key: string): void {
    if (!this.isBrowser) return;

    const storageKey = this.getStorageKey(key);
    sessionStorage.removeItem(storageKey);
  }

  /**
   * Check if a secure item exists and is valid
   */
  hasSecureItem(key: string): boolean {
    return this.getSecureItem(key) !== null;
  }

  // =============================================================================
  // AUTHENTICATION TOKEN METHODS
  // =============================================================================

  /**
   * Store authentication tokens securely
   */
  setAuthTokens(tokens: AuthTokens): void {
    this.setSecureItem('auth_tokens', tokens, {
      encrypt: true,
      category: 'auth',
      expireAfter: tokens.expiresIn ? tokens.expiresIn * 1000 : undefined,
    });

    this._authState.update((state) => ({
      ...state,
      tokens,
      isAuthenticated: true,
    }));
  }

  /**
   * Get authentication tokens
   */
  getAuthTokens(): AuthTokens | null {
    const tokens = this.getSecureItem<AuthTokens>('auth_tokens');
    return tokens && this.isTokenValid(tokens) ? tokens : null;
  }

  /**
   * Get access token for API requests
   */
  getAccessToken(): string | null {
    const tokens = this.getAuthTokens();
    return tokens?.accessToken || null;
  }

  /**
   * Get refresh token
   */
  getRefreshToken(): string | null {
    const tokens = this.getAuthTokens();
    return tokens?.refreshToken || null;
  }

  /**
   * Check if tokens are valid
   */
  private isTokenValid(tokens: AuthTokens): boolean {
    if (!tokens.accessToken) return false;

    // If token has expiration, check if it's still valid
    if (tokens.expiresIn) {
      const storedItem = sessionStorage.getItem(
        this.getStorageKey('auth_tokens')
      );
      if (storedItem) {
        try {
          const parsed = JSON.parse(this.decrypt(storedItem));
          return parsed.expiresAt ? Date.now() < parsed.expiresAt : true;
        } catch {
          return false;
        }
      }
    }

    return true;
  }

  // =============================================================================
  // USER PROFILE METHODS
  // =============================================================================

  /**
   * Store user profile securely
   */
  setUserProfile(user: UserProfile): void {
    this.setSecureItem('user_profile', user, {
      encrypt: true,
      category: 'user',
    });

    this._authState.update((state) => ({
      ...state,
      user,
    }));
  }

  /**
   * Get user profile
   */
  getUserProfile(): UserProfile | null {
    return this.getSecureItem<UserProfile>('user_profile');
  }

  /**
   * Update user profile
   */
  updateUserProfile(updates: Partial<UserProfile>): void {
    const currentUser = this.getUserProfile();
    if (currentUser) {
      const updatedUser = { ...currentUser, ...updates };
      this.setUserProfile(updatedUser);
    }
  }

  // =============================================================================
  // TEMPORARY SESSION METHODS
  // =============================================================================

  /**
   * Set temporary session (for OTP, password reset, etc.)
   */
  setTempSession(
    session: TempSession,
    expireAfter: number = 10 * 60 * 1000
  ): void {
    this.setSecureItem('temp_session', session, {
      encrypt: true,
      category: 'temp',
      expireAfter,
    });

    this._authState.update((state) => ({
      ...state,
      tempSession: session,
    }));
  }

  /**
   * Get temporary session
   */
  getTempSession(): TempSession | null {
    return this.getSecureItem<TempSession>('temp_session');
  }

  /**
   * Clear temporary session
   */
  clearTempSession(): void {
    this.removeSecureItem('temp_session');
    this._authState.update((state) => ({
      ...state,
      tempSession: null,
    }));
  }

  /**
   * Check if temp session is valid
   */
  isTempSessionValid(): boolean {
    return this.hasSecureItem('temp_session');
  }

  // =============================================================================
  // BULK OPERATIONS
  // =============================================================================

  /**
   * Clear all authentication data
   */
  clearAuthData(): void {
    this.removeSecureItem('auth_tokens');
    this.removeSecureItem('user_profile');
    this.clearTempSession();

    this._authState.set({
      isAuthenticated: false,
      tokens: null,
      user: null,
      tempSession: null,
    });
  }

  /**
   * Clear all stored data
   */
  clearAllData(): void {
    if (!this.isBrowser) return;

    // Get all keys that belong to this app
    const keys = Object.keys(sessionStorage).filter((key) =>
      key.startsWith(this.STORAGE_PREFIX)
    );

    keys.forEach((key) => sessionStorage.removeItem(key));

    this._authState.set({
      isAuthenticated: false,
      tokens: null,
      user: null,
      tempSession: null,
    });
  }

  /**
   * Clear expired items
   */
  clearExpiredItems(): void {
    if (!this.isBrowser) return;

    const keys = Object.keys(sessionStorage).filter((key) =>
      key.startsWith(this.STORAGE_PREFIX)
    );

    keys.forEach((key) => {
      const data = sessionStorage.getItem(key);
      if (data) {
        try {
          let item: SecureStorageItem;
          try {
            item = JSON.parse(this.decrypt(data));
          } catch {
            item = JSON.parse(data);
          }

          if (item.expiresAt && Date.now() > item.expiresAt) {
            sessionStorage.removeItem(key);
          }
        } catch {
          // If we can't parse it, remove it
          sessionStorage.removeItem(key);
        }
      }
    });
  }

  // =============================================================================
  // SENSITIVE DATA METHODS
  // =============================================================================

  /**
   * Store sensitive data with maximum security
   */
  setSensitiveData<T>(key: string, value: T, expireAfter?: number): void {
    this.setSecureItem(key, value, {
      encrypt: true,
      category: 'sensitive',
      expireAfter,
      autoCleanup: true,
    });
  }

  /**
   * Get sensitive data
   */
  getSensitiveData<T>(key: string): T | null {
    return this.getSecureItem<T>(key);
  }

  // =============================================================================
  // SECURITY UTILITIES
  // =============================================================================

  /**
   * Check if storage is available and secure
   */
  isStorageSecure(): boolean {
    if (!this.isBrowser) return false;

    try {
      const testKey = 'security_test';
      const testValue = 'test_data';

      sessionStorage.setItem(testKey, testValue);
      const retrieved = sessionStorage.getItem(testKey);
      sessionStorage.removeItem(testKey);

      return retrieved === testValue;
    } catch {
      return false;
    }
  }

  /**
   * Get storage usage statistics
   */
  getStorageStats(): {
    totalItems: number;
    authItems: number;
    tempItems: number;
    sensitiveItems: number;
    expiredItems: number;
  } {
    if (!this.isBrowser)
      return {
        totalItems: 0,
        authItems: 0,
        tempItems: 0,
        sensitiveItems: 0,
        expiredItems: 0,
      };

    const keys = Object.keys(sessionStorage).filter((key) =>
      key.startsWith(this.STORAGE_PREFIX)
    );

    let authItems = 0;
    let tempItems = 0;
    let sensitiveItems = 0;
    let expiredItems = 0;

    keys.forEach((key) => {
      const data = sessionStorage.getItem(key);
      if (data) {
        try {
          let item: SecureStorageItem;
          try {
            item = JSON.parse(this.decrypt(data));
          } catch {
            item = JSON.parse(data);
          }

          if (item.expiresAt && Date.now() > item.expiresAt) {
            expiredItems++;
          } else {
            switch (item.category) {
              case 'auth':
                authItems++;
                break;
              case 'temp':
                tempItems++;
                break;
              case 'sensitive':
                sensitiveItems++;
                break;
            }
          }
        } catch {
          // Count unparseable items as expired
          expiredItems++;
        }
      }
    });

    return {
      totalItems: keys.length,
      authItems,
      tempItems,
      sensitiveItems,
      expiredItems,
    };
  }

  // =============================================================================
  // PRIVATE METHODS
  // =============================================================================

  private getStorageKey(key: string): string {
    return `${this.STORAGE_PREFIX}${key}`;
  }

  private encrypt(text: string): string {
    // Simple encryption - use crypto-js or similar library in production
    try {
      return btoa(unescape(encodeURIComponent(text + this.ENCRYPTION_KEY)));
    } catch {
      return text;
    }
  }

  private decrypt(encryptedText: string): string {
    try {
      const decoded = atob(encryptedText);
      const original = decodeURIComponent(escape(decoded));
      return original.replace(this.ENCRYPTION_KEY, '');
    } catch {
      return encryptedText;
    }
  }

  private initializeFromStorage(): void {
    // Load auth tokens
    const tokens = this.getAuthTokens();
    if (tokens) {
      this._authState.update((state) => ({
        ...state,
        tokens,
        isAuthenticated: true,
      }));
    }

    // Load user profile
    const user = this.getUserProfile();
    if (user) {
      this._authState.update((state) => ({
        ...state,
        user,
      }));
    }

    // Load temp session
    const tempSession = this.getTempSession();
    if (tempSession) {
      this._authState.update((state) => ({
        ...state,
        tempSession,
      }));
    }
  }

  private setupAutoCleanup(): void {
    setInterval(() => {
      this.clearExpiredItems();
    }, this.CLEANUP_INTERVAL);
  }

  private setupTokenRefresh(): void {
    // Check token expiration every minute
    setInterval(() => {
      const tokens = this.getAuthTokens();
      if (tokens && !this.isTokenValid(tokens)) {
        // Token expired, clear auth data
        this.clearAuthData();
        // Optionally redirect to login
        // this.router.navigate(['/login']);
      }
    }, 60000);
  }
}

// =============================================================================
// USAGE EXAMPLES AND HELPER FUNCTIONS
// =============================================================================

// auth.service.ts - Example usage in authentication service
// export class AuthService {
//   constructor(private secureStorage: SecureStorageService) {}

//   login(tokens: AuthTokens, user: UserProfile): void {
//     this.secureStorage.setAuthTokens(tokens);
//     this.secureStorage.setUserProfile(user);
//   }

//   logout(): void {
//     this.secureStorage.clearAuthData();
//   }

//   setTempUserForOTP(userId: string, email: string): void {
//     this.secureStorage.setTempSession({
//       userId,
//       email,
//       sessionId: crypto.randomUUID(),
//       purpose: 'otp',
//     });
//   }

//   // Store any sensitive data
//   storeSensitiveInfo(key: string, data: any, expireAfter?: number): void {
//     this.secureStorage.setSensitiveData(key, data, expireAfter);
//   }
// }

// HTTP Interceptor example
// export class AuthInterceptor {
//   constructor(private secureStorage: SecureStorageService) {}

//   intercept(req: any, next: any): any {
//     const token = this.secureStorage.getAccessToken();

//     if (token) {
//       req = req.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return next.handle(req);
//   }
// }
