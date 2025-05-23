// src/app/subject-card/subject-card.component.ts
import { Component, Input } from '@angular/core';
import { SubjectCard } from '../../../modules/authenticated/student/my-courses/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.css'],
  imports: [CommonModule],
})
export class SubjectCardComponent {
  @Input() subjects: any = [];
}
