import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-card-ui-dashboared',
  imports: [CommonModule, SharedModule],
  templateUrl: './card-ui-dashboared.component.html',
  styleUrl: './card-ui-dashboared.component.css',
})
export class CardUiDashboaredComponent {
  @Input() title!: string;
  @Input() value!: number;
  @Input() icon!: string;
  @Input() growthRate!: number;
  @Input() timeRange: string = 'in 24hours';
  @Input() type: 'currency' | 'number' = 'number';

  get formattedValue(): string {
    return this.type === 'currency'
      ? new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
        }).format(this.value)
      : this.value.toString();
  }
}
