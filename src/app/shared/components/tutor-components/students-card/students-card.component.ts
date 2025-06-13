import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-students-card',
  imports: [SharedModule, CommonModule],
  templateUrl: './students-card.component.html',
  styleUrl: './students-card.component.css',
})
export class StudentsCardComponent {
  @Input() name: string = '';
  @Input() subjects: string[] = [];
  @Input() type: string = '';
  @Input() image: string = '';
  @Input() rating: number = 0; // Add rating input
  @Input() studentId: number = 0; // Add student ID

  @Output() viewProfile = new EventEmitter<number>();
  @Output() ratingChange = new EventEmitter<{
    studentId: number;
    rating: number;
  }>();

  // Create array for star rendering
  stars = Array(5).fill(0);

  get formattedSubjects(): string {
    if (Array.isArray(this.subjects)) {
      return this.subjects.join(', ');
    }
    return this.subjects || '';
  }

  setRating(newRating: number): void {
    this.rating = newRating;
    this.ratingChange.emit({
      studentId: this.studentId,
      rating: newRating,
    });
  }

  onViewProfile(): void {
    this.viewProfile.emit(this.studentId);
  }

  onImageError(event: any): void {
    // Fallback image if the original fails to load
    event.target.src = 'assets/images/default-student.png';
  }
}
