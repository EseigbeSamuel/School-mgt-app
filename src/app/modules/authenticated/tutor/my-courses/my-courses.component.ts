import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, SharedModule],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css',
})
export class MyCoursesComponentTutor {
  data = [
    {
      name: 'Mathematics',
      request: 34,
      change: 30,
      status: 'High',
    },
    {
      name: 'English',
      request: 3,
      change: -10,
      status: 'Low',
    },
  ];
}
