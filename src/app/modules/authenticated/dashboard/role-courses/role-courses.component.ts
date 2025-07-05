import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCoursesComponent } from '../../student/my-courses/my-courses.component';
import { MyCoursesComponentTutor } from '../../tutor/my-courses/my-courses.component';
import { UserTypeService } from '../../../../services/user-type.service';
import { AdminCoursesListingComponent } from '../../admin/admin-courses/admin-courses-listing/admin-courses-listing.component';

@Component({
  selector: 'app-role-students',
  imports: [
    CommonModule,
    MyCoursesComponent,
    MyCoursesComponentTutor,
    AdminCoursesListingComponent,
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-my-courses *ngSwitchCase="'student'"></app-my-courses>
      <app-my-courses-tutor *ngSwitchCase="'tutor'"></app-my-courses-tutor>
      <app-admin-courses-listing
        *ngSwitchCase="'admin'"
      ></app-admin-courses-listing>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
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
