import { Component, OnInit } from '@angular/core';
import { TutorDataService } from '../../../../../services/tutor-data.service';
import { NgFor, NgIf } from '@angular/common';
import { SharedModule } from '../../../../../shared/shared.module';
import { ModalComponent } from '../../../../../shared/components/modal/modal.component';

@Component({
  selector: 'app-tutors-description',
  imports: [SharedModule, NgIf, NgFor, ModalComponent],
  templateUrl: './tutors-description.component.html',
  styleUrl: './tutors-description.component.css',
})
export class TutorsDescriptionComponent implements OnInit {
  tutor: any;

  constructor(private tutorDataService: TutorDataService) {}

  ngOnInit(): void {
    this.tutor = this.tutorDataService.getTutor();
  }

  invisible = false;

  showModal = false;
  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
