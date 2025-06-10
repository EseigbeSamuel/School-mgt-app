import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubjectCardComponent } from '../../../../shared/components/subject-card/subject-card.component';
import { SUBJECTS_DATA } from './data';
import { SudentCoursesSubjetCardSvgIcons } from '../../../../utils/icons';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, SubjectCardComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css',
})
export class MyCoursesComponent {
  activeTab: 'science' | 'art' | 'commercial' | 'vocational' = 'science';
  buttomActiveTab: 'trending' | 'topRatedLessons' | 'recentlyUpdated' =
    'trending';

  data: Array<any> = [];
  buttonData: Array<any> = [];
  isDesktop = window.innerWidth >= 768;
  constructor(private sanitizer: DomSanitizer, private router: Router) {}

  switchTabs(tab: 'science' | 'art' | 'commercial' | 'vocational') {
    this.activeTab = tab;
  }
  switchTab2(tab: 'trending' | 'topRatedLessons' | 'recentlyUpdated') {
    this.buttomActiveTab = tab;
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
