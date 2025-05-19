import { Component } from '@angular/core';
import { SharedModule } from "../../../../shared/shared.module";
import { CurrencyFormatPipe } from '../../../../pipe/currency-format.pipe';

@Component({
  selector: 'app-dashboard',
  imports: [SharedModule, CurrencyFormatPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class TutorDashboardComponent {}
