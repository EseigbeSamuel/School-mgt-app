import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [SharedModule, InputUiComponent, CommonModule, MatCheckboxModule],
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(event: Event) {
    this.router.navigate(['']);
  }

  signUp() {
    this.router.navigate(['/auth/register']);
  }
  resetPassword() {
    this.router.navigate(['/auth/reset-password']);
  }
}
