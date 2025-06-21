import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-add-student',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-add-student.component.html',
  styleUrl: './admin-add-student.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAddStudentComponent {
  currentStep = 1;

  personalInfo = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    dateOfBirth: '',
    maritalStatus: '',
    gender: '',
    nationality: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  };

  setStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 1) {
      this.currentStep++;
    }
  }

  cancel() {
    // Handle cancel logic
  }

  save() {
    // Handle save logic
    console.log('Saving student data...');
  }
}
