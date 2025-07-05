import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySessionsComponent } from '../../tutor/my-sessions/my-sessions.component';
import { UserTypeService } from '../../../../services/user-type.service';
import { AdminSessionListingComponent } from '../../admin/admin-sessions/admin-session-listing/admin-session-listing.component';

@Component({
  selector: 'app-role-sessions',
  imports: [CommonModule, MySessionsComponent, AdminSessionListingComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-my-sessions *ngSwitchCase="'tutor'"></app-my-sessions>
      <app-admin-session-listing
        *ngSwitchCase="'admin'"
      ></app-admin-session-listing>
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
