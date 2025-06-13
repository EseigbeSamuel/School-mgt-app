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

interface Student {
  id: number;
  name: string;
  subject: string[];
  type: string;
  image: string;
  rating: number;
}
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

  students: Student[] = [
    {
      id: 1,
      name: 'bello jomiloju',
      subject: ['physics', 'mathematics'],
      type: 'waec/jamb student',
      image: 'assets/images/tutor-students-image.png',
      rating: 4,
    },
    {
      id: 2,
      name: 'adeyija adewole',
      subject: ['chemistry', 'english'],
      type: 'waec/jamb student',
      image: 'assets/images/tutor-students-image.png',
      rating: 5,
    },
    {
      id: 3,
      name: 'okafor chioma',
      subject: ['physics', 'mathematics'],
      type: 'waec/jamb student',
      image: 'assets/images/tutor-students-image.png',
      rating: 3,
    },
  ];

  customSortOptions: SortOption[] = [
    { value: 'class', label: 'Class', direction: 'desc' },
    { value: 'name', label: 'Name', direction: 'desc' },
    { value: 'grade', label: 'Grade', direction: 'asc' },
    { value: 'rating', label: 'Rating', direction: 'desc' },
  ];

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  onStudentClick(id: number) {
    const student = this.students.find((student) => student.id === id);
    console.log('Student clicked:', student);
    this.openModal();
  }

  onRatingChange(event: { studentId: number; rating: number }): void {
    const student = this.students.find((s) => s.id === event.studentId);
    if (student) {
      student.rating = event.rating;
      console.log(
        `Updated rating for ${student.name} to ${event.rating} stars`
      );
    }
  }

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );

    this.students.sort((a, b) => {
      let aValue: any;
      let bValue: any;

      switch (sortConfig.field) {
        case 'name':
          aValue = a.name.toLowerCase();
          bValue = b.name.toLowerCase();
          break;
        case 'rating':
          aValue = a.rating;
          bValue = b.rating;
          break;
        case 'class':
          aValue = a.type.toLowerCase();
          bValue = b.type.toLowerCase();
          break;
        default:
          return 0;
      }

      if (sortConfig.direction === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  }
  trackByStudent(index: number, student: Student): number {
    return student.id;
  }
}
