import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PaginationMetadata, PaginatorComponent } from '../../paginator/paginator.component';

interface PaymentTransaction {
  id: string;
  paymentMethod: string;
  cardIcon: string;
  paymentAmount: number;
  date: string;
  status: 'Ready to process' | 'Canceled';
}

@Component({
  selector: 'app-tutor-earnings',
  imports: [CommonModule, PaginatorComponent],
  templateUrl: './tutor-earnings.component.html',
  styleUrl: './tutor-earnings.component.css',
})
export class TutorEarningsComponentTable {
  data: PaymentTransaction[] = [
    {
      id: 'ADB001',
      paymentMethod: 'Master card',
      cardIcon: 'MasterCard',
      paymentAmount: 12000,
      date: '02 Feb 2025',
      status: 'Ready to process',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Visa',
      cardIcon: 'VISA',
      paymentAmount: 7000,
      date: '02 Feb 2025',
      status: 'Canceled',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Master card',
      cardIcon: 'MasterCard',
      paymentAmount: 12000,
      date: '02 Feb 2025',
      status: 'Ready to process',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Visa',
      cardIcon: 'VISA',
      paymentAmount: 7000,
      date: '02 Feb 2025',
      status: 'Canceled',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Master card',
      cardIcon: 'MasterCard',
      paymentAmount: 12000,
      date: '02 Feb 2025',
      status: 'Ready to process',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Visa',
      cardIcon: 'VISA',
      paymentAmount: 7000,
      date: '02 Feb 2025',
      status: 'Canceled',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Master card',
      cardIcon: 'MasterCard',
      paymentAmount: 12000,
      date: '02 Feb 2025',
      status: 'Ready to process',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Visa',
      cardIcon: 'VISA',
      paymentAmount: 7000,
      date: '02 Feb 2025',
      status: 'Canceled',
    },
    {
      id: 'ADB001',
      paymentMethod: 'Visa',
      cardIcon: 'VISA',
      paymentAmount: 7000,
      date: '02 Feb 2025',
      status: 'Canceled',
    },
  ];

  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };

  onActionClick(transaction: PaymentTransaction): void {
    console.log('Action clicked for:', transaction);
    // Handle menu/action logic here
  }
}
