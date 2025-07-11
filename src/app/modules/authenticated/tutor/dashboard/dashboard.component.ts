import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

import { DomSanitizer } from '@angular/platform-browser';
import { stats as NAV_LINKS, ratings, tutors, chats } from './data';
import { CommonModule } from '@angular/common';
import { DasboardCardSvgIcons } from '../../../../utils/icons';
import { CardUiDashboaredComponent } from '../../../../shared/components/card-ui-dashboared/card-ui-dashboared.component';
import { TutorDashBoardComponentTable } from '../../../../shared/components/tables/tutor-dash-board/tutor-dash-board.component';
import { Chart1Component } from '../../../../shared/components/charts/chart1/chart1.component';
@Component({
  selector: 'app-tutor-dashboard',
  imports: [
    SharedModule,
    CardUiDashboaredComponent,
    CommonModule,
    TutorDashBoardComponentTable,
    Chart1Component,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class TutorDashboardComponent {
  data: Array<any> = [];
  ratingsData = ratings;
  tutorData = tutors;
  chatData = chats;

  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.data = NAV_LINKS.map((link) => ({
      ...link,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(
        DasboardCardSvgIcons[link.icon]
      ),
    }));
  }

  sessions = [
    // { subject: '', type: '', exam: '', time: '' },
    { subject: 'mathematics', type: '1-on-1', exam: 'WAEC', time: '2:00pm' },
    { subject: 'physics', type: '1-on-1', exam: 'JAMB', time: '2:00pm' },
    { subject: 'english', type: 'group', exam: 'JAMB', time: '2:00pm' },
    { subject: 'chemistry', type: '1-on-1', exam: 'WAEC', time: '2:00pm' },
  ];
  perfomance = [
    { subject: 'mathematics', session: 10, demand: 'high' },
    { subject: 'mathematics', session: 10, demand: 'medium' },
    { subject: 'mathematics', session: 10, demand: 'low' },
  ];

  getTypeColor(type: string): string {
    switch (type.toLowerCase()) {
      case '1-on-1':
        return 'bg-black text-white';
      case 'group':
        return 'bg-subject-meta text-white';
      default:
        return 'bg-black';
    }
  }
  getDemandColor(demand: string): string {
    switch (demand.toLowerCase()) {
      case 'high':
        return 'bg-[#3DA17233] text-[#3DA172]';
      case 'medium':
        return 'bg-[#44444433] text-[#444444] ';
      case 'low':
        return 'bg-[#F0443833] text-[#F04438] ';
      default:
        return 'bg-black';
    }
  }
}
