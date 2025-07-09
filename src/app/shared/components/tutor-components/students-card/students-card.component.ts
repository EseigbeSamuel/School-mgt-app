import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../shared.module';
// import { Router } from '@angular/router';
// import { StudentProfileDataService } from '../../../../services/student-profile-data.service';

@Component({
  selector: 'app-students-card',
  imports: [SharedModule, CommonModule],
  templateUrl: './students-card.component.html',
  styleUrl: './students-card.component.css',
})
export class StudentsCardComponent {
  @Input() name: string = '';
  @Input() subjects: string[] = [];
  @Input() type: string = '';
  @Input() image: string = '';

  // constructor(
  //   private router: Router,
  //   private studentProfileDataService: StudentProfileDataService
  // ) {}

  // onSelectStudent(student: any) {
  //   this.studentProfileDataService.selectStudent(student);
  //   this.router.navigate(['/dashboard/students/student', student.id]);
  //   console.log('clicked');
  // }
}
