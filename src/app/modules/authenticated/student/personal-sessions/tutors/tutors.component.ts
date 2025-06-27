import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TutorDataService } from '../../../../../services/tutor-data.service';

@Component({
  selector: 'app-tutors',
  imports: [SharedModule, NgIf, NgFor],
  templateUrl: './tutors.component.html',
  styleUrl: './tutors.component.css',
})
export class TutorsComponent {
  constructor(
    private router: Router,
    private tutorDataService: TutorDataService
  ) {}

  onSelectTutor(tutor: any) {
    this.tutorDataService.setTutor(tutor);
    this.router.navigate(['/dashboard/personal-sessions/tutoring', tutor.id]);
  }
  tutors = [
    {
      id: 1,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 100,
      rating: 5,
    },
    {
      id: 2,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 100,
      rating: 5,
    },
    {
      id: 3,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 95,
      rating: 4,
    },
    {
      id: 4,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 98,
      rating: 5,
    },
    {
      id: 5,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 100,
      rating: 5,
    },
    {
      id: 6,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 100,
      rating: 4,
    },
    {
      id: 7,
      name: 'Fadeyi Tola',
      age: 38,
      subjects: ['phy', 'chy'],
      qualification: 'B.sc',
      classes: 17,
      success: 100,
      rating: 5,
    },
  ];
}
