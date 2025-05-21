import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dash-navbar',
  imports: [SharedModule, CommonModule],
  templateUrl: './dash-navbar.component.html',
  styleUrl: './dash-navbar.component.css',
})
export class DashNavbarComponent {
  isCoursesRoute: boolean = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.isCoursesRoute = event.urlAfterRedirects === '/student/courses';
      });
  }
}
