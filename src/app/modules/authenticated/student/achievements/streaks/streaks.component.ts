import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-streaks',
  imports: [CommonModule],
  templateUrl: './streaks.component.html',
  styleUrl: './streaks.component.css',
})
export class StreaksComponent {
  days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  dates = [
    { date: 23, streak: false },
    { date: 24, streak: false },
    { date: 25, streak: true },
    { date: 26, streak: true },
    { date: 27, streak: true },
    { date: 28, streak: false },
    { date: 29, streak: false, isToday: true },
  ];
}
