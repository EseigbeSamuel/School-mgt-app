import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin-sessions-table',
  imports: [CommonModule],
  templateUrl: './admin-sessions-table.component.html',
  styleUrl: './admin-sessions-table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSessionsTableComponent {
  @Input() data: any[] = [];
}
