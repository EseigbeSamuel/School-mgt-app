import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { UserTypeService } from '../../../services/user-type.service';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent {
  constructor(private userTypeService: UserTypeService) {}

  studentView() {
    this.userTypeService.setUserType('student');
  }

  tutorView() {
    this.userTypeService.setUserType('tutor');
  }
}
