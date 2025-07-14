// otp.component.ts - Fixed version
import { Component, inject, signal, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { NgOtpInputModule } from 'ng-otp-input';
import { QueryService } from '../../../../service/quary.service';
import { AlertService } from '../../../services/alert.service';
import {
  AuthTokens,
  SecureStorageService,
  UserProfile,
} from '../../../services/secure-storage.service';
import { AngularQueryService } from '../../../services/quary-client.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

interface OtpPayload {
  userId: string;
  callType: string;
  otpCode: number;
  isAuthCall: boolean;
}

interface OtpResponse {
  id: string;
  token: string;
  refreshToken: string;
  emailVerified: boolean;
  mfaEnabled: boolean;
}

interface ResendOtpPayload {
  userId: string;
  callType: string;
  isAuthCall: boolean;
  email: string;
  authType: string;
}

interface ResendOtpResponse {
  success: boolean;
  message: string;
}

@Component({
  selector: 'app-otp',
  imports: [SharedModule, NgOtpInputModule],
  templateUrl: './otp.component.html',
  styleUrl: './otp.component.css',
})
export class OtpComponent implements OnDestroy {
  private queryService = inject(AngularQueryService);
  private router = inject(Router);
  private alertService = inject(AlertService);
  private secureStorage = inject(SecureStorageService);
  private http = inject(HttpClient);

  otpValue: string = '';
  userEmail: string =
    this.secureStorage.getSensitiveData<string>('userEmail') || '';

  // Countdown timer properties
  private countdownInterval: any;
  resendCountdown = signal<number>(0);
  private readonly RESEND_COOLDOWN = 60;

  // Simple signals for state management
  submitError = signal<string | null>(null);
  resendError = signal<string | null>(null);
  resendSuccess = signal<string | null>(null);

  // OTP Verification Mutation - Fixed: Pass function instead of URL
  private otpMutation = this.queryService.createMutation<
    OtpResponse,
    OtpPayload
  >(
    (payload: OtpPayload) => {
      return this.http.post<OtpResponse>(
        'http://api.flexydemy.com:4000/dev/auth-service/api/v1/auth/verify-otp',
        payload
      );
    },
    {
      onSuccess: (data: OtpResponse) => {
        this.handleSuccessfulAuthentication(data);
      },
      onError: (error: any) => {
        this.handleAuthenticationError(error);
      },
    }
  );

  // Resend OTP Mutation - Fixed: Pass function instead of URL
  private resendOtpMutation = this.queryService.createMutation<
    ResendOtpResponse,
    ResendOtpPayload
  >(
    (payload: ResendOtpPayload) => {
      return this.http.post<ResendOtpResponse>(
        'http://api.flexydemy.com:4000/dev/auth-service/api/v1/auth/send-otp',
        payload
      );
    },
    {
      onSuccess: (data: ResendOtpResponse) => {
        this.handleResendSuccess(data);
      },
      onError: (error: any) => {
        this.handleResendError(error);
      },
    }
  );

  constructor() {
    // Start countdown when component loads (assuming OTP was just sent)
    this.startResendCountdown();
  }

  ngOnDestroy(): void {
    // Clean up countdown interval
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }

    // Clean up mutations
    this.otpMutation.cleanup();
    this.resendOtpMutation.cleanup();
  }

  onOtpChange(otp: string): void {
    this.otpValue = otp;

    // Clear any previous errors when user starts typing
    if (this.submitError()) {
      this.submitError.set(null);
    }
  }

  onSubmit(): void {
    if (this.otpValue.length === 6) {
      const userId = this.getUserId();

      if (!userId) {
        this.alertService.error(
          'User ID not found. Please sign up again.',
          'Error'
        );
        this.submitError.set('User ID not found. Please sign up again.');
        return;
      }

      const payload: OtpPayload = {
        userId: userId,
        callType: 'login',
        otpCode: parseInt(this.otpValue),
        isAuthCall: true,
      };

      this.otpMutation.mutate(payload).subscribe({
        error: (error) => {
          // Error handling is already done in the mutation's onError callback
          console.error('OTP verification failed:', error);
        },
      });
    } else {
      this.alertService.warning(
        'Please enter a complete 6-digit OTP code.',
        'Incomplete OTP'
      );
      this.submitError.set('Please enter a complete 6-digit OTP code.');
    }
  }

  resendCode(): void {
    // Don't allow resend if countdown is active
    if (this.resendCountdown() > 0) {
      return;
    }

    const userId = this.getUserId();

    if (!userId) {
      this.alertService.error(
        'User ID not found. Please sign up again.',
        'Error'
      );
      this.resendError.set('User ID not found. Please sign up again.');
      return;
    }

    const payload: ResendOtpPayload = {
      userId: userId,
      callType: 'auth-verification',
      isAuthCall: true,
      authType: 'email',
      email: this.userEmail,
    };

    this.resendOtpMutation.mutate(payload).subscribe({
      error: (error) => {
        // Error handling is already done in the mutation's onError callback
        console.error('Resend OTP failed:', error);
      },
    });
  }

  // Countdown timer methods
  private startResendCountdown(): void {
    this.resendCountdown.set(this.RESEND_COOLDOWN);

    this.countdownInterval = setInterval(() => {
      const currentCount = this.resendCountdown();
      if (currentCount > 0) {
        this.resendCountdown.set(currentCount - 1);
      } else {
        this.clearCountdown();
      }
    }, 1000);
  }

  private clearCountdown(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
    this.resendCountdown.set(0);
  }

  // Private helper methods
  private getUserId(): string | null {
    // First try to get from temp session (most secure)
    const tempSession = this.secureStorage.getTempSession();
    if (tempSession?.userId) {
      return tempSession.userId;
    }

    // Fallback to secure storage
    return this.secureStorage.getSensitiveData<string>('userId');
  }

  private handleSuccessfulAuthentication(data: OtpResponse): void {
    try {
      // Store authentication tokens securely
      const tokens: AuthTokens = {
        accessToken: data.token,
        refreshToken: data.refreshToken,
        tokenType: 'Bearer',
        // You might want to decode the JWT to get the actual expiration time
        // For now, setting a reasonable default (1 hour)
        expiresIn: 3600,
      };

      this.secureStorage.setAuthTokens(tokens);

      // Create and store user profile
      const userProfile: UserProfile = {
        id: data.id,
        email: this.userEmail,
        // Add any other user data you have
        preferences: {
          emailVerified: data.emailVerified,
          mfaEnabled: data.mfaEnabled,
        },
      };

      this.secureStorage.setUserProfile(userProfile);

      // Clear temporary session data
      this.secureStorage.clearTempSession();

      // Clear any temporary user data
      this.secureStorage.removeSecureItem('userId');
      this.secureStorage.removeSecureItem('userEmail');

      // Show success message
      this.alertService.success('OTP verified successfully!', 'Success');

      // Navigate to dashboard
      this.router.navigate(['/auth/confirm/set-password']);
    } catch (error) {
      console.error('Error storing authentication data:', error);
      this.alertService.error(
        'Authentication successful but failed to store data. Please try logging in again.',
        'Storage Error'
      );
    }
  }

  private handleAuthenticationError(error: any): void {
    let errorMessage = 'OTP verification failed. Please try again.';

    if (error.status === 400) {
      errorMessage = 'Invalid OTP code. Please try again.';
    } else if (error.status === 401) {
      errorMessage = 'OTP has expired. Please request a new one.';
    } else if (error.status === 429) {
      errorMessage = 'Too many attempts. Please wait before trying again.';
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }

    this.alertService.error(errorMessage, 'Verification Failed');
    this.submitError.set(errorMessage);
  }

  private handleResendSuccess(data: ResendOtpResponse): void {
    this.alertService.success(
      'OTP code has been resent successfully!',
      'Code Sent'
    );
    this.resendSuccess.set('OTP code has been resent successfully.');
    this.resendError.set(null);
    this.otpValue = '';

    // Start countdown after successful resend
    this.startResendCountdown();
  }

  private handleResendError(error: any): void {
    let errorMessage = 'Failed to resend OTP. Please try again.';

    if (error.status === 429) {
      errorMessage = 'Please wait before requesting another code.';
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }

    this.alertService.error(errorMessage, 'Resend Failed');
    this.resendError.set(errorMessage);
    this.resendSuccess.set(null);
  }

  // Fixed computed getters - Use signal() instead of trying to access state$
  get isSubmitting(): boolean {
    return this.otpMutation.isLoading();
  }

  get isResending(): boolean {
    return this.resendOtpMutation.isLoading();
  }

  get isOtpComplete(): boolean {
    return this.otpValue.length === 6;
  }

  get canSubmit(): boolean {
    return this.isOtpComplete && !this.isSubmitting;
  }

  get canResend(): boolean {
    return !this.isResending && this.resendCountdown() === 0;
  }

  get submitButtonText(): string {
    return this.isSubmitting ? 'Verifying...' : 'Verify OTP';
  }

  get resendButtonText(): string {
    if (this.isResending) {
      return 'Resending...';
    }

    if (this.resendCountdown() > 0) {
      return `Resend code (${this.resendCountdown()}s)`;
    }

    return 'Resend code';
  }

  // Helper method to format countdown time
  get countdownText(): string {
    const countdown = this.resendCountdown();
    if (countdown > 0) {
      return `You can resend code in ${countdown}s`;
    }
    return '';
  }
}
