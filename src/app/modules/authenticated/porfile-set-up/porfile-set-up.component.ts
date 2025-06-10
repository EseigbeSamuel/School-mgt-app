import { Component, input } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { IntlPhoneInputComponent } from '../../../shared/components/intl-phone-input/intl-phone-input.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-porfile-set-up',
  imports: [
    SharedModule,
    InputUiComponent,
    IntlPhoneInputComponent,
    CommonModule,
  ],
  templateUrl: './porfile-set-up.component.html',
  styleUrl: './porfile-set-up.component.css',
})
export class PorfileSetUpComponent {
  userType: string | null = null;

  constructor(private router: Router) {
    this.userType = localStorage.getItem('userType');
  }

  save(event: Event) {
    this.router.navigate(['']);
  }

  cancel(event: Event) {
    this.router.navigate(['/auth/register']);
  }
}
