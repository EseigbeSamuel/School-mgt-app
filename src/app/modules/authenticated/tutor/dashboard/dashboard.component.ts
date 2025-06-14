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
}
