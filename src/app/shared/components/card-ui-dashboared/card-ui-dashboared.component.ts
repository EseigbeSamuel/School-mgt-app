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
  @Input() count = 0;
  @Input() subjects: string[] = [];
  @Input() variant: 'student' | 'tutor' = 'tutor';

  get formattedValue(): string {
    return this.type === 'currency'
      ? new Intl.NumberFormat('en-NG', {
          style: 'currency',
          currency: 'NGN',
        }).format(this.value)
      : this.value.toString();
  }
  subjectColors: Record<string, string> = {
    Math: 'bg-[#A855F71A] text-[#A855F7]',
    Bio: 'bg-[#5912391A] text-[#591239]',
    Che: 'bg-[#007AFF1A] text-[#007AFF]',
    Phy: 'bg-[#EAB3081A] text-[#F79E1B]',
    Geography: 'bg-[#504E991A] text-[#504E99]',
  };

  subjectColor(subject: string): string {
    const base = 'text-xs font-medium px-2 py-1 rounded-full';
    return `${base} ${
      this.subjectColors[subject] || 'bg-gray-100 text-gray-700'
    }`;
  }
}
