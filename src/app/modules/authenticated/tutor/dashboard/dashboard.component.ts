import { Component } from '@angular/core';
import { CardUiDashboaredComponent } from '../../../../shared/components/card-ui-dashboared/card-ui-dashboared.component';
import { DasboardCardSvgIcons } from '../../../../utils/icons';
import { DomSanitizer } from '@angular/platform-browser';
import { stats as NAV_LINKS } from './data';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-dashboard',
  imports: [CardUiDashboaredComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class TutorDashboardComponent {
  data: Array<any> = [];
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
