import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubjectCardComponent } from '../../../../shared/components/subject-card/subject-card.component';
import { SUBJECTS_DATA } from './data';

@Component({
  selector: 'app-my-courses',
  imports: [CommonModule, SubjectCardComponent],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css',
})
export class MyCoursesComponent {
  activeTab: 'science' | 'art' | 'commercial' | 'vocational' = 'science';
  data = SUBJECTS_DATA;

  switchTabs(tab: 'science' | 'art' | 'commercial' | 'vocational') {
    this.activeTab = tab;
  }
  isDesktop = window.innerWidth >= 768;

  ngOnInit() {
    window.addEventListener('resize', () => {
      this.isDesktop = window.innerWidth >= 768;
    });
  }
}
