import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../../../shared/shared.module';

interface Bank {
  id: string;
  name: string;
  accountNumber: string;
  accountHolder: string;
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-withdraw',
  imports: [RouterModule, FormsModule, CommonModule, SharedModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})
export class WithdrawComponent {
  currentBalance: number = 250000;
  withdrawalAmount: number | null = null;
  isValidAmount: boolean = false;

  validateAmount() {
    if (this.withdrawalAmount === null || this.withdrawalAmount === undefined) {
      this.isValidAmount = false;
      return;
    }
    const amount = Number(this.withdrawalAmount);
    this.isValidAmount =
      amount > 0 && amount >= 1000 && amount <= this.currentBalance;
  }
  withdrawMoney() {
    if (this.isValidAmount && this.withdrawalAmount) {
      console.log(
        `Withdrawing NGN ${this.withdrawalAmount} to ${this.selectedAccount}`
      );
    }
  }

  selectedAccount = 'opay';

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

  selectAccount(id: string) {
    this.selectedAccount = id;
  }
}
