import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { SidebarService } from '../../../services/sidebar.service';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule, CommonModule],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent {
  isCoursesRoute: boolean = false;
  constructor(public sidebarService: SidebarService, private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isCoursesRoute = event.urlAfterRedirects === '/student/courses';
      });
  }
}
