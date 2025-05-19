import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { CurrencyFormatPipe } from '../../../../pipe/currency-format.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { stats as NAV_LINKS } from './data';
import { CommonModule } from '@angular/common';
import { DasboardCardSvgIcons } from '../../../../utils/icons';
@Component({
  selector: 'app-dashboard',
  imports: [SharedModule, CurrencyFormatPipe],
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
