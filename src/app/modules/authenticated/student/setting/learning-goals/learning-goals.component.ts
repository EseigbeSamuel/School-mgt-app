import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { InputUiComponent } from '../../../../../shared/components/input-ui/input-ui.component';

@Component({
  selector: 'app-learning-goals',
  imports: [SharedModule, CommonModule],
  templateUrl: './learning-goals.component.html',
  styleUrl: './learning-goals.component.css',
})
export class LearningGoalsComponent {
  subjects = [
    { name: 'mathematics' },
    { name: 'physics' },
    { name: 'Biology' },
    { name: 'government' },
    { name: 'economics' },
    { name: 'chemistry' },
    { name: 'english' },
    { name: 'accounting' },
  ];
}
