import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  courseTrack: any;
  isDisabled: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

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

          this.ratingScore = this.pageData.rating;

          if (this.pageData.topics?.length) {
            this.courseTrack = this.pageData.topics[0].id;
            localStorage.setItem('courseTrack', this.courseTrack);
          }
        }
      }
    });
  }

  getRatingInWords(): string {
    return (this.ratingScore / 20).toFixed(1);
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

  getDisabledClass() {
    return this.isDisabled ? 'opacity-10 cursor-not-allowed' : '';
  }
  handleCOurseVideoClick(ID: number) {
    if (this.pageData?.id && this.pageData?.topics?.length) {
      this.router.navigate([
        `dashboard/courses/view-course/${this.pageData.id}/lesson/${ID}`,
      ]);
    }
  }
}
