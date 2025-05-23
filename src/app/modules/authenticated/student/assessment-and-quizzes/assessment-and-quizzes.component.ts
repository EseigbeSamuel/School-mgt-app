import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-assessment-and-quizzes',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './assessment-and-quizzes.component.html',
  styleUrl: './assessment-and-quizzes.component.css',
})
export class AssessmentAndQuizzesComponent {}
