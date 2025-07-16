import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SecureStorageService } from '../../../services/secure-storage.service';
import { AlertService } from '../../../services/alert.service';
import { AngularQueryService } from '../../../services/quary-client.service';
// test

interface AddPasswordPayload {
  token: string;
  password: string;
}

interface AddPasswordResponse {
  success: boolean;
  message: string;
}
@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    InputUiComponent,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
  animations: [
    trigger('bounceIn', [
      transition(':enter', [
        animate(
          '400ms',
          keyframes([
            style({ transform: 'scale(0.5)', opacity: 0, offset: 0 }),
            style({ transform: 'scale(1.2)', opacity: 1, offset: 0.7 }),
            style({ transform: 'scale(1)', opacity: 1, offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NewPasswordComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private http = inject(HttpClient);
  private secureStorage = inject(SecureStorageService);
  private alertService = inject(AlertService);
  private queryService = inject(AngularQueryService);

  resetForm: FormGroup;
  isVisible = false;
  submitError = signal<string | null>(null);

  // Add Password Mutation
  private addPasswordMutation = this.queryService.createMutation<
    AddPasswordResponse,
    AddPasswordPayload
  >(
    (payload: AddPasswordPayload) => {
      // Build query parameters
      const params = new HttpParams()
        .set('token', payload.token)
        .set('password', payload.password);

      return this.http.post<AddPasswordResponse>(
        'http://api.flexydemy.com:4000/dev/auth-service/api/v1/auth/add-password',
        null, // No body for this request since we're using query params
        { params }
      );
    },
    {
      onSuccess: (data: AddPasswordResponse) => {
        this.handlePasswordSetSuccess(data);
      },
      onError: (error: any) => {
        this.handlePasswordSetError(error);
      },
    }
  );

  constructor() {
    this.resetForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  get password(): string {
    return this.resetForm.get('password')?.value || '';
  }

  get confirmPassword(): string {
    return this.resetForm.get('confirmPassword')?.value || '';
  }

  get isDisabled(): boolean {
    return (
      this.resetForm.invalid ||
      this.password !== this.confirmPassword ||
      this.isSubmitting
    );
  }

  get isSubmitting(): boolean {
    return this.addPasswordMutation.isLoading();
  }

  get submitButtonText(): string {
    return this.isSubmitting ? 'Setting Password...' : 'Set Password';
  }

  handleNavigate() {
    this.router.navigate(['/auth/login']);
  }

  setPassword(event: Event) {
    event.preventDefault();

    // Clear any previous errors
    this.submitError.set(null);

    // Validate form
    if (this.resetForm.invalid) {
      this.markFormGroupTouched();
      return;
    }

    // Check if passwords match
    if (this.password !== this.confirmPassword) {
      this.submitError.set('Passwords do not match');
      return;
    }

    // Check password strength
    const rules = this.rules;
    if (
      !rules.hasMinLength ||
      !rules.hasUpperCase ||
      !rules.hasSpecialChar ||
      !rules.hasNumber
    ) {
      this.submitError.set('Password does not meet all requirements');
      return;
    }

    // Get token from secure storage
    const token = this.getAuthToken();
    if (!token) {
      this.alertService.error(
        'Authentication token not found. Please restart the process.',
        'Authentication Error'
      );
      this.submitError.set('Authentication token not found');
      return;
    }

    // Make API call
    const payload: AddPasswordPayload = {
      token: token,
      password: this.password,
    };

    this.addPasswordMutation.mutate(payload).subscribe({
      error: (error) => {
        console.error('Password set failed:', error);
      },
    });
  }

  private getAuthToken(): string | null {
    // Try to get token from auth tokens (most likely location)
    const authTokens = this.secureStorage.getAuthTokens();
    if (authTokens?.accessToken) {
      return authTokens.accessToken;
    }

    // Fallback: Try to get from direct storage (if stored differently)
    const storedToken =
      this.secureStorage.getSensitiveData<string>('authToken');
    if (storedToken) {
      return storedToken;
    }

    // Last resort: Check if it's stored under a different key
    const tempToken = this.secureStorage.getSensitiveData<string>('token');
    if (tempToken) {
      return tempToken;
    }

    return null;
  }

  private handlePasswordSetSuccess(data: AddPasswordResponse): void {
    this.alertService.success(
      'Password set successfully! You can now login with your new password.',
      'Success'
    );

    // Navigate to profile setup or login page
    this.isVisible = true;
  }

  private handlePasswordSetError(error: any): void {
    let errorMessage = 'Failed to set password. Please try again.';

    if (error.status === 400) {
      errorMessage = 'Invalid token or password. Please try again.';
    } else if (error.status === 401) {
      errorMessage = 'Token has expired. Please restart the process.';
    } else if (error.status === 422) {
      errorMessage = 'Password does not meet requirements.';
    } else if (error.error?.message) {
      errorMessage = error.error.message;
    }

    this.alertService.error(errorMessage, 'Password Set Failed');
    this.submitError.set(errorMessage);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.resetForm.controls).forEach((key) => {
      const control = this.resetForm.get(key);
      if (control) {
        control.markAsTouched();
      }
    });
  }

  get rules() {
    return {
      hasMinLength: this.password.length >= 8,
      hasUpperCase: /[A-Z]/.test(this.password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(this.password),
      hasNumber: /\d/.test(this.password),
    };
  }

  // Helper methods for template
  get isFormValid(): boolean {
    return this.resetForm.valid && this.password === this.confirmPassword;
  }

  get passwordMatchError(): boolean {
    const confirmControl = this.resetForm.get('confirmPassword');
    return !!(
      confirmControl?.touched &&
      confirmControl?.value &&
      this.password !== this.confirmPassword
    );
  }

  get passwordErrors(): string[] {
    const errors: string[] = [];
    const passwordControl = this.resetForm.get('password');

    if (passwordControl?.touched && passwordControl?.errors) {
      if (passwordControl.errors['required']) {
        errors.push('Password is required');
      }
      if (passwordControl.errors['minlength']) {
        errors.push('Password must be at least 8 characters long');
      }
    }

    return errors;
  }

  get confirmPasswordErrors(): string[] {
    const errors: string[] = [];
    const confirmControl = this.resetForm.get('confirmPassword');

    if (confirmControl?.touched && confirmControl?.errors) {
      if (confirmControl.errors['required']) {
        errors.push('Please confirm your password');
      }
    }

    if (this.passwordMatchError) {
      errors.push('Passwords do not match');
    }

    return errors;
  }
}
