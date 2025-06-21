import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../../shared/components/paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { AdminStudentsTableComponent } from '../../../../../shared/components/tables/admin-students-table/admin-students-table.component';

@Component({
  selector: 'app-admin-students-listing',
  imports: [PaginatorComponent, CommonModule, AdminStudentsTableComponent],
  templateUrl: './admin-students-listing.component.html',
  styleUrl: './admin-students-listing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminStudentsListingComponent {
  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };

  isGrid = false;

  dummyData = [
    {
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'Brian Smith',
      email: 'brian.smith@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'Charlotte Lee',
      email: 'charlotte.lee@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'David Kim',
      email: 'david.kim@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'Ella Green',
      email: 'ella.green@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'Franklin Moore',
      email: 'franklin.moore@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'Grace Tan',
      email: 'grace.tan@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
    {
      name: 'Henry Osei',
      email: 'henry.osei@example.com',
class: 'Science',
exam: "JAMB",
course_completion_rate: 50,
status: 'active'
    },
  ];

  toggleView() {
    this.isGrid = !this.isGrid;
  }
}
