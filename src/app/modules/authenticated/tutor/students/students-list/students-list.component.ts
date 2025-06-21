import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { NgForOf } from '@angular/common';
import {
  SortConfig,
  SortDropdownComponent,
  SortOption,
} from '../../../../../shared/components/sort-dropdown/sort-dropdown.component';
import { Router } from '@angular/router';
import { StudentProfileDataService } from '../../../../../services/student-profile-data.service';

@Component({
  selector: 'app-students-list',
  imports: [SharedModule, NgForOf, SortDropdownComponent],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
})
export class StudentsListComponent {
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

  onSortChange(sortConfig: SortConfig): void {
    console.log(
      `Sorting by ${sortConfig.field} in ${sortConfig.direction} order`
    );
    // Apply sorting logic here
  }

  constructor(
    private router: Router,
    private studentProfileDataService: StudentProfileDataService
  ) {}

  onSelectStudent(student: any) {
    this.studentProfileDataService.selectStudent(student);
    this.router.navigate(['/dashboard/students/student', student.id]);
    console.log('clicked');
  }
}
