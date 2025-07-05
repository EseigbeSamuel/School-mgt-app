import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-calender',
  imports: [CommonModule],
  templateUrl: './schedule-calender.component.html',
  styleUrl: './schedule-calender.component.css',
})
export class ScheduleCalenderComponent implements OnInit {
  @Input() year: number = new Date().getFullYear();
  @Input() month: number = new Date().getMonth(); // 0-indexed
  @Input() events: { date: string; subject: string }[] = [];

  daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  calendarDays: {
    date: Date;
    dayNumber: number;
    events: { subject: string }[];
  }[] = [];

  ngOnInit() {
    this.generateCalendar(this.year, this.month);
  }

  generateCalendar(year: number, month: number) {
    this.calendarDays = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const startDay = firstDayOfMonth.getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const prevMonthDays = new Date(year, month, 0).getDate();

    // Fill previous month's days
    for (let i = startDay - 1; i >= 0; i--) {
      this.calendarDays.push({
        date: new Date(year, month - 1, prevMonthDays - i),
        dayNumber: prevMonthDays - i,
        events: [],
      });
    }

    // Fill current month's days
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      const iso = date.toISOString().split('T')[0];

      this.calendarDays.push({
        date,
        dayNumber: i,
        events: this.events.filter((e) => e.date === iso),
      });
    }

    // Fill next month's days
    while (this.calendarDays.length < 42) {
      const day = this.calendarDays.length - (startDay + totalDays - 1);
      this.calendarDays.push({
        date: new Date(year, month + 1, day),
        dayNumber: day,
        events: [],
      });
    }
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
}
