import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';

@Component({
  selector: 'app-mock-exams',
  imports: [NgIf, NgFor, SharedModule],
  templateUrl: './mock-exams.component.html',
  styleUrl: './mock-exams.component.css',
})
export class MockExamsComponent implements OnInit {
  currentQuestionIndex = 0;
  timeLeft = 60; // seconds
  selectedOptions: number[] = [];

  questions = [
    {
      question:
        'Choose the option that best explains the meaning of the given sentence. “He was walking on thin ice with his remarks”',
      options: [
        'He was making careless statements',
        'He was walking on a frozen river',
        'He was physically unstable',
        'He was confident in his speech',
      ],
    },
    {
      question:
        'Choose the option that best explains the meaning of the given sentence. “He was walking on thin ice with his remarks 2”',
      options: [
        'He was making careless statements',
        'He was walking on a frozen river',
        'He was physically unstable',
        'He was confident in his speech',
      ],
    },
    {
      question:
        'Choose the option that best explains the meaning of the given sentence. “He was walking on thin ice with his remarks 3”',
      options: [
        'He was making careless statements',
        'He was walking on a frozen river',
        'He was physically unstable',
        'He was confident in his speech',
      ],
    },
    // Add more questions...
  ];

  ngOnInit() {
    setInterval(() => {
      if (this.timeLeft > 0) this.timeLeft--;
    }, 1000);
  }

  selectOption(index: number) {
    this.selectedOptions[this.currentQuestionIndex] = index;
  }

  goToNext() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  goToPrev() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  get progress() {
    const rawProgress =
      ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    return Math.round(rawProgress * 10) / 10; // rounds to 1 decimal place
  }
}
