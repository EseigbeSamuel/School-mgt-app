import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [SharedModule, NgIf],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent {
  invisible = false;
}
