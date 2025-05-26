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
    this.router.navigate([`student/courses/view-course/${id}`]);
  }
  isHeartActive = false;
  isBookmarkActive = false;
  toggleHeart(subject: any) {
    subject.isHeartActive = !subject.isHeartActive;
  }

  toggleBookmark(subject: any) {
    subject.isBookmarkActive = !subject.isBookmarkActive;
  }
}
