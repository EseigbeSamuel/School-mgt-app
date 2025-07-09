import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-mock-exams',
  imports: [SharedModule, RouterOutlet],
  templateUrl: './mock-exams.component.html',
  styleUrl: './mock-exams.component.css',
})
export class MockExamsComponent {}
