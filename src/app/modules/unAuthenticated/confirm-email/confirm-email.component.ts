import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
@Component({
  selector: 'app-confirm-email',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    InputUiComponent,
    ReactiveFormsModule,
    MatIconModule,
  ],
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.css',
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
export class ConfirmEmailComponent {
  resetForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
    });
  }

  get isDisabled(): boolean {
    const email = this.resetForm.get('email')?.value;
    const emailControl = this.resetForm.get('email');
    return !email || (emailControl?.invalid ?? false);
  }

  isvisible = false;

  handleNavigate(event: Event) {
    event.preventDefault();
    this.router.navigate(['/auth/new-password']);
    console.log('Button clicked!', event);
  }

  isCoundownActive = false;
  countdown = 120;
  private countdownInterval: any;
  get minutes(): number {
    return Math.floor(this.countdown / 60);
  }
  get seconds(): number {
    return this.countdown % 60;
  }

  resendCode() {
    if (this.isCoundownActive) return;
    this.isCoundownActive = true;
    this.countdown = 120;
    console.log('resending verification code');

    this.countdownInterval = setInterval(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.stopCountdown();
      }
    }, 1000);
  }
  private stopCountdown() {
    clearInterval(this.countdownInterval);
    this.isCoundownActive = false;
  }
  ngOnDestroy() {
    this.stopCountdown();
  }
}
