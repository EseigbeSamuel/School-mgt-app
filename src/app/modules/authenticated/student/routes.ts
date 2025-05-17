// student/routes.ts
import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './dashboard/dashboard.component';

export const studentRoutes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
  },
];
