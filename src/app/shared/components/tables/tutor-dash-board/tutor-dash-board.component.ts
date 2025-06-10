import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tutor-dash-board',
  imports: [CommonModule],
  templateUrl: './tutor-dash-board.component.html',
  styleUrl: './tutor-dash-board.component.css',
})
export class TutorDashBoardComponentTable {
  @Input() data: any[] = [];
}
