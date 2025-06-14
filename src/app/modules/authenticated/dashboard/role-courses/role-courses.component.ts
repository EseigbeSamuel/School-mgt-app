import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from '../../student/my-courses/my-courses.component';
import { MyCoursesComponentTutor } from '../../tutor/my-courses/my-courses.component';
import { AdminCoursesComponent } from '../../admin/admin-courses/admin-courses.component';
import { RouterOutlet } from '@angular/router';
import { UserTypeService } from '../../../../services/user-type.service';

@Component({
  selector: 'app-role-students',
  imports: [
    CommonModule,
    MyCoursesComponent,
    MyCoursesComponentTutor,
    AdminCoursesComponent,
    RouterOutlet,
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-my-courses *ngSwitchCase="'student'"></app-my-courses>
      <app-my-courses-tutor *ngSwitchCase="'tutor'"></app-my-courses-tutor>
      <app-admin-courses *ngSwitchCase="'admin'"></app-admin-courses>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
})
export class RoleCoursesComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
