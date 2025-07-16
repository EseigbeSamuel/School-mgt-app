import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurrencyFormatPipe } from '../../../../../pipe/currency-format.pipe';

@Component({
  selector: 'app-tutor-main-wallet',
  imports: [SharedModule, CommonModule, RouterModule, CurrencyFormatPipe],
  templateUrl: './main-wallet.component.html',
  styleUrl: './main-wallet.component.css',
})
export class MainWalletComponent {
  analytics = [
    {
      name: 'Available Balance',
      amount: 45400,
      info: 'Ready to withdraw',
      type: 'balance',
    },
    {
      name: 'Pending Payout',
      amount: 8700,
      info: 'Processing  withdrawal',
      type: 'pending',
    },
    {
      name: 'This Month',
      amount: 8500,
      info: '+8% from last month',
      type: 'date',
    },
    { name: 'Total Earning', amount: 211000, info: 'all time', type: 'total' },
  ];
  transaction = [
    {
      type: 'earning',
      description: 'Session with Adebayo Samuel - Mathematics',
      amount: 4500,
      date: '17-8-2025',
      status: 'pending',
    },
    {
      type: 'withdraw',
      description: 'Bank Transfer to GTBank',
      amount: 14500,
      date: '17-8-2025',
      status: 'completed',
    },
    {
      type: 'earning',
      description:
        'Group Session with Adebayo Samuel, ibrahim Abduqualdree, Chiokma Nicholas - Mathematics',
      amount: 4500,
      date: '17-8-2025',
      status: 'cancelled',
    },
    {
      type: 'withdraw',
      description: 'Bank Transfer to Opay',
      amount: 14500,
      date: '17-8-2025',
      status: 'completed',
    },
  ];

  earning = [
    {
      name: 'by subject',
      income: [
        { subject: 'mathematics', amount: 4500 },
        { subject: 'physics', amount: 9000 },
        { subject: 'chemistry', amount: 6500 },
      ],
    },
    {
      name: 'by session type',
      income: [
        { subject: '1-on-1 session', amount: 4500 },
        { subject: 'group session', amount: 4500 },
      ],
    },
  ];

  accounts = [
    {
      id: 'gtbank',
      name: 'Guaranty Trust Bank',
      masked: '****28552',
      owner: 'Adeoluwa Adegbuyi',
      logo: '/assets/images/gtbank.png',
    },
    {
      id: 'opay',
      name: 'Opay',
      masked: '****65432',
      owner: 'Adeoluwa Adegbuyi',
      logo: '/assets/images/opay.png',
    },
  ];
  selectedAccount = 'opay';

  selectAccount(id: string) {
    this.selectedAccount = id;
  }

  currentView: string = 'history';

  setView(view: string) {
    this.currentView = view;
  }
  getButtonStyle(view: string) {
    const base = 'py-[10px] px-[14px] w-full hover:bg-[#FBFBFB] rounded-xl';
    const isActive = this.currentView === view;
    return isActive
      ? `${base} bg-[#FBFBFB] rounded-xl`
      : `${base} hover:bg-[#FBFBFB] rounded-xl`;
  }
  statusStyle(status: string): string {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-blue-100 text-blue-500 ';
      case 'completed':
        return 'bg-green-100 text-green-500 ';
      case 'cancelled':
        return 'bg-red-100 text-red-500 ';
      default:
        return 'bg-gray-400 ';
    }
  }
}
