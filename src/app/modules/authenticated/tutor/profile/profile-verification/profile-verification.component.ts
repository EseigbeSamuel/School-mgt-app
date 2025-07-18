import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile-verification',
  imports: [SharedModule, CommonModule],
  templateUrl: './profile-verification.component.html',
  styleUrl: './profile-verification.component.css',
})
export class ProfileVerificationComponent {
  documents = [
    {
      degree: 'B.Sc Mathematics Education',
      school: 'University of Lagos',
      date: '2018',
      status: 'verified',
    },
    {
      degree: 'B.Sc Mathematics Education',
      school: 'University of Lagos',
      date: '2018',
      status: 'unverified',
    },
  ];
}
