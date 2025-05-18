// tutor/routes.ts
import { Routes } from '@angular/router';
import { TutorDashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';

export const tutorRoutes: Routes = [
  {
    path: '',
    component: TutorDashboardComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
];
