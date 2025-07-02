import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-sessions',
  imports: [CommonModule, SharedModule, RouterLink],
  templateUrl: './main-sessions.component.html',
  styleUrl: './main-sessions.component.css',
})
export class MainSessionsComponent {
  sessions = [
    // { subject: '', status: '', imgage: '', tutor: '', time: '', date: '' },
    {
      subject: 'mathematics',
      status: 'pending',
      imgage: '/assets/images/tutor-students-image.png',
      tutor: 'mr john smith',
      time: '2:00',
      date: 'today',
      class: '1-on-1',
    },
    {
      subject: 'mathematics',
      status: 'confirmed',
      imgage: '/assets/images/tutor-students-image.png',
      tutor: 'mr john smith',
      time: '2:00',
      date: 'today',
      class: 'group session',
    },
    {
      subject: 'mathematics',
      status: 'pending',
      imgage: '/assets/images/tutor-students-image.png',
      tutor: 'mr john smith',
      time: '2:00',
      date: 'today',
      class: '1-on-1',
    },
  ];
  tutors = [
    {
      name: 'Mr Adeyemi Smith',
      subject: 'Mathematic',
      time: '2:00',
      rating: 4.7,
      experience: 8,
      image: '/assets/images/tutor-students-image.png',
    },
    {
      name: 'Mr Adeyemi Smith',
      subject: 'Mathematic',
      time: '2:00',
      rating: 5.0,
      experience: 8,
      image: '/assets/images/tutor-students-image.png',
    },
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'confirmed':
        return 'bg-[#CAEBC3] text-[#23BD33]';
      case 'pending':
        return 'bg-[#FFE3AF] text-[#0A0338] ';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
}
