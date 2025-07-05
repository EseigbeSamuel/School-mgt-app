// src/app/features/auth/sign-up/sign-up.component.ts
import { Component, inject, signal, OnDestroy, computed } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IntlPhoneInputComponent } from '../../../shared/components/intl-phone-input/intl-phone-input.component';
import { CommonModule } from '@angular/common';
import { DateDobComponent } from '../../../shared/components/date-dob/date-dob.component';
import {
  FormsModule,
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { DropSelectComponent } from '../../../shared/components/drop-select/drop-select.component';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthService } from '../../../services/auth.service';
import { AngularQueryService } from '../../../services/quary-client.service';

interface ClassCategory {
  label: string;
  value: string;
}

interface Gender {
  label: string;
  value: string;
}

interface SignUpPayload {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  phoneNumber: string;
  country: string;
  role: string[];
  exam: string;
  referralCode?: string;
  classCategory: string;
}

interface SignUpResponse {
  success: boolean;
  message: string;
  data?: {
    userId: 'generated-uuid';
    message: 'User registered successfully';

    token?: string;
    refreshToken?: string;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  standalone: true,
  imports: [
    InputUiComponent,
    MatCheckboxModule,
    IntlPhoneInputComponent,
    CommonModule,
    SharedModule,
    DateDobComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SignUpComponent implements OnDestroy {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private queryService = inject(AngularQueryService);

  signupForm: FormGroup;

  private signUpMutation = this.queryService.createMutation<
    SignUpResponse,
    SignUpPayload
  >((payload: SignUpPayload) => this.performSignUpRequest(payload), {
    onSuccess: (data: SignUpResponse, variables: SignUpPayload) => {
      console.log('Sign up successful:', data);

      if (data.success && data.data) {
        if (data.data.token) {
          // this.authService.setToken(data.data.token);
        }
        if (data.data.refreshToken) {
          // this.authService.setRefreshToken(data.data.refreshToken);
        }

        localStorage.removeItem('referralCode');
        localStorage.setItem('userId', data.data.userId);

        this.router.navigate(['/auth/confirm']);
      }
    },
    onError: (error: HttpErrorResponse, variables: SignUpPayload) => {
      console.error('Sign up failed:', error);

      if (error.status === 400) {
        this.submitError.set('Invalid form data. Please check your inputs.');
      } else if (error.status === 409) {
        this.submitError.set('Email or username already exists.');
      } else if (error.status === 422) {
        this.submitError.set('Please check all required fields.');
      } else {
        this.submitError.set(
          error.error?.message || 'Registration failed. Please try again.'
        );
      }
    },
    onMutate: (variables: SignUpPayload) => {
      this.submitError.set(null);
      console.log('Starting sign up for:', variables.email);
    },
  });

  // Computed values from the mutation state
  isSubmitting = this.signUpMutation.isLoading;
  submitError = signal<string | null>(null);
  isSuccess = this.signUpMutation.isSuccess;

  classCategories: ClassCategory[] = [
    { value: 'Art', label: 'Art' },
    { value: 'Commercial', label: 'Commercial' },
    { value: 'Science', label: 'Science' },
  ];

  genders: Gender[] = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  constructor() {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      classCategory: ['', [Validators.required]],
      acceptTerms: [false, [Validators.requiredTrue]],
    });
  }

  ngOnDestroy(): void {
    this.signUpMutation.cleanup();
  }

  private performSignUpRequest(
    payload: SignUpPayload
  ): Observable<SignUpResponse> {
    // With pathRewrite, this will become: http://api.flexydemy.com:4000/dev/auth-service/api/v1/auth/signup
    const API_URL =
      'http://api.flexydemy.com:4000/dev/auth-service/api/v1/auth/signup';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: '*/*',
    });

    console.log('Making request to:', API_URL);
    console.log('Request payload:', payload);
    console.log('Request headers:', headers);

    return this.http.post<SignUpResponse>(API_URL, payload, { headers }).pipe(
      tap((response) => {
        console.log('API Response:', response);
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('API Error Details:', {
          status: error.status,
          statusText: error.statusText,
          error: error.error,
          message: error.message,
          url: error.url,
        });

        // Handle specific 403 error
        if (error.status === 403) {
          console.error(
            '403 Forbidden - Check API authentication/authorization'
          );
          this.submitError.set('Access denied. Please check your credentials.');
        }

        throw error;
      })
    );
  }

  private formatDateForBackend(date: Date | string): string {
    if (!date) return '';

    if (typeof date === 'string' && date.match(/^\d{4}-\d{2}-\d{2}$/)) {
      return date;
    }
    const dateObj = new Date(date);
    if (isNaN(dateObj.getTime())) return '';

    return dateObj.toISOString().split('T')[0];
  }

  private getUserRoleFromStorage(): string[] {
    try {
      const userType = this.authService.getUserType();
      if (userType) {
        const capitalizedRole = userType.toUpperCase();
        return [capitalizedRole];
      }
    } catch (error) {
      console.error('Error reading userType from auth service:', error);
    }
    return ['STUDENT'];
  }

  private extractCountryFromE164(e164Number: string): string {
    const countryMappings: { [key: string]: string } = {
      '+1': 'US',
      '+44': 'GB', // UK
      '+234': 'NG', // Nigeria
      '+91': 'IN', // India
      '+33': 'FR', // France
      '+49': 'DE', // Germany
      '+81': 'JP', // Japan
      '+86': 'CN', // China
      '+55': 'BR', // Brazil
      '+61': 'AU', // Australia
    };

    for (const [countryCode, iso] of Object.entries(countryMappings)) {
      if (e164Number.startsWith(countryCode)) {
        return iso;
      }
    }

    return 'US';
  }

  private extractPhoneComponents(phoneValue: any): {
    phoneNumber: string;
    country: string;
  } {
    if (phoneValue && typeof phoneValue === 'object') {
      const country =
        phoneValue.country ||
        phoneValue.countryCode ||
        phoneValue.selectedCountryISO2 ||
        (phoneValue.e164Number
          ? this.extractCountryFromE164(phoneValue.e164Number)
          : 'US');

      return {
        phoneNumber: phoneValue.e164Number || phoneValue.phoneNumber || '',
        country: country,
      };
    }
    if (typeof phoneValue === 'string') {
      return {
        phoneNumber: phoneValue,
        country: this.extractCountryFromE164(phoneValue),
      };
    }

    return {
      phoneNumber: '',
      country: 'US',
    };
  }

  private transformFormDataToPayload(): SignUpPayload {
    const formValue = this.signupForm.value;
    const phoneComponents = this.extractPhoneComponents(formValue.phone);
    const userRole = this.getUserRoleFromStorage();

    const payload: SignUpPayload = {
      email: formValue.email.trim().toLowerCase(),
      username: formValue.userName.trim(),
      firstName: formValue.firstName.trim(),
      lastName: formValue.lastName.trim(),
      dob: this.formatDateForBackend(formValue.dob),
      gender: formValue.gender,
      phoneNumber: phoneComponents.phoneNumber,
      country: phoneComponents.country,
      classCategory: formValue.classCategory,
      role: userRole,
      referralCode: '',
      exam: 'WAEC', // Default exam - you might want to make this configurable
    };

    // Check for referral code in localStorage
    const referralCode = localStorage.getItem('referralCode');
    if (referralCode && referralCode.trim()) {
      payload.referralCode = referralCode.trim();
    }

    return payload;
  }

  signUp(): void {
    this.submitError.set(null);

    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      this.submitError.set('Please fill in all required fields correctly.');
      return;
    }

    const payload = this.transformFormDataToPayload();

    console.log('Submitting signup with payload:', payload);

    this.signUpMutation.mutate(payload).subscribe({
      next: (response) => {
        console.log('Mutation completed successfully:', response);
      },
      error: (error) => {
        console.error('Mutation failed:', error);
      },
    });
  }

  signIn(): void {
    this.router.navigate(['/auth/log-in']);
  }

  hasError(fieldName: string): boolean {
    const field = this.signupForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  getFieldError(fieldName: string): string {
    const field = this.signupForm.get(fieldName);
    if (field && field.errors && field.touched) {
      if (field.errors['required'])
        return `${this.getFieldDisplayName(fieldName)} is required`;
      if (field.errors['email']) return 'Please enter a valid email address';
      if (field.errors['minlength']) {
        const requiredLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldDisplayName(
          fieldName
        )} must be at least ${requiredLength} characters`;
      }
      if (field.errors['requiredTrue'])
        return 'You must accept the terms and conditions';
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      firstName: 'First name',
      lastName: 'Last name',
      userName: 'Username',
      email: 'Email',
      phone: 'Phone number',
      classCategory: 'Class category',
      gender: 'Gender',
      dob: 'Date of birth',
      acceptTerms: 'Terms and conditions',
    };
    return displayNames[fieldName] || fieldName;
  }

  get canSubmit(): boolean {
    return this.signupForm.valid && !this.isSubmitting();
  }

  get submitButtonText(): string {
    return this.isSubmitting() ? 'Creating Account...' : 'Create Account';
  }
}
