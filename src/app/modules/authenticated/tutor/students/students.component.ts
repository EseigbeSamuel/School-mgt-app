import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsCardComponent } from '../../../../shared/components/tutor-components/students-card/students-card.component';
// import { DropSelectComponent } from '../../../../shared/components/drop-select/drop-select.component';
import { NgForOf } from '@angular/common';
import {
  SortConfig,
  SortDropdownComponent,
  SortOption,
} from '../../../../shared/components/sort-dropdown/sort-dropdown.component';
@Component({
  selector: 'app-students',
  imports: [
    SharedModule,
    StudentsCardComponent,
    NgForOf,
    SortDropdownComponent,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  students = [
    {
      name: 'bello jomiloju',
      subject: ['physics, mathematics'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
    },
    {
      name: 'adeyija adewole',
      subject: ['chemistry, english'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
    },
    {
      name: 'okafor chioma',
      subject: ['physics, mathematics'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
    },
    // { name: '', subject: '', type: 'waec/jamb student', image: '' },
  ];

  customSortOptions: SortOption[] = [
    { value: 'class', label: 'Class', direction: 'desc' },
    { value: 'name', label: 'Name', direction: 'desc' },
    { value: 'grade', label: 'Grade', direction: 'asc' },
  ];

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );
    // Apply sorting logic here
  }
}
