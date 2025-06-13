import { Component } from '@angular/core';
import { TutorEarningsComponentTable } from '../../../../../shared/components/tables/tutor-earnings/tutor-earnings.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  imports: [TutorEarningsComponentTable, RouterModule],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css',
})
export class TransactionHistoryComponent {}
