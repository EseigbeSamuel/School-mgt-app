import { Routes } from '@angular/router';
import { UnAthenticatedComponent } from './layout/un-athenticated/un-athenticated.component';
import { SplashScreenComponent } from './modules/unAuthenticated/splash-screen/splash-screen.component';

import { PreRegisterComponent } from './modules/unAuthenticated/register/pre-register.component';
import { LoginComponent } from './modules/unAuthenticated/login/login.component';
import { SignUpComponent } from './modules/unAuthenticated/sign-up/sign-up.component';
import { ConfirmationComponent } from './modules/unAuthenticated/confirmation/confirmation.component';
import { ActivationUiComponent } from './shared/components/activation-ui/activation-ui.component';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { PorfileSetUpComponent } from './modules/authenticated/porfile-set-up/porfile-set-up.component';

import { NewPasswordComponent } from './modules/unAuthenticated/new-password/new-password.component';

import { ConfirmEmailComponent } from './modules/unAuthenticated/confirm-email/confirm-email.component';
import { ResetPasswordComponent } from './modules/unAuthenticated/reset-password/reset-password.component';
import { DashboardEntryComponent } from './modules/authenticated/dashboard-entry.component';
import { RouteEntryComponent } from './modules/authenticated/route-entry/route-entry.component';
import { StudentDashboardComponent } from './modules/authenticated/student/dashboard/dashboard.component';
import { MyCoursesComponent } from './modules/authenticated/student/my-courses/my-courses.component';
import { TutorDashboardComponent } from './modules/authenticated/tutor/dashboard/dashboard.component';
import { MySessionsComponent } from './modules/authenticated/tutor/my-sessions/my-sessions.component';
import { AssessmentAndQuizzesComponent } from './modules/authenticated/student/assessment-and-quizzes/assessment-and-quizzes.component';
import { MockExamsComponent } from './modules/authenticated/student/mock-exams/mock-exams.component';
import { StudentsComponent } from './modules/authenticated/tutor/students/students.component';
import { PersonalSessionsComponent } from './modules/authenticated/student/personal-sessions/personal-sessions.component';
import { AchievementsComponent } from './modules/authenticated/student/achievements/achievements.component';
import { ResourcesComponent } from './modules/authenticated/tutor/resources/resources.component';
import { OneOnOneComponent } from './modules/authenticated/tutor/one-on-one/one-on-one.component';
import { EarningsComponent } from './modules/authenticated/tutor/earnings/earnings.component';
import { MessagingComponent } from './modules/authenticated/tutor/messaging/messaging.component';
import { MessagesComponent } from './modules/authenticated/student/messages/messages.component';
import { ProfileComponent } from './modules/authenticated/student/profile/profile.component';
// test
export const routes: Routes = [
  {
    path: 'auth',
    component: UnAthenticatedComponent,
    children: [
      { path: '', component: SplashScreenComponent },
      {
        path: 'reset-password',
        component: ConfirmEmailComponent,
      },
      {
        path: 'new-password',
        component: NewPasswordComponent,
      },

      {
        path: 'register',
        component: PreRegisterComponent,
      },
      {
        path: 'log-in',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },

      {
        path: 'confirm',
        component: ConfirmationComponent,
        children: [
          {
            path: '',
            component: ActivationUiComponent,
          },
          {
            path: 'set-password',
            component: ResetPasswordComponent,
          },
          {
            path: 'profile-set-up',
            component: PorfileSetUpComponent,
          },
        ],
      },
    ],
  },
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      { path: '', component: DashboardEntryComponent },
      {
        path: 'student',
        component: RouteEntryComponent,
        children: [
          {
            path: '',
            component: StudentDashboardComponent,
          },
          {
            path: 'courses',
            component: MyCoursesComponent,
          },
          {
            path: 'assessments',
            component: AssessmentAndQuizzesComponent,
          },
          {
            path: 'mock-exams',
            component: MockExamsComponent,
          },
          {
            path: 'personal-sessions',
            component: PersonalSessionsComponent,
          },
          {
            path: 'achievements',
            component: AchievementsComponent,
          },
          {
            path: 'messages',
            component: MessagesComponent,
          },
          {
            path: 'profile',
            component: ProfileComponent,
          },
        ],
      },
      {
        path: 'tutor',
        component: RouteEntryComponent,
        children: [
          {
            path: '',
            component: TutorDashboardComponent,
          },
          {
            path: 'my-sessions',
            component: MySessionsComponent,
          },
          {
            path: 'my-courses',
            component: MyCoursesComponent,
          },
          {
            path: 'students',
            component: StudentsComponent,
          },
          {
            path: 'resources',
            component: ResourcesComponent,
          },
          {
            path: 'one-on-one',
            component: OneOnOneComponent,
          },
          {
            path: 'earnings',
            component: EarningsComponent,
          },
          {
            path: 'messaging',
            component: MessagingComponent,
          },
        ],
      },
    ],
  },
];
