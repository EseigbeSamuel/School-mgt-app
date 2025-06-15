import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from '../../student/profile/profile.component';
import { TutorProfileComponent } from '../../tutor/profile/profile.component';
import { AdminProfileComponent } from '../../admin/admin-profile/admin-profile.component';
import { MainProfileComponent } from '../../student/profile/main-profile/main-profile.component';
import { UserInformationComponent } from '../../tutor/profile/user-information/user-information.component';
import { EditProfileComponent } from '../../student/profile/edit-profile/edit-profile.component';
import { AccountComponent } from '../../student/profile/account/account.component';
import { NotificationsComponent } from '../../student/profile/notifications/notifications.component';
import { SecurityComponent } from '../../student/profile/security/security.component';
import { UserTypeService } from '../../../../services/user-type.service';

// Role Profile Component
@Component({
  selector: 'app-role-profile',
  imports: [
    CommonModule,
    ProfileComponent,
    TutorProfileComponent,
    AdminProfileComponent,
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-profile *ngSwitchCase="'student'"></app-profile>
      <app-profile-tutor *ngSwitchCase="'tutor'"></app-profile-tutor>
      <app-admin-profile *ngSwitchCase="'admin'"></app-admin-profile>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleProfileComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}

// Role Main Profile Component
@Component({
  selector: 'app-role-main-profile',
  imports: [CommonModule, MainProfileComponent, UserInformationComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-main-profile *ngSwitchCase="'student'"></app-main-profile>
      <app-user-information *ngSwitchCase="'tutor'"></app-user-information>
      <!-- <app-admin-profile *ngSwitchCase="'admin'"></app-admin-profile> -->
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleMainProfileComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}

// Role Edit Profile Component
@Component({
  selector: 'app-role-edit-profile',
  imports: [CommonModule, EditProfileComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-edit-profile *ngSwitchCase="'student'"></app-edit-profile>
      <!-- <app-edit-profile-tutor *ngSwitchCase="'tutor'"></app-edit-profile> -->
      <!-- <app-edit-profile *ngSwitchCase="'admin'"></app-edit-profile> -->
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleEditProfileComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}

// Role Account Component
@Component({
  selector: 'app-role-account',
  imports: [CommonModule, AccountComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-account *ngSwitchCase="'student'"></app-account>
      <!-- <app-account *ngSwitchCase="'tutor'"></app-account> -->
      <!-- <app-account *ngSwitchCase="'admin'"></app-account> -->
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleAccountComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}

// Role Notifications Component
@Component({
  selector: 'app-role-notifications',
  imports: [CommonModule, NotificationsComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-notifications *ngSwitchCase="'student'"></app-notifications>
      <!-- <app-notifications-tutor
        *ngSwitchCase="'tutor'"
      ></app-notifications-tutor>
      <app-notifications *ngSwitchCase="'admin'"></app-notifications> -->
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleNotificationsComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}

// Role Security Component
@Component({
  selector: 'app-role-security',
  imports: [CommonModule, SecurityComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-security *ngSwitchCase="'student'"></app-security>
      <app-security *ngSwitchCase="'tutor'"></app-security>
      <app-security *ngSwitchCase="'admin'"></app-security>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
  `,
})
export class RoleSecurityComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
