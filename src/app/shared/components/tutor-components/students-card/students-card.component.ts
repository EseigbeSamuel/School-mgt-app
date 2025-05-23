import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared.module';

@Component({
  selector: 'app-students-card',
  imports: [SharedModule],
  templateUrl: './students-card.component.html',
  styleUrl: './students-card.component.css',
})
export class StudentsCardComponent {
  @Input() name: string = '';
  @Input() subjects: string[] = [];
  @Input() type: string = '';
  @Input() image: string = '';
}
