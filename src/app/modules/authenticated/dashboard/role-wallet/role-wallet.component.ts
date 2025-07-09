import { Component, OnInit } from '@angular/core';
import { WalletComponent } from '../../student/wallet/wallet.component';
import { CommonModule } from '@angular/common';
import { TutorWalletComponent } from '../../tutor/wallet/wallet.component';
import { UserTypeService } from '../../../../services/user-type.service';
@Component({
  selector: 'app-role-wallet',
  imports: [CommonModule, WalletComponent, TutorWalletComponent],
  template: `<ng-container [ngSwitch]="userRole">
    <app-wallet *ngSwitchCase="'student'"></app-wallet>
    <app-tutor-wallet *ngSwitchCase="'tutor'"></app-tutor-wallet>
    <div *ngSwitchDefault>Access denied</div>
  </ng-container>`,
})
export class RoleWalletComponent implements OnInit {
  userRole: string | null = null;

  constructor(private userTypeService: UserTypeService) {}

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
