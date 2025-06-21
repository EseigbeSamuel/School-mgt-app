import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeService } from '../../../../services/user-type.service';
import { AdminTutorListingComponent } from '../../admin/admin-tutors/admin-tutor-listing/admin-tutor-listing.component';

@Component({
  selector: 'app-role-tutors',
  imports: [CommonModule, AdminTutorListingComponent],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-admin-tutor-listing
        *ngSwitchCase="'admin'"
      ></app-admin-tutor-listing>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
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
