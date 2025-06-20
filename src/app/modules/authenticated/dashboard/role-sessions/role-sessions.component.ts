import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySessionsComponent } from '../../tutor/my-sessions/my-sessions.component';
import { AdminSessionsComponent } from '../../admin/admin-sessions/admin-sessions.component';
import { UserTypeService } from '../../../../services/user-type.service';

@Component({
  selector: 'app-role-sessions',
  imports: [CommonModule, MySessionsComponent, AdminSessionsComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-my-sessions *ngSwitchCase="'tutor'"></app-my-sessions>
      <app-admin-sessions *ngSwitchCase="'admin'"></app-admin-sessions>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleSessionsComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
