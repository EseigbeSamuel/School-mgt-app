// assessment-and-quizzes.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../../../shared/components/modal/modal.component';

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

@Component({
  selector: 'app-assessment-and-quizzes',
  imports: [SharedModule, CommonModule, ModalComponent],
  templateUrl: './assessment-and-quizzes.component.html',
  styleUrl: './assessment-and-quizzes.component.css',
})
export class AssessmentAndQuizzesComponent {
  invisible = false;
  showModal = false;
  win = 'assets/icons/trophy.svg';
  lose = 'assets/icons/lost.svg';

  questions: Question[] = [
    {
      id: 1,
      text: 'What is the largest ocean on Earth?',
      options: ['Atlantic', 'India', 'Pacific', 'Arctic'],
      correctAnswer: 'Pacific',
    },
    {
      id: 2,
      text: 'Which is the longest river in the world?',
      options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
      correctAnswer: 'Nile',
    },
    {
      id: 3,
      text: 'What is the highest mountain peak in the world?',
      options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
      correctAnswer: 'Mount Everest',
    },
    {
      id: 4,
      text: 'Which desert is the largest in the world?',
      options: ['Sahara', 'Arabian', 'Gobi', 'Antarctica'],
      correctAnswer: 'Antarctica',
    },
    {
      id: 5,
      text: 'What is the smallest country in the world?',
      options: ['Monaco', 'Vatican City', 'San Marino', 'Liechtenstein'],
      correctAnswer: 'Vatican City',
    },
  ];

  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  showResult = false;
  userAnswers: (string | null)[] = [];
  quizCompleted = false;

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get totalQuestions(): number {
    return this.questions.length;
  }

  getBackgroundImage() {
    return 'url(assets/images/quiz-bg.svg)';
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  selectAnswer(option: string) {
    if (!this.showResult) {
      this.selectedAnswer = option;
    }
  }

  handleNext() {
    if (!this.showResult) {
      // Show result first
      this.showResult = true;
      // Store the answer
      this.userAnswers[this.currentQuestionIndex] = this.selectedAnswer;
    } else {
      // Move to next question or complete quiz
      if (this.currentQuestionIndex < this.totalQuestions - 1) {
        this.currentQuestionIndex++;
        // Load the previously selected answer for this question (if any)
        this.selectedAnswer =
          this.userAnswers[this.currentQuestionIndex] || null;
        // If there's a saved answer, show the result, otherwise show the question
        this.showResult =
          this.userAnswers[this.currentQuestionIndex] !== undefined;
      } else {
        this.quizCompleted = true;
      }
    }
  }

  handleBack() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      // Load the previously selected answer for this question
      this.selectedAnswer = this.userAnswers[this.currentQuestionIndex] || null;
      // If there's a saved answer, show the result, otherwise show the question
      this.showResult =
        this.userAnswers[this.currentQuestionIndex] !== undefined;
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.showResult = false;
    this.userAnswers = [];
    this.quizCompleted = false;
  }

  // Get correct answers count
  getCorrectAnswersCount(): number {
    return this.userAnswers.reduce((count, answer, index) => {
      return answer === this.questions[index].correctAnswer ? count + 1 : count;
    }, 0);
  }

  // Get wrong answers count
  getWrongAnswersCount(): number {
    return (
      this.userAnswers.filter((answer) => answer !== null).length -
      this.getCorrectAnswersCount()
    );
  }

  // Get total answered questions
  getTotalAnswered(): number {
    return this.userAnswers.filter((answer) => answer !== null).length;
  }

  calculateScore(): number {
    const correctAnswers = this.getCorrectAnswersCount();
    return this.questions.length > 0
      ? (correctAnswers / this.questions.length) * 100
      : 0;
  }

  getScoreEmoji(): string {
    const correctCount = this.getCorrectAnswersCount();
    return correctCount >= 4
      ? this.win
      : correctCount >= 3
      ? this.win
      : this.lose;
  }

  getScoreMessage(): string {
    const correctCount = this.getCorrectAnswersCount();
    return correctCount >= 4
      ? 'Congratulations!'
      : correctCount >= 3
      ? 'Congratulations!'
      : 'Opps!! you missed!';
  }

  formatQuestionNumber(num: number): string {
    return String(num).padStart(2, '0');
  }

  // Generate array for progress dots
  getProgressArray(): number[] {
    return Array.from({ length: this.totalQuestions }, (_, i) => i);
  }
}
