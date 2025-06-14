import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTutorsComponent } from '../../admin/admin-tutors/admin-tutors.component';
import { RouterOutlet } from '@angular/router';
import { UserTypeService } from '../../../../services/user-type.service';

@Component({
  selector: 'app-role-tutors',
  imports: [CommonModule, AdminTutorsComponent, RouterOutlet],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-admin-tutors *ngSwitchCase="'admin'"></app-admin-tutors>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
})
export class RoleTutorsComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
