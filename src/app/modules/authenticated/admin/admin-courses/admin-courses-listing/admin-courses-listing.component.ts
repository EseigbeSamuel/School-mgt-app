import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../../shared/components/paginator/paginator.component';
import { AdminCoursesTableComponent } from '../../../../../shared/components/tables/admin-courses-table/admin-courses-table.component';

type TabType = 'courses' | 'materials' | 'assessments';
type ActiveTabType = 'assessments' | 'mock-exams' | 'quiz' | 'flashcards';

@Component({
  selector: 'app-admin-courses-listing',
  imports: [
    RouterLink,
    CommonModule,
    PaginatorComponent,
    AdminCoursesTableComponent,
  ],
  templateUrl: './admin-courses-listing.component.html',
  styleUrl: './admin-courses-listing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCoursesListingComponent {
  tab: TabType = 'courses';
  activeTab: ActiveTabType = 'assessments';

  flashData: Array<any> = [
    {
      title: 'Some title',
      type: 'Flashcards',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Published',
      attempts: 400,
    },
    {
      title: 'Some title',
      type: 'Flashcards',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Drafts',
      attempts: 400,
    },
  ];

  assetsData: Array<any> = [
    {
      title: 'Some title',
      type: 'Flashcards',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Published',
      attempts: 400,
    },
    {
      title: 'Some title',
      type: 'Mock Exam',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Drafts',
      attempts: 400,
    },
  ];
  mockData: Array<any> = [
    {
      title: 'Some title',
      type: 'Mock Exam',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Published',
      attempts: 400,
    },
    {
      title: 'Some title',
      type: 'Mock Exam',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Drafts',
      attempts: 400,
    },
  ];
  quizData: Array<any> = [
    {
      title: 'Some title',
      type: 'Quiz',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Published',
      attempts: 400,
    },
    {
      title: 'Some title',
      type: 'Quiz',
      questions: 10,
      time_limit: '10 Mins',
      subject: 'English',
      avr_score: '40%',
      status: 'Drafts',
      attempts: 400,
    },
  ];

  changeTab(tab: TabType) {
    this.tab = tab;
  }

  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };

  switchActiveTabs(tab: ActiveTabType) {
    this.activeTab = tab;
  }
}
