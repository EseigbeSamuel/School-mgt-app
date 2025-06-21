import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-courses-table',
  imports: [CommonModule],
  templateUrl: './admin-courses-table.component.html',
  styleUrl: './admin-courses-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCoursesTableComponent {
  @Input() data: any[] = [];
}
