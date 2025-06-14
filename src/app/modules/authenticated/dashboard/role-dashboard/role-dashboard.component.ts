import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { StudentDashboardComponentTable } from '../../../../shared/components/tables/student-dashboard/student-dashboard.component';
import { TutorDashBoardComponentTable } from '../../../../shared/components/tables/tutor-dash-board/tutor-dash-board.component';
import { AdminDashboardComponent } from '../../admin/admin-dashboard/dashboard.component';

@Component({
  selector: 'app-role-dashboard',
  imports: [
    CommonModule,
    StudentDashboardComponentTable,
    TutorDashBoardComponentTable,
    AdminDashboardComponent,
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-student-dashboard *ngSwitchCase="'student'"></app-student-dashboard>
      <app-tutor-dash-board *ngSwitchCase="'tutor'"></app-tutor-dash-board>
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
