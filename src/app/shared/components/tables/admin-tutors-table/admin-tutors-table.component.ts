import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-tutors-table',
  imports: [CommonModule],
  templateUrl: './admin-tutors-table.component.html',
  styleUrl: './admin-tutors-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTutorsTableComponent {
  @Input() data: any[] = [];
}
