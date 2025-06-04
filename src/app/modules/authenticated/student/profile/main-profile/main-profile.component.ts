import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';
import { IntlPhoneInputComponent } from '../../../../../shared/components/intl-phone-input/intl-phone-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-profile',
  imports: [
    SharedModule,
    NgClass,
    NgFor,
    InputUiComponent,
    IntlPhoneInputComponent,
    NgIf,
    RouterLink,
  ],
  templateUrl: './main-profile.component.html',
  styleUrl: './main-profile.component.css',
})
export class MainProfileComponent {
  tasks = [
    {
      task: 'English Tutor',
      class: 'Group class',
      date: 'May 12, 2025',
      time: '09.00 - 10.00 AM',
    },
    {
      task: 'English Tutor',
      class: 'Group class',
      date: 'May 12, 2025',
      time: '09.00 - 10.00 AM',
    },
    {
      task: 'English Tutor',
      class: 'Group class',
      date: 'May 12, 2025',
      time: '09.00 - 10.00 AM',
    },
  ];
  progress = [
    {
      topic: 'Introductory to prefix and suffix',
      subject: 'Use of English',
      progress: 60,
    },
    {
      topic: 'Introductory to prefix and suffix',
      subject: 'Use of English',
      progress: 60,
    },
    {
      topic: 'Introductory to prefix and suffix',
      subject: 'Use of English',
      progress: 60,
    },
  ];

  columns = [
    { key: 'transactionId', header: 'Transaction ID' },
    { key: 'date', header: 'Date' },
    { key: 'amount', header: 'Amount' },
    { key: 'status', header: 'Status' },
    { key: 'action', header: 'Action' },
  ];

  data: { [key: string]: any }[] = [
    {
      transactionId: '#123456789',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Confirmed',
    },
    {
      transactionId: '#123456789',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Canceled',
    },
    {
      transactionId: '#123456789',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Pending',
    },
    {
      transactionId: '#123456789',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Complete',
    },
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'confirmed':
      case 'complete':
        return 'bg-[#05CD991A] text-[#05CD99]';
      case 'canceled':
        return 'bg-[#F90B0B1A] text-[#F90B0B]';
      case 'pending':
        return 'bg-[#CDC6051A] text-[#CDC605] ';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }

  invisible = false;
  deleteAccount = false;
}
