import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { DashNavbarComponent } from '../../shared/components/dash-navbar/dash-navbar.component';
import { SharedModule } from '../../shared/shared.module';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-authenticated',
  imports: [RouterModule, SidebarComponent, DashNavbarComponent, SharedModule],
  templateUrl: './authenticated.component.html',
  styleUrl: './authenticated.component.css',
})
export class AuthenticatedComponent {
  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {}

  showSwitcher = false;

  toggleSwitcher() {
    this.showSwitcher = !this.showSwitcher;
  }

  studentView() {
    this.userTypeService.setUserType('student');
  }

  tutorView() {
    this.userTypeService.setUserType('tutor');
  }

  adminView() {
    this.userTypeService.setUserType('admin');
  }

  ngOnInit(): void {
    this.userTypeService.userType$.subscribe((type) => {
      if (type === 'student') {
        this.router.navigate(['/student']);
      } else if (type === 'tutor') {
        this.router.navigate(['/tutor']);
      } else if (type === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/auth/log-in']);
      }
    });
  }
}
