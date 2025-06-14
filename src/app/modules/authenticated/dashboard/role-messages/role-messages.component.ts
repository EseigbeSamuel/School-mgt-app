import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { MessagesComponent } from '../../student/messages/messages.component';
import { AdminMessagesComponent } from '../../admin/admin-messages/admin-messages.component';
import { TutorMessagesComponent } from '../../tutor/messages/messages.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-role-messages',
  imports: [
    CommonModule,
    MessagesComponent,
    AdminMessagesComponent,
    TutorMessagesComponent,
    RouterOutlet,
  ],
  template: `
    <ng-container [ngSwitch]="userRole">
      <app-messages *ngSwitchCase="'student'"></app-messages>
      <app-messages-tutor *ngSwitchCase="'tutor'"></app-messages-tutor>
      <app-admin-messages *ngSwitchCase="'admin'"></app-admin-messages>
      <div *ngSwitchDefault>Access denied</div>
    </ng-container>
    <router-outlet></router-outlet>
  `,
})
export class RoleMessagesComponent implements OnInit {
  userRole: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userRole = this.authService.getUserRole();
  }
}
