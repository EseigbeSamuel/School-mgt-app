// dashboard-entry.component.ts
import { Component, inject, OnInit, effect } from '@angular/core';
import { Router } from '@angular/router';
import { UserTypeService } from '../../services/user-type.service';

@Component({
  selector: 'app-dashboard-entry',
  standalone: true,
  template: '',
})
export class DashboardEntryComponent implements OnInit {
  private router = inject(Router);
  private userTypeService = inject(UserTypeService);

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
