import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-availability',
  imports: [SharedModule, CommonModule],
  templateUrl: './availability.component.html',
  styleUrl: './availability.component.css',
})
export class AvailabilityComponent {
  weeks = [
    { date: 'monday' },
    { date: 'tuesday' },
    { date: 'wednesday' },
    { date: 'thursday' },
    { date: 'friday' },
    { date: 'saturday' },
    { date: 'sunday' },
  ];
  options = [
    { value: '9:00', label: '9:00' },
    { value: '12:00', label: '12:00' },
    { value: '3:00', label: '3:00' },
    { value: '5:00', label: '5:00' },
  ];
}
