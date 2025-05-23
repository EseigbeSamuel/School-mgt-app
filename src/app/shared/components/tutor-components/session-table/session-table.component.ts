import { NgClass, NgForOf, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-session-table',
  imports: [NgClass, NgForOf, NgIf],
  templateUrl: './session-table.component.html',
  styleUrl: './session-table.component.css',
})
export class SessionTableComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
}
