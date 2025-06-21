import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SortDropdownComponent } from '../../../../../shared/components/sort-dropdown/sort-dropdown.component';
import { CommonModule } from '@angular/common';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../../shared/components/paginator/paginator.component';
import { AdminTutorsTableComponent } from '../../../../../shared/components/tables/admin-tutors-table/admin-tutors-table.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-tutor-listing',
  imports: [
    SortDropdownComponent,
    CommonModule,
    PaginatorComponent,
    AdminTutorsTableComponent,
    RouterLink,
  ],
  templateUrl: './admin-tutor-listing.component.html',
  styleUrl: './admin-tutor-listing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminTutorListingComponent {
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
      subjects: ['Math', 'Science'],
      qualification: 'B.Ed',
      sessions: 12,
      joinDate: '2023-08-15',
      status: 'Approved',
      ratings: 4.5,
    },
    {
      name: 'Brian Smith',
      email: 'brian.smith@example.com',
      subjects: ['English', 'History'],
      qualification: 'M.A. English',
      sessions: 8,
      joinDate: '2022-11-30',
      status: 'Pending',
      ratings: 4.2,
    },
    {
      name: 'Charlotte Lee',
      email: 'charlotte.lee@example.com',
      subjects: ['Physics', 'Chemistry'],
      qualification: 'PhD Physics',
      sessions: 20,
      joinDate: '2024-01-10',
      status: 'Flagged',
      ratings: 3.8,
    },
    {
      name: 'David Kim',
      email: 'david.kim@example.com',
      subjects: ['Computer Science'],
      qualification: 'B.Sc CS',
      sessions: 15,
      joinDate: '2023-06-18',
      status: 'Approved',
      ratings: 4.9,
    },
    {
      name: 'Ella Green',
      email: 'ella.green@example.com',
      subjects: ['Biology', 'Environmental Science'],
      qualification: 'M.Sc Biology',
      sessions: 10,
      joinDate: '2023-12-03',
      status: 'Pending',
      ratings: 4.1,
    },
    {
      name: 'Franklin Moore',
      email: 'franklin.moore@example.com',
      subjects: ['Geography', 'Civic Education'],
      qualification: 'B.A. Social Studies',
      sessions: 6,
      joinDate: '2022-09-25',
      status: 'Approved',
      ratings: 4.0,
    },
    {
      name: 'Grace Tan',
      email: 'grace.tan@example.com',
      subjects: ['Art', 'Design'],
      qualification: 'MFA',
      sessions: 9,
      joinDate: '2024-03-14',
      status: 'Flagged',
      ratings: 3.6,
    },
    {
      name: 'Henry Osei',
      email: 'henry.osei@example.com',
      subjects: ['Economics', 'Business Studies'],
      qualification: 'MBA',
      sessions: 13,
      joinDate: '2023-07-07',
      status: 'Approved',
      ratings: 4.7,
    },
  ];

  toggleView() {
    this.isGrid = !this.isGrid;
  }
}
