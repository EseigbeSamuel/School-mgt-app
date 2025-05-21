import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { SortDropdownComponent, SortOption } from '../../../../shared/components/sort-dropdown/sort-dropdown.component';

@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, SharedModule, SortDropdownComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css',
})
export class MyCoursesComponent {
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

  onSortChange(option: SortOption): void {
    console.log('Selected sort option:', option);
    // Handle the sort change logic here
  }
}
