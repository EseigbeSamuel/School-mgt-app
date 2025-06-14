import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../tutor/students/students.component';
import { AdminStudentsComponent } from '../../admin/admin-students/admin-students.component';

@Component({
  selector: 'app-role-students',
  imports: [CommonModule, StudentsComponent, AdminStudentsComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-students *ngSwitchCase="'tutor'"></app-students>
      <app-admin-students *ngSwitchCase="'admin'"></app-admin-students>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleStudentsComponent implements OnInit {
  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
  }
}
