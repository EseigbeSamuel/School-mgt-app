import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-one-on-one',
  imports: [CommonModule],
  templateUrl: './one-on-one.component.html',
  styleUrl: './one-on-one.component.css',
})
export class OneOnOneComponent {
  students = 2;
}
