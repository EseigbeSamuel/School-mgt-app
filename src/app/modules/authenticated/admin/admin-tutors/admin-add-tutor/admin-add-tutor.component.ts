import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-add-tutor',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin-add-tutor.component.html',
  styleUrl: './admin-add-tutor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminAddTutorComponent {
  currentStep = 1;

  // Form data
  professionalInfo = {
    university: '',
    yearOfGraduation: '',
    degree: '',
    emailAddress: '',
    department: '',
    designation: '',
    workingDays: '',
    joiningDate: '',
  };

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

  bankInfo = {
    bankName: '',
    accountName: '',
    accountNumber: '',
  };

  setStep(step: number) {
    this.currentStep = step;
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  cancel() {
    // Handle cancel logic
  }

  save() {
    // Handle save logic
    console.log('Saving tutor data...');
  }
}
