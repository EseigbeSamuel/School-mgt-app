import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from '../../tutor/students/students.component';
import { UserTypeService } from '../../../../services/user-type.service';
import { AdminStudentsListingComponent } from '../../admin/admin-students/admin-students-listing/admin-students-listing.component';

@Component({
  selector: 'app-role-students',
  imports: [CommonModule, StudentsComponent, AdminStudentsListingComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-students *ngSwitchCase="'tutor'"></app-students>
      <app-admin-students-listing
        *ngSwitchCase="'admin'"
      ></app-admin-students-listing>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleStudentsComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
