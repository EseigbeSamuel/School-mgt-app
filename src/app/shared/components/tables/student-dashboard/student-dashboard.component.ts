import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student-dashboard-table',
  imports: [CommonModule],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.css',
})
export class StudentDashboardComponentTable {
  @Input() data: any[] = [];
  @Input() columns: any[] = [];

  @Input() variant: 'exam' | 'progress' = 'exam';

  getProgressColor(progress: number): string {
    if (progress >= 70) return '#3B82F6';
    if (progress >= 40) return '#FB923C';

    return '#EF4444';
  }
}
