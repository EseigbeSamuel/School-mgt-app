import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { UserTypeService } from '../../../services/user-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent {
  constructor(
    private userTypeService: UserTypeService,
    private router: Router
  ) {}

  studentView() {
    this.userTypeService.setUserType('student');
  }

  tutorView() {
    this.userTypeService.setUserType('tutor');
  }
  ngOnInit(): void {
    this.userTypeService.userType$.subscribe((type) => {
      if (type === 'student') {
        this.router.navigate(['/student']);
      } else if (type === 'tutor') {
        this.router.navigate(['/tutor']);
      } else {
        this.router.navigate(['/auth/log-in']);
      }
    });
  }
}
