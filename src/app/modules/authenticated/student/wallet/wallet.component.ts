import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet',
  imports: [SharedModule, CommonModule],
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.css',
})
export class WalletComponent {
  payments = [
    {
      name: 'Bank Transfer',
      desc: 'Transfer from your bank account',
      type: 'bank',
    },
    {
      name: 'Debit/Credit Card',
      desc: 'Pay with Visa, Mastercard or Verve',
      type: 'card',
    },
    { name: 'USSD Payment', desc: 'Pay via mobile banking code', type: 'ussd' },
    { name: 'Paystack', desc: 'Secure online payment', type: 'pay' },
  ];
  services = [
    {
      name: 'Tutoring Sessions',
      desc: 'Book 1-on-1 sessions',
      price: 15000,
      type: 'tutor',
    },
    {
      name: 'Tutoring Sessions',
      desc: 'Book 1-on-1 sessions',
      price: 15000,
      type: 'tutor',
    },
    {
      name: 'Platfrom Payment',
      desc: 'FlexyDemy subscription',
      price: 15000,
      type: 'platform',
    },
    {
      name: 'Platfrom Payment',
      desc: 'FlexyDemy subscription',
      price: 15000,
      type: 'platform',
    },
  ];
  transactions = [
    {
      id: 'txn001234',
      name: 'Mathematics Tutoring Session',
      date: '12-2-2025',
      time: '2:13',
      status: 'completed',
      type: 'out',
      money: 15000,
    },
    {
      id: 'txn001234',
      name: 'Wallet Top-up',
      date: '12-2-2025',
      time: '2:13',
      status: 'completed',
      type: 'in',
      money: 15000,
    },
    {
      id: 'txn001234',
      name: 'Wallet Top-up',
      date: '12-2-2025',
      time: '2:13',
      status: 'completed',
      type: 'in',
      money: 15000,
    },
    {
      id: 'txn001234',
      name: 'Mathematics Tutoring Session',
      date: '12-2-2025',
      time: '2:13',
      status: 'completed',
      type: 'out',
      money: 15000,
    },
  ];
  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-[#CAEBC3] text-[#23BD33]';
      case 'pending':
        return 'bg-[#FFE3AF] text-[#0A0338] ';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
  getTypeClass(type: string): string {
    switch (type.toLowerCase()) {
      case 'in':
        return ' text-[#4169E1]';
      case 'out':
        return ' text-[#F04438] ';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
}
