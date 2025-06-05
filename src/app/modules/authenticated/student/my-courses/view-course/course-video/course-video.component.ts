import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SUBJECTS_DATA } from '../../data';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SudentCoursesSubjetCardSvgIcons } from '../../../../../../utils/icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-video',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-video.component.html',
  styleUrl: './course-video.component.css',
})
export class CourseVideoComponent {
  selectedTab: string = 'about';
  courseId!: number;
  pageData: any = null;
  ratingScore: number = 0;
  courseTopic: any;
  newReview = {
    comment: '',
    rating: 0,
  };
  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      console.log('Route Params:', params);

      if (id) {
        this.courseId = +id;
        const foundCourse = SUBJECTS_DATA.find(
          (course) => course.id === this.courseId
        );
        if (foundCourse) {
          this.courseTopic = foundCourse.topics?.find((topicData) => {
            return topicData.id === this.courseId;
          });
        }
      }
    });
  }
  getRatingInWords(): string {
    return (this.courseTopic.rating / 20).toFixed(1);
  }

  getStars(): number[] {
    const fullStars = Math.round(this.courseTopic.rating / 20);
    return Array(5)
      .fill(0)
      .map((_, i) => (i < fullStars ? 1 : 0));
  }
  reviews = [
    {
      name: 'Adeleke Bencarson',
      avatar: 'assets/images/student-image-2.png',
      role: 'Student',
      time: '2h ago',
      comment: `Taking the Biology class on flexy demy made it easy for me ace my exam. From  connectting with a tutor who explained difficult concepts in a way that made sense. I saw a big improvement in my grades within weeks!`,
      rating: 4.5,
    },
  ];

  setRating(stars: number) {
    this.newReview.rating = stars;
  }

  submitReview() {
    if (this.newReview.comment && this.newReview.rating) {
      this.reviews.push({
        name: 'You',
        avatar: 'assets/images/student-image-1.png',
        role: 'Student',
        time: 'Just now',
        comment: this.newReview.comment,
        rating: this.newReview.rating,
      });
      this.newReview = { comment: '', rating: 0 };
    }
  }

  getReviewStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars: string[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push('&#9733;');
      } else if (i === fullStars && halfStar) {
        stars.push('&#189;');
      } else {
        stars.push('&#9734;');
      }
    }

    return stars;
  }
}
