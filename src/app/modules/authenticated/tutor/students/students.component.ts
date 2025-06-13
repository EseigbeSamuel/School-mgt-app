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

import { ModalComponent } from '../../../../shared/components/modal/modal.component';
@Component({
  selector: 'app-students',
  imports: [
    SharedModule,
    StudentsCardComponent,
    NgForOf,
    SortDropdownComponent,
    ModalComponent,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css',
})
export class StudentsComponent {
  showModal = false;

  // onStudentClick(event: Event): void {
  //   event.stopPropagation();
  // }

  students = [
    {
      id: 1,
      name: 'bello jomiloju',
      subject: ['physics, mathematics'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
    },
    {
      id: 2,
      name: 'adeyija adewole',
      subject: ['chemistry, english'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
    },
    {
      id: 3,
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
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }
  onStudentClick(id: number) {
    const data = this.students.find((sudent) => sudent.id === id);
    this.openModal();
    // console.log(data);
    console.log('Student clicked:', id);
  }

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );
  }
}
