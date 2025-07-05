import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-exam-list',
  imports: [SharedModule, CommonModule, RouterLink],
  templateUrl: './exam-list.component.html',
  styleUrl: './exam-list.component.css',
})
export class ExamListComponent {
  exams = [
    {
      type: 'JAMB 2025 Mock Exams',
      subjects: ['english', 'mathematics', 'physics', 'chemistry'],
      desc: 'Full JAMB simulation with real exam conditions',
      questions: 200,
      time: 180,
      status: 'available',
      score: 0,
      attempts: 1,
    },
    {
      type: 'WAEC Mathematics Mock Exams',
      subjects: ['mathematics'],
      desc: 'WAEC Mathematics paper simulation',
      questions: 50,
      time: 100,
      status: 'available',
      score: 0,
      attempts: 2,
    },
    {
      type: 'NECO English Mock Exams',
      subjects: ['english'],
      desc: 'NECO comprehensive English paper simulation',
      questions: 50,
      time: 100,
      status: 'completed',
      score: 0,
      attempts: 3,
    },
  ];

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-[#4169E133] text-[#4169E1]';
      case 'available':
        return 'bg-[#CAEBC3] text-[#23BD33] ';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  }
}
