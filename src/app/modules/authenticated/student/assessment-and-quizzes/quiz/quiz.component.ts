import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';

@Component({
  selector: 'app-quiz',
  imports: [SharedModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {}
