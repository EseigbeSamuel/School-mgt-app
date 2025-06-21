import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../../shared/components/paginator/paginator.component';
import { AdminCoursesTableComponent } from '../../../../../shared/components/tables/admin-courses-table/admin-courses-table.component';
import { SubjectCardComponent } from '../../../../../shared/components/subject-card/subject-card.component';
import { SUBJECTS_DATA } from '../../../student/my-courses/data';
import { SudentCoursesSubjetCardSvgIcons } from '../../../../../utils/icons';
import { DomSanitizer } from '@angular/platform-browser';

type TabType = 'courses' | 'materials' | 'assessments';
type ActiveTabType = 'assessments' | 'mock-exams' | 'quiz' | 'flashcards';

@Component({
  selector: 'app-admin-courses-listing',
  imports: [
    RouterLink,
    CommonModule,
    PaginatorComponent,
    AdminCoursesTableComponent,
    SubjectCardComponent,
  ],
  templateUrl: './admin-courses-listing.component.html',
  styleUrl: './admin-courses-listing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminCoursesListingComponent {
  tab: TabType = 'courses';
  activeTab: ActiveTabType = 'assessments';
  activeTabC: 'science' | 'art' | 'commercial' | 'vocational' = 'science';
  isDesktop = window.innerWidth >= 768;
  data: Array<any> = [];
  buttonData: Array<any> = [];

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

  constructor(private sanitizer: DomSanitizer) {}

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

  switchTabs(tab: 'science' | 'art' | 'commercial' | 'vocational') {
    this.activeTabC = tab;
  }

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
    });

    this.data = SUBJECTS_DATA.map((link) => ({
      ...link,
      isHeartActive: false,
      isBookmarkActive: false,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(
        SudentCoursesSubjetCardSvgIcons[link.icon]
      ),
    }));
    this.buttonData = SUBJECTS_DATA.slice(0, 3).map((link) => ({
      ...link,
      isHeartActive: false,
      isBookmarkActive: false,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(
        SudentCoursesSubjetCardSvgIcons[link.icon]
      ),
    }));
  }
}
