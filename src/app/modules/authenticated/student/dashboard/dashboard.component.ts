import { Component } from '@angular/core';
import { CardUiDashboaredComponent } from '../../../../shared/components/card-ui-dashboared/card-ui-dashboared.component';
import { DomSanitizer } from '@angular/platform-browser';
import { statCards as items, examBoards, progressTableData } from './data';
import { SudentDasboardCardSvgIcons } from '../../../../utils/icons';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponentTable } from '../../../../shared/components/tables/student-dashboard/student-dashboard.component';
import {
  PaginationMetadata,
  PaginatorComponent,
} from '../../../../shared/components/paginator/paginator.component';
import { Chart2Component } from '../../../../shared/components/charts/chart2/chart2.component';
import { PiechartComponent } from '../../../../shared/components/charts/piechart/piechart.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  imports: [
    CardUiDashboaredComponent,
    CommonModule,
    StudentDashboardComponentTable,
    PaginatorComponent,
    Chart2Component,
    PiechartComponent,
    RouterLink,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class StudentDashboardComponent {
  activeTab: 'category' | 'lessons' = 'category';
  data: Array<any> = [];
  examBoardData = examBoards;
  progressData = progressTableData;
  constructor(private sanitizer: DomSanitizer) {}
  paginationMetadata: PaginationMetadata = {
    currentPage: 1,
    totalPages: 10,
    pageSize: 10,
    totalItems: 0,
  };

  ngOnInit() {
    this.data = items.map((link) => ({
      ...link,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(
        SudentDasboardCardSvgIcons[link.icon]
      ),
    }));
  }

  switchTabs(tab: 'category' | 'lessons') {
    this.activeTab = tab;
  }

  sessions = [
    {
      subject: 'English',
      teacher: 'mr john smith',
      time: '1:00 PM',
      date: 'today',
    },
    {
      subject: 'Mathematics',
      teacher: 'mr adeleke aju',
      time: '1:22 PM',
      date: 'today',
    },
    {
      subject: 'Chemistry',
      teacher: 'mr benjamin ajibola',
      time: '3:22 PM',
      date: 'today',
    },
    // {
    //   subject: 'Physics',
    //   teacher: 'mr benjamin ajibola',
    //   time: '4:30 PM',
    //   date: 'today',
    // },
  ];

  progress = [
    { subject: 'JAMB English', progress: 20 },
    { subject: 'JAMB English', progress: 75 },
    { subject: 'JAMB English', progress: 75 },
  ];
}
