// src/app/subject-card/subject-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css'],
  imports: [CommonModule],
})
export class SubjectCardComponent {
  @Input() subjects: any = [];
  constructor(private router: Router) {}
  viewCourse(id: number) {
    this.router.navigate([`/dashboard/courses/view-course/${id}`]);
  }
  isHeartActive = false;
  isBookmarkActive = false;
  toggleHeart(subject: any) {
    subject.isHeartActive = !subject.isHeartActive;
  }

  toggleBookmark(subject: any) {
    subject.isBookmarkActive = !subject.isBookmarkActive;
  }

  handleCOurseVideoClick(pageData: any) {
    if (pageData?.id && pageData?.topics?.length) {
      this.router.navigate([
        `/dashboard/courses/view-course/${pageData.id}/lesson/${pageData.topics[0].id}`,
      ]);
      console.log(pageData.topics[0].id, 'id:', pageData.id);
    }
  }
}
