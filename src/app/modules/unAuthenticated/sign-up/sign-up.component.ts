// src/app/features/auth/sign-up/sign-up.component.ts
import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';
import { InputUiComponent } from '../../../shared/components/input-ui/input-ui.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IntlPhoneInputComponent } from '../../../shared/components/intl-phone-input/intl-phone-input.component';

import { CommonModule } from '@angular/common';
import { DateDobComponent } from '../../../shared/components/date-dob/date-dob.component';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  imports: [
    InputUiComponent,
    MatCheckboxModule,
    IntlPhoneInputComponent,
    CommonModule,
    SharedModule,
    DateDobComponent,
  ],
})
export class SignUpComponent {
  public classCategory = [
    {
      name: 'Science',
      vaue: 'SCIENE',
    },
    {
      name: 'Art',
      vaue: 'ART',
    },
    {
      name: 'Commercial',
      vaue: 'COMMERCIAL',
    },
  ];
  public gender = [
    {
      name: 'Male',
      vaue: 'Male',
    },
    {
      name: 'Female',
      vaue: 'Female',
    },
  ];
  constructor(private router: Router) {}

  signIn() {
    this.router.navigate(['/auth/log-in']);
  }
  signUp(event: Event) {
    this.router.navigate(['/auth/confirm']);
  }
}
