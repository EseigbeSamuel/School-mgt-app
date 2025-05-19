import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SessionTableComponent } from '../../../../shared/components/tutor-components/session-table/session-table.component';
import { InputUiComponent } from '../../../../shared/components/input-ui/input-ui.component';

@Component({
  selector: 'app-my-sessions',
  imports: [SharedModule, SessionTableComponent, InputUiComponent],
  templateUrl: './my-sessions.component.html',
  styleUrl: './my-sessions.component.css',
})
export class MySessionsComponent {
  columns = [
    { key: 'student', label: 'Student name' },
    { key: 'phone', label: 'Phone' },
    { key: 'lesson', label: 'Lesson type' },
    { key: 'duration', label: 'Duration' },
    { key: 'status', label: 'Status' },
    { key: 'date', label: 'Added' },
    { key: 'action', label: 'Action' },
  ];

  data = [
    {
      student: { name: 'Adebussola Maaga', email: 'adeb@example.com' },
      phone: '081456789211',
      lesson: 'WAEC Class',
      duration: '1Hr 30mins',
      status: 'Canceled',
      date: '22 Apr 2024',
    },
    {
      student: { name: 'Abedo Gbenga', email: 'gbenga@mail.com' },
      phone: '081456789211',
      lesson: 'WAEC Class',
      duration: '1Hr 30mins',
      status: 'Active',
      date: '22 Apr 2024',
    },
    {
      student: { name: 'Emeke Obi', email: 'obi@mail.com' },
      phone: '081456789211',
      lesson: 'WAEC Class',
      duration: '1Hr 30mins',
      status: 'Completed',
      date: '22 Apr 2024',
    },
  ];
}
