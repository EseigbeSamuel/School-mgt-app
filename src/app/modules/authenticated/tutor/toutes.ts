// tutor/routes.ts
import { Routes } from '@angular/router';
import { TutorDashboardComponent } from './dashboard/dashboard.component';

export const tutorRoutes: Routes = [
  {
    path: '',
    component: TutorDashboardComponent,
  },
];
