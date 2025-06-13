import { Component } from '@angular/core';
import { TutorEarningsComponentTable } from '../../../../shared/components/tables/tutor-earnings/tutor-earnings.component';

@Component({
  selector: 'app-earnings',
  imports: [TutorEarningsComponentTable],
  templateUrl: './earnings.component.html',
  styleUrl: './earnings.component.css',
})
export class EarningsComponent {}
