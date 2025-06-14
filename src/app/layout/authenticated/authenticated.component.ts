import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DashNavbarComponent } from '../../shared/components/dash-navbar/dash-navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { UserTypeService } from '../../services/user-type.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-authenticated',
  imports: [RouterModule, SidebarComponent, DashNavbarComponent, SharedModule],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.css',
})
export class AuthenticatedComponent {
  showSwitcher = false;

  userRole: string | null;

  constructor(
    private userTypeService: UserTypeService,
    private router: Router,
    private authService: AuthService
  ) {
    this.userRole = this.authService.currentUserType();
  }

  toggleSwitcher() {
    this.showSwitcher = !this.showSwitcher;
  }

  studentView() {
    this.authService.setUserRole('student');
  }

  tutorView() {
    this.authService.setUserRole('tutor');
  }

  adminView() {
    this.authService.setUserRole('admin');
  }
}
