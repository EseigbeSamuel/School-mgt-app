import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import {
  SortConfig,
  SortDropdownComponent,
  SortOption,
} from '../../../../shared/components/sort-dropdown/sort-dropdown.component';
import { CalenderComponent } from '../../../../shared/components/calender/calender.component';

@Component({
  selector: 'app-my-courses-tutor',
  imports: [
    CommonModule,
    SharedModule,
    SortDropdownComponent,
    CalenderComponent,
  ],
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

  customSortOptions: SortOption[] = [
    { value: 'daily', label: 'Daily', direction: 'desc' },
    { value: 'weekly', label: 'Weekly', direction: 'desc' },
    { value: 'monthly', label: 'Monthly', direction: 'desc' },
    { value: 'yearly', label: 'Yearly', direction: 'desc' },
  ];

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );
    // Apply sorting logic here
  }
}
