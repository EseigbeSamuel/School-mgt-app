import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { IntlPhoneInputComponent } from '../../../../../shared/components/intl-phone-input/intl-phone-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-profile',
  imports: [
    SharedModule,
    NgClass,
    NgForOf,
    InputUiComponent,
    IntlPhoneInputComponent,
    NgIf,
    RouterLink,
  ],
  templateUrl: './main-profile.component.html',
  styleUrl: './main-profile.component.css',
})
export class MainProfileComponent {
  lessons = [
    {
      subject: 'Biology',
      category: 'JAMB/UMBE CATEGORY',
      started: '02/10/2025',
      progress: 80,
      color: 'bg-blue-500',
    },
    {
      subject: 'Physics',
      category: 'WAEC/NECO CATEGORY',
      started: '02/11/2025',
      progress: 20,
      color: 'bg-red-500',
    },
    {
      subject: 'Mathematics',
      category: 'WAEC/NECO CATEGORY',
      started: '03/04/2025',
      progress: 60,
      color: 'bg-orange-500',
    },
    {
      subject: 'Chemistry',
      category: 'JAMB/UMBE CATEGORY',
      started: '03/11/2025',
      progress: 20,
      color: 'bg-red-500',
    },
  ];

  invisible = false;
  deleteAccount = false;
}
