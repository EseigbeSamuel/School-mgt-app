import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from '../../admin/admin-dashboard/dashboard.component';
import { StudentDashboardComponent } from '../../student/dashboard/dashboard.component';
import { TutorDashboardComponent } from "../../tutor/dashboard/dashboard.component";

@Component({
  selector: 'app-role-dashboard',
  imports: [
    CommonModule,
    AdminDashboardComponent,
    StudentDashboardComponent,
    TutorDashboardComponent
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

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
  }
}
