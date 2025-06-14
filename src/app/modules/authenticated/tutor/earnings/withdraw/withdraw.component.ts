import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

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
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.css',
})

export class WithdrawComponent {
  banks: Bank[] = [
    {
      id: 'gt',
      name: 'Guaranty Trust Bank',
      accountNumber: '****3845',
      accountHolder: 'Adedunke Akinjola',
      icon: 'GT',
      iconBg: 'bg-orange-500',
    },
    {
      id: 'opay',
      name: 'Opay',
      accountNumber: '****4391',
      accountHolder: 'Adedunke Akinjola',
      icon: 'O',
      iconBg: 'bg-teal-500',
    },
  ];

  selectedBank: string = this.banks[0]?.id || '';
  currentBalance: number = 250000;
  withdrawalAmount: number | null = null;
  isValidAmount: boolean = false;

  selectBank(bankId: string) {
    this.selectedBank = bankId;
  }

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
        `Withdrawing NGN ${this.withdrawalAmount} to ${this.selectedBank}`
      );
    }
  }
}
