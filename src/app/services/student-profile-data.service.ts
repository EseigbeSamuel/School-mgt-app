import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentProfileDataService {
  private selectedStudent = new BehaviorSubject<any>(null);

  selectedStudent$ = this.selectedStudent.asObservable();
  selectStudent(student: any) {
    this.selectedStudent.next(student);
  }
  // private selectedStudent: any;

  // setStudent(student: any) {
  //   this.selectedStudent = student;
  // }

  // getStudent() {
  //   return this.selectedStudent;
  // }

  constructor() {}
}
