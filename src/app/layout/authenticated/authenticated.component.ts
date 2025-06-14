import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DashNavbarComponent } from '../../shared/components/dash-navbar/dash-navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { UserTypeService } from '../../services/user-type.service';
import { UserType } from '../../services/auth.service';

@Component({
  selector: 'app-authenticated',
  imports: [RouterModule, SidebarComponent, DashNavbarComponent, SharedModule],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.css',
})
export class AuthenticatedComponent implements OnInit {
  userRole: string | null = 'student';
  showSwitcher = false;

  constructor(private userTypeService: UserTypeService) {}

  toggleSwitcher() {
    this.showSwitcher = !this.showSwitcher;
  }

  setRole(role: UserType) {
    this.userTypeService.setUserType(role);
  }

  ngOnInit() {
    this.userTypeService.userType$.subscribe((role) => {
      this.userRole = role;
    });
  }
}
