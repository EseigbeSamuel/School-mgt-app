import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../../shared/components/paginator/paginator.component';
import { CommonModule } from '@angular/common';
import { AdminSessionsTableComponent } from '../../../../../shared/components/tables/admin-sessions-table/admin-sessions-table.component';

@Component({
  selector: 'app-admin-session-listing',
  imports: [
    RouterLink,
    PaginatorComponent,
    CommonModule,
    AdminSessionsTableComponent,
  ],
  templateUrl: './admin-session-listing.component.html',
  styleUrl: './admin-session-listing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminSessionListingComponent {
  activeTab: 'reviews' | 'complaints' | 'feedbacks' = 'reviews';
  reviewsData: Array<any> = [
    // First set
    {
      from: 'John Smith',
      to: 'Sarah Johnson',
      ratings: 4.5,
      comment: 'Excellent service and very professional. Highly recommend!',
      date: '2024-06-15',
      status: 'Resolved',
    },
    {
      from: 'Emily Davis',
      to: 'Mike Wilson',
      ratings: 3.2,
      comment:
        'Good overall experience but there were some minor delays in delivery.',
      date: '2024-06-14',
      status: 'Pending',
    },
    {
      from: 'Alex Brown',
      to: 'Lisa Chen',
      ratings: 5.0,
      comment:
        'Outstanding work! Exceeded all expectations and delivered on time.',
      date: '2024-06-13',
      status: 'Resolved',
    },
    {
      from: 'David Miller',
      to: 'Jennifer Garcia',
      ratings: 2.8,
      comment:
        'Service was okay but communication could have been better throughout the process.',
      date: '2024-06-12',
      status: 'Received',
    },
    {
      from: 'Rachel Taylor',
      to: 'Tom Anderson',
      ratings: 4.1,
      comment:
        'Very satisfied with the results. Professional and timely completion.',
      date: '2024-06-11',
      status: 'Resolved',
    },
  ];
  complaintsData: Array<any> = [
    {
      from: 'John Smith',
      to: 'Sarah Johnson',
      ratings: 4.5,
      comment: 'Excellent service and very professional. Highly recommend!',
      date: '2024-06-10',
      status: 'Resolved',
    },
    {
      from: 'Emily Davis',
      to: 'Mike Wilson',
      ratings: 3.2,
      comment:
        'Good overall experience but there were some minor delays in delivery.',
      date: '2024-06-09',
      status: 'Pending',
    },
    {
      from: 'Alex Brown',
      to: 'Lisa Chen',
      ratings: 5.0,
      comment:
        'Outstanding work! Exceeded all expectations and delivered on time.',
      date: '2024-06-08',
      status: 'Resolved',
    },
    {
      from: 'David Miller',
      to: 'Jennifer Garcia',
      ratings: 2.8,
      comment:
        'Service was okay but communication could have been better throughout the process.',
      date: '2024-06-07',
      status: 'Received',
    },
    {
      from: 'Rachel Taylor',
      to: 'Tom Anderson',
      ratings: 4.1,
      comment:
        'Very satisfied with the results. Professional and timely completion.',
      date: '2024-06-06',
      status: 'Resolved',
    },
  ];
  feedbacksData: Array<any> = [
    {
      from: 'John Smith',
      to: 'Sarah Johnson',
      ratings: 4.5,
      comment: 'Excellent service and very professional. Highly recommend!',
      date: '2024-06-05',
      status: 'Resolved',
    },
    {
      from: 'Emily Davis',
      to: 'Mike Wilson',
      ratings: 3.2,
      comment:
        'Good overall experience but there were some minor delays in delivery.',
      date: '2024-06-04',
      status: 'Pending',
    },
    {
      from: 'Alex Brown',
      to: 'Lisa Chen',
      ratings: 5.0,
      comment:
        'Outstanding work! Exceeded all expectations and delivered on time.',
      date: '2024-06-03',
      status: 'Resolved',
    },
    {
      from: 'David Miller',
      to: 'Jennifer Garcia',
      ratings: 2.8,
      comment:
        'Service was okay but communication could have been better throughout the process.',
      date: '2024-06-02',
      status: 'Received',
    },
    {
      from: 'Rachel Taylor',
      to: 'Tom Anderson',
      ratings: 4.1,
      comment:
        'Very satisfied with the results. Professional and timely completion.',
      date: '2024-06-01',
      status: 'Resolved',
    },
  ];

  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };

  switchTabs(tab: 'reviews' | 'complaints' | 'feedbacks') {
    this.activeTab = tab;
  }
}
