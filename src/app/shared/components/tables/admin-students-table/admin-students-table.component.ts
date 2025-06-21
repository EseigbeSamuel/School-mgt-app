import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-students-table',
  imports: [CommonModule],
  templateUrl: './admin-students-table.component.html',
  styleUrl: './admin-students-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminStudentsTableComponent {
  @Input() data: any[] = [];
}
