import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../admin/admin-dashboard/dashboard.component';
import { StudentDashboardComponent } from '../../student/dashboard/dashboard.component';
import { TutorDashboardComponent } from '../../tutor/dashboard/dashboard.component';
import { UserTypeService } from '../../../../services/user-type.service';

@Component({
  selector: 'app-role-dashboard',
  imports: [
    CommonModule,
    AdminDashboardComponent,
    StudentDashboardComponent,
    TutorDashboardComponent,
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-student-dashboard *ngSwitchCase="'student'"></app-student-dashboard>
      <app-tutor-dashboard *ngSwitchCase="'tutor'"></app-tutor-dashboard>
      <app-admin-dashboard *ngSwitchCase="'admin'"></app-admin-dashboard>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleDashboardComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
