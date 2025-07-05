import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-courses-course-table',
  imports: [CommonModule],
  templateUrl: './admin-courses-course-table.component.html',
  styleUrl: './admin-courses-course-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCoursesCourseTableComponent {
  @Input() data: any[] = [];
}
