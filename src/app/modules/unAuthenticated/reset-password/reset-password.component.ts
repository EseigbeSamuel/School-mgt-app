import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    InputUiComponent,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
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
export class ResetPasswordComponent {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  get password(): string {
    return this.resetForm.get('password')?.value || '';
  }

  get isDisabled(): boolean {
    return (
      this.resetForm.invalid ||
      this.password !== this.resetForm.get('confirmPassword')?.value
    );
  }

  isvisible = false;

  handleNavigate(event: Event) {
    event.preventDefault();
    this.router.navigate(['/auth/log-in']);
    console.log('Button clicked!', event);
  }

  get rules() {
    return {
      hasMinLength: this.password.length >= 8,
      hasUpperCase: /[A-Z]/.test(this.password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(this.password),
      hasNumber: /\d/.test(this.password),
    };
  }
}
