import { Component, HostListener } from '@angular/core';
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
      taskId: '#123456a',
      task: 'English Tutor',
      class: 'Group class',
      date: 'May 12, 2025',
      time: '09.00 - 10.00 AM',
    },
    {
      taskId: '#123456b',
      task: 'English Tutor',
      class: 'Group class',
      date: 'May 12, 2025',
      time: '09.00 - 10.00 AM',
    },
    {
      taskId: '#123456c',
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
      transactionId: '#123456789a',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Confirmed',
    },
    {
      transactionId: '#1234567890b',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Canceled',
    },
    {
      transactionId: '#123456789c',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Pending',
    },
    {
      transactionId: '#1234567890d',
      date: '2 March 2021',
      amount: 'NGN 30,000',
      status: 'Complete',
    },
  ];

  openMenuId: string | null = null;
  taskMenuId: string | null = null;

  toggleMenu(transactionId: string): void {
    this.openMenuId = this.openMenuId === transactionId ? null : transactionId;
  }

  toggleTaskMenu(taskId: string): void {
    this.taskMenuId = this.taskMenuId === taskId ? null : taskId;
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutside(target: HTMLElement) {
    if (!target.closest('.action-menu')) {
      this.openMenuId = null;
    }
  }

  @HostListener('document:click', ['$event.target'])
  onClickOutsideTask(target: HTMLElement) {
    if (!target.closest('.task-action-menu')) {
      this.taskMenuId = null;
    }
  }

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
