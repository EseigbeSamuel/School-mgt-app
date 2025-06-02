import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SUBJECTS_DATA } from '../data';
import { SudentCoursesSubjetCardSvgIcons } from '../../../../../utils/icons';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.css'],
  imports: [CommonModule],
})
export class ViewCourseComponent implements OnInit {
  courseId!: number;
  pageData: any = null;
  ratingScore: number = 0;
  expandedIndex: number | null = 0;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.courseId = +id;
        const foundCourse = SUBJECTS_DATA.find(
          (course) => course.id === this.courseId
        );
        if (foundCourse) {
          this.pageData = {
            ...foundCourse,
            safeSvg: this.sanitizer.bypassSecurityTrustHtml(
              SudentCoursesSubjetCardSvgIcons[foundCourse.icon]
            ),
          };
          console.log('Course Data:', this.pageData);
          this.ratingScore = this.pageData.rating;
        }
      }
    });
  }

  getStars(): number[] {
    const fullStars = Math.round(this.ratingScore / 20);
    return Array(5)
      .fill(0)
      .map((_, i) => (i < fullStars ? 1 : 0));
  }
  toggle(i: number): void {
    this.expandedIndex = this.expandedIndex === i ? null : i;
  }
  getclassBg() {
    return `${this.pageData?.color}`;
  }
}
