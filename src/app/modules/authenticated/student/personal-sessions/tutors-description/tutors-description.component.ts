import { Component, OnInit } from '@angular/core';
import { TutorDataService } from '../../../../../services/tutor-data.service';
import { NgIf } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-tutors-description',
  imports: [SharedModule, NgIf],
  templateUrl: './tutors-description.component.html',
  styleUrl: './tutors-description.component.css',
})
export class TutorsDescriptionComponent implements OnInit {
  tutor: any;

  constructor(private tutorDataService: TutorDataService) {}

  ngOnInit(): void {
    this.tutor = this.tutorDataService.getTutor();
  }
}
