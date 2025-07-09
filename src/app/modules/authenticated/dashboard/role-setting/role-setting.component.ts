import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SettingComponent } from '../../student/setting/setting.component';
import { AdminSettingsComponent } from '../../admin/admin-settings/admin-settings.component';
import { UserTypeService } from '../../../../services/user-type.service';

@Component({
  selector: 'app-role-setting',
  imports: [CommonModule, SettingComponent, AdminSettingsComponent],
  template: `<ng-container [ngSwitch]="userRole">
    <app-student-setting *ngSwitchCase="'student'"></app-student-setting>
    <app-admin-settings *ngSwitchCase="'admin'"></app-admin-settings>
    <div *ngSwitchDefault>Access denied</div>
  </ng-container>`,
  styleUrl: './role-setting.component.css',
})
export class RoleSettingComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
