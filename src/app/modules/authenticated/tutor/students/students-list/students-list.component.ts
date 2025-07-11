import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared/shared.module';
import { CommonModule, NgForOf } from '@angular/common';
import {
  SortConfig,
  SortDropdownComponent,
  SortOption,
} from '../../../../../shared/components/sort-dropdown/sort-dropdown.component';
import { Router } from '@angular/router';
import { StudentProfileDataService } from '../../../../../services/student-profile-data.service';

@Component({
  selector: 'app-students-list',
  imports: [SharedModule, SortDropdownComponent, CommonModule],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css',
})
export class StudentsListComponent {
  students = [
    {
      id: 1,
      name: 'bello jomiloju',
      subject: ['physics', 'mathematics'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
      session: 12,
      email: 'bellojomiloju@gmail.com',
      progress: 'excellent',
      rating: 5,
      exam: 'JAMB',
    },
    {
      id: 2,
      name: 'adeyija adewole',
      subject: ['chemistry', 'english'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
      session: 12,
      email: 'bellojomiloju@gmail.com',
      progress: 'good',
      rating: 5,
      exam: 'JAMB',
    },
    {
      id: 3,
      name: 'okafor chioma',
      subject: ['physics', 'mathematics'],
      type: 'waec/jamb student',
      image: '../../../../../assets/images/tutor-students-image.png',
      session: 12,
      email: 'bellojomiloju@gmail.com',
      progress: 'weak',
      rating: 5,
      exam: 'JAMB',
    },
    // { name: '', subject: '', type: 'waec/jamb student', image: '' },
  ];

  getProgressStyle(progress: string): string {
    switch (progress.toLowerCase()) {
      case 'excellent':
        return 'bg-[#42ADE2]';
      case 'good':
        return 'bg-[#05CD99]';
      case 'mid':
        return 'bg-[#444444]';
      default:
        return 'bg-[#444444]';
    }
  }

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
