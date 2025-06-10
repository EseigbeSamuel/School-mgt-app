import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ScheduleItem {
  time: string;
  subject: string;
  subjectClass: string;
}

interface DaySchedule {
  date: number;
  dayName: string;
  month: string;
  isCurrentMonth: boolean;
  schedules: ScheduleItem[];
}

@Component({
  selector: 'app-calender',
  imports: [CommonModule],
  templateUrl: './calender.component.html',
  styleUrl: './calender.component.css',
})
export class CalenderComponent {
  dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();

  calendarDays: DaySchedule[] = [];

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.calendarDays = [];

    // Get first day of month and total days in month
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const daysInMonth = new Date(
      this.currentYear,
      this.currentMonth + 1,
      0
    ).getDate();

    // Get days from previous month
    const daysInPrevMonth = new Date(
      this.currentYear,
      this.currentMonth,
      0
    ).getDate();

    // Add previous month's days
    for (let i = firstDay - 1; i >= 0; i--) {
      const date = daysInPrevMonth - i;
      this.calendarDays.push({
        date,
        dayName: this.getDayName(
          new Date(this.currentYear, this.currentMonth - 1, date).getDay()
        ),
        month: this.months[(this.currentMonth - 1 + 12) % 12],
        isCurrentMonth: false,
        schedules: this.generateRandomSchedule(),
      });
    }

    // Add current month's days
    for (let i = 1; i <= daysInMonth; i++) {
      this.calendarDays.push({
        date: i,
        dayName: this.getDayName(
          new Date(this.currentYear, this.currentMonth, i).getDay()
        ),
        month: this.months[this.currentMonth],
        isCurrentMonth: true,
        schedules: this.generateRandomSchedule(),
      });
    }

    // Add next month's days to complete the grid
    const totalCells = Math.ceil(this.calendarDays.length / 7) * 7;
    const nextMonthDays = totalCells - this.calendarDays.length;

    for (let i = 1; i <= nextMonthDays; i++) {
      this.calendarDays.push({
        date: i,
        dayName: this.getDayName(
          new Date(this.currentYear, this.currentMonth + 1, i).getDay()
        ),
        month: this.months[(this.currentMonth + 1) % 12],
        isCurrentMonth: false,
        schedules: this.generateRandomSchedule(),
      });
    }
  }

  getDayName(dayIndex: number): string {
    return this.dayHeaders[dayIndex];
  }

  generateRandomSchedule(): ScheduleItem[] {
    // 60% chance of having at least one class
    if (Math.random() > 0.4) {
      const subjects = [
        { subject: 'Physics', subjectClass: 'physics' },
        { subject: 'Math', subjectClass: 'math' },
        { subject: 'Chemistry', subjectClass: 'chemistry' },
        { subject: 'English', subjectClass: 'english' },
      ];

      const randomSubject =
        subjects[Math.floor(Math.random() * subjects.length)];
      return [
        {
          time: `${8 + Math.floor(Math.random() * 8)}:${
            Math.random() > 0.5 ? '00' : '30'
          } ${Math.random() > 0.5 ? 'AM' : 'PM'}`,
          subject: randomSubject.subject,
          subjectClass: randomSubject.subjectClass,
        },
      ];
    }
    return [];
  }

  changeMonth(offset: number) {
    this.currentMonth += offset;

    // Handle year transition
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }

    this.generateCalendar();
  }

  getScheduleClasses(subjectClass: string): string {
    const baseClasses = ' shadow-sm';

    switch (subjectClass) {
      case 'physics':
        return `${baseClasses} bg-green-50 border-green-500 text-green-800`;
      case 'math':
        return `${baseClasses} bg-orange-50 border-orange-500 text-orange-800`;
      case 'chemistry':
        return `${baseClasses} bg-pink-50 border-pink-500 text-pink-800`;
      case 'english':
        return `${baseClasses} bg-blue-50 border-blue-500 text-blue-800`;
      default:
        return `${baseClasses} bg-gray-50 border-gray-500 text-gray-800`;
    }
  }

  trackByDay(index: number, day: DaySchedule): string {
    return `${day.dayName}-${day.date}-${day.month}-${index}`;
  }

  trackBySchedule(index: number, schedule: ScheduleItem): string {
    return `${schedule.subject}-${schedule.time}-${index}`;
  }
}
