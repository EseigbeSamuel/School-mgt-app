// src/app/features/auth/sign-up/sign-up.component.ts
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IntlPhoneInputComponent } from '../../../shared/components/intl-phone-input/intl-phone-input.component';
import { QueryService, QueryState } from '../../../../service/quary.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../enviroments/enviroment';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  standalone: true,
  imports: [
    InputUiComponent,
    MatCheckboxModule,
    IntlPhoneInputComponent,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class SignUpComponent {
  private fb = inject(FormBuilder);
  private query = inject(QueryService);
  private router = inject(Router);
  private apiUrl = environment.apiUrl;

  form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    dob: ['', Validators.required],
  });

  // Option 1: Use a getter (recommended)
  get buttonDisabled(): boolean {
    return this.form.invalid;
  }

  // Option 2: Alternative - use Observable (if you prefer reactive approach)
  // buttonDisabled$ = this.form.statusChanges.pipe(
  //   map(status => status === 'INVALID')
  // );

  private signupMutation = this.query.createMutation(
    `${this.apiUrl}/auth/signup`,
    {
      onSuccess: (data) => {
        console.log('Signup successful:', data);
        this.router.navigate(['/auth/confirm']);
      },
      onError: (error) => {
        console.error('Signup failed:', error);
        // Handle error (show notification, etc.)
      },
    }
  );

  // Observable for mutation state
  signupState$ = this.signupMutation.state$;

  signUp() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formData = this.form.value;
    console.log('Form Data:', formData);

    // Use mutation instead of direct query
    this.signupMutation.mutate(formData);
  }

  signIn() {
    this.router.navigate(['/auth/log-in']);
  }
}
