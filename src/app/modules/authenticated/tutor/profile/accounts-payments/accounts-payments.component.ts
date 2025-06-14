import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from "../../../../../shared/shared.module";

@Component({
  selector: 'app-accounts-payments',
  imports: [CommonModule, SharedModule],
  templateUrl: './accounts-payments.component.html',
  styleUrl: './accounts-payments.component.css',
})
export class AccountsPaymentsComponent {
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
