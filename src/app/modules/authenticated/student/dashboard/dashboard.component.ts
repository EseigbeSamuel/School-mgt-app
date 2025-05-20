import { Component } from '@angular/core';
import { CardUiDashboaredComponent } from '../../../../shared/components/card-ui-dashboared/card-ui-dashboared.component';
import { DomSanitizer } from '@angular/platform-browser';
import { statCards as items } from './data';
import { SudentDasboardCardSvgIcons } from '../../../../utils/icons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CardUiDashboaredComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class StudentDashboardComponent {
  data: Array<any> = [];
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.data = items.map((link) => ({
      ...link,
      safeSvg: this.sanitizer.bypassSecurityTrustHtml(
        SudentDasboardCardSvgIcons[link.icon]
      ),
    }));
  }
}
