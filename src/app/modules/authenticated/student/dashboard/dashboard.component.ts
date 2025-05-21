import { Component } from '@angular/core';
import { CardUiDashboaredComponent } from '../../../../shared/components/card-ui-dashboared/card-ui-dashboared.component';
import { DomSanitizer } from '@angular/platform-browser';
import { statCards as items, examBoards } from './data';
import { SudentDasboardCardSvgIcons } from '../../../../utils/icons';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponentTable } from '../../../../shared/components/tables/student-dashboard/student-dashboard.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    CardUiDashboaredComponent,
    CommonModule,
    StudentDashboardComponentTable,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class StudentDashboardComponent {
  activeTab: 'category' | 'lessons' = 'category';
  data: Array<any> = [];
  examBoardData = examBoards;

  constructor(private sanitizer: DomSanitizer) {}

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
}
