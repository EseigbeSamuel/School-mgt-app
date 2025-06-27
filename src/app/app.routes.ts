import { RouterOutlet, Routes } from '@angular/router';
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
import { AssessmentAndQuizzesComponent } from './modules/authenticated/student/assessment-and-quizzes/assessment-and-quizzes.component';
import { MockExamsComponent } from './modules/authenticated/student/mock-exams/mock-exams.component';
import { PersonalSessionsComponent } from './modules/authenticated/student/personal-sessions/personal-sessions.component';
import { AchievementsComponent } from './modules/authenticated/student/achievements/achievements.component';
import { ResourcesComponent } from './modules/authenticated/tutor/resources/resources.component';
import { OneOnOneComponent } from './modules/authenticated/tutor/one-on-one/one-on-one.component';
// import { QuizComponent } from './modules/authenticated/student/assessment-and-quizzes/quiz/quiz.component';
// import { AssessmentComponent } from './modules/authenticated/student/assessment-and-quizzes/assessment/assessment.component';
import { TutorsComponent } from './modules/authenticated/student/personal-sessions/tutors/tutors.component';
import { TutorsDescriptionComponent } from './modules/authenticated/student/personal-sessions/tutors-description/tutors-description.component';
import { GetTutorsComponent } from './modules/authenticated/student/personal-sessions/get-tutors/get-tutors.component';
import { ViewCourseComponent } from './modules/authenticated/student/my-courses/view-course/view-course.component';

import { ChatSideComponent } from './modules/authenticated/student/messages/chat-side/chat-side.component';
import { ChatSidebarComponent } from './modules/authenticated/student/messages/chat-sidebar/chat-sidebar.component';
import { ReferalComponent } from './modules/authenticated/student/achievements/referal/referal.component';
import { LeaderboardComponent } from './modules/authenticated/student/achievements/leaderboard/leaderboard.component';
import { StreaksComponent } from './modules/authenticated/student/achievements/streaks/streaks.component';
import { CourseVideoComponent } from './modules/authenticated/student/my-courses/view-course/course-video/course-video.component';
import { WithdrawComponent } from './modules/authenticated/tutor/earnings/withdraw/withdraw.component';
import { TransactionHistoryComponent } from './modules/authenticated/tutor/earnings/transaction-history/transaction-history.component';
import { AccountsPaymentsComponent } from './modules/authenticated/tutor/profile/accounts-payments/accounts-payments.component';
import { SocialsPasswordComponent } from './modules/authenticated/tutor/profile/socials-password/socials-password.component';

import { AdminSettingsComponent } from './modules/authenticated/admin/admin-settings/admin-settings.component';
import { AdminPaymentsComponent } from './modules/authenticated/admin/admin-payments/admin-payments.component';
import { RoleGuard } from './guard/role-guard';
import { RoleStudentsComponent } from './modules/authenticated/dashboard/role-students/role-students.component';
import { RoleSessionsComponent } from './modules/authenticated/dashboard/role-sessions/role-sessions.component';
import { RoleTutorsComponent } from './modules/authenticated/dashboard/role-tutors/role-tutors.component';
import {
  RoleAccountComponent,
  RoleEditProfileComponent,
  RoleMainProfileComponent,
  RoleNotificationsComponent,
  RoleProfileComponent,
  RoleSecurityComponent,
} from './modules/authenticated/dashboard/role-profile/role-profile.component';
import { RoleMessagesComponent } from './modules/authenticated/dashboard/role-messages/role-messages.component';
import { RoleDashboardComponent } from './modules/authenticated/dashboard/role-dashboard/role-dashboard.component';
import { RoleCoursesComponent } from './modules/authenticated/dashboard/role-courses/role-courses.component';
import { EarningsComponent } from './modules/authenticated/tutor/earnings/earnings.component';
import { IndexComponent } from './modules/index/index.component';
import { AdminAddTutorComponent } from './modules/authenticated/admin/admin-tutors/admin-add-tutor/admin-add-tutor.component';
import { AdminAddStudentComponent } from './modules/authenticated/admin/admin-students/admin-add-student/admin-add-student.component';
import { AdminSessionCalenderComponent } from './modules/authenticated/admin/admin-sessions/admin-session-calender/admin-session-calender.component';
import { AdminCoursesUploadComponent } from './modules/authenticated/admin/admin-courses/admin-courses-upload/admin-courses-upload.component';
import { AdminCoursesDetailComponent } from './modules/authenticated/admin/admin-courses/admin-courses-detail/admin-courses-detail.component';
import { AdminCoursesUploadMaterialsComponent } from './modules/authenticated/admin/admin-courses/admin-courses-upload-materials/admin-courses-upload-materials.component';
import { StudentsProfileComponent } from './modules/authenticated/tutor/students/students-profile/students-profile.component';
import { AdminStudentsListingComponent } from './modules/authenticated/admin/admin-students/admin-students-listing/admin-students-listing.component';
import { StudentDashboardComponent } from './modules/authenticated/student/dashboard/dashboard.component';
import { StudentsListComponent } from './modules/authenticated/tutor/students/students-list/students-list.component';
import { AddResourcesComponent } from './modules/authenticated/tutor/resources/add-resources/add-resources.component';
import { ResourcesListComponent } from './modules/authenticated/tutor/resources/resources-list/resources-list.component';
import { NotificationsComponent } from './modules/authenticated/tutor/profile/notifications/notifications.component';
import { tutors } from './modules/authenticated/tutor/dashboard/data';
// test
export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '/auth',
  //   pathMatch: 'full',
  // },
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
    component: IndexComponent,
  },
  {
    path: 'dashboard',
    component: AuthenticatedComponent,
    children: [
      // Main dashboard - shows different component based on role
      {
        path: '',
        component: RoleDashboardComponent, // This loads the right dashboard component
      },

      // Courses route - shows different component based on role
      {
        path: 'courses',
        component: RouteEntryComponent, // This loads the right courses component
        children: [
          {
            path: '',
            component: RoleCoursesComponent,
            canActivate: [RoleGuard],
            data: { roles: ['student', 'admin', 'tutor'] },
          },
          {
            path: 'add-course',
            component: AdminCoursesUploadComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
          {
            path: 'upload-material',
            component: AdminCoursesUploadMaterialsComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
          {
            path: 'detail/:id',
            component: AdminCoursesDetailComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },

          // Student-only children
          {
            path: 'view-course/:id',
            component: ViewCourseComponent,
            canActivate: [RoleGuard],
            data: { roles: ['student'] },
          },
          {
            path: 'view-course/:id/lesson/:id',
            component: CourseVideoComponent,
            canActivate: [RoleGuard],
            data: { roles: ['student'] },
          },
        ],
      },

      // Students route - only tutors and admins see this
      {
        path: 'students',
        component: RouteEntryComponent,
        canActivate: [RoleGuard],
        data: { roles: ['tutor', 'admin'] },
        children: [
          {
            path: '',
            component: AdminStudentsListingComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
          {
            path: 'student',
            component: StudentsListComponent,
            canActivate: [RoleGuard],
            data: { roles: ['tutor'] },
          },
          { path: 'student/:id ', component: StudentsProfileComponent },
          {
            path: '',
            component: RoleStudentsComponent,
            canActivate: [RoleGuard],
            data: { roles: ['tutor', 'admin'] },
          },
          {
            path: 'add-student',
            component: AdminAddStudentComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
        ],
      },

      // Sessions route - only tutors and admins
      {
        path: 'sessions',
        component: RouteEntryComponent,
        canActivate: [RoleGuard],
        data: { roles: ['tutor', 'admin'] },
        children: [
          {
            path: '',
            component: RoleSessionsComponent,
            canActivate: [RoleGuard],
            data: { roles: ['tutor', 'admin'] },
          },
          {
            path: 'calender',
            component: AdminSessionCalenderComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
        ],
      },

      // Tutors route - students and admins see this
      {
        path: 'tutors',
        canActivate: [RoleGuard],
        data: { roles: ['admin', 'student'] },
        component: RouteEntryComponent,
        children: [
          {
            path: '',
            component: RoleTutorsComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
          {
            path: 'add-tutor',
            component: AdminAddTutorComponent,
            canActivate: [RoleGuard],
            data: { roles: ['admin'] },
          },
          {
            path: ':id',
            component: TutorsDescriptionComponent,
            canActivate: [RoleGuard],
            data: { roles: ['student'] },
          },
        ],
      },

      // Profile route - everyone has this but different components
      {
        path: 'profile',
        component: RoleProfileComponent,
        children: [
          { path: '', component: RoleMainProfileComponent },
          {
            path: 'edit-profile',
            component: RoleEditProfileComponent,
          },
          { path: 'account', component: RoleAccountComponent },
          {
            path: 'notification',
            component: RoleNotificationsComponent,
          },
          { path: 'security', component: RoleSecurityComponent },
          // Tutor-specific routes
          {
            path: 'accounts-payments',
            component: AccountsPaymentsComponent,
            canActivate: [RoleGuard],
            data: { roles: ['tutor'] },
          },
          {
            path: 'socials-passwords',
            component: SocialsPasswordComponent,
            canActivate: [RoleGuard],
            data: { roles: ['tutor'] },
          },
          {
            path: 'notifications',
            component: NotificationsComponent,
            canActivate: [RoleGuard],
            data: { roles: ['tutor'] },
          },
        ],
      },

      // Messages route - everyone has this
      // TODO: need to confirm if messaging concept is the same for everyone
      {
        path: 'messages',
        component: RoleMessagesComponent,
        children: [
          { path: '', component: ChatSidebarComponent },
          { path: 'friends/:id', component: ChatSideComponent },
        ],
      },

      // Student-only routes
      {
        path: 'assessments',
        component: AssessmentAndQuizzesComponent,
        canActivate: [RoleGuard],
        data: { roles: ['student'] },
        // children: [
        //   { path: '', component: QuizComponent },
        //   { path: 'quiz', component: QuizComponent },
        //   { path: 'assessment', component: AssessmentComponent },
        // ],
      },

      {
        path: 'mock-exams',
        component: MockExamsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['student'] },
      },

      {
        path: 'personal-sessions',
        component: PersonalSessionsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['student'] },
        children: [
          { path: '', component: GetTutorsComponent },
          { path: 'tutoring', component: TutorsComponent },
          { path: 'tutoring/:id', component: TutorsDescriptionComponent },
        ],
      },

      {
        path: 'achievements',
        component: AchievementsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['student'] },
        children: [
          { path: '', component: ReferalComponent },
          { path: 'referal', component: ReferalComponent },
          { path: 'leaderboard', component: LeaderboardComponent },
          { path: 'streaks', component: StreaksComponent },
        ],
      },

      // Tutor-only routes
      {
        path: 'resources',
        component: ResourcesComponent,
        canActivate: [RoleGuard],
        data: { roles: ['tutor'] },
        children: [
          { path: '', component: ResourcesListComponent },
          { path: 'add-resources', component: AddResourcesComponent },
        ],
      },

      {
        path: 'one-on-one',
        component: OneOnOneComponent,
        canActivate: [RoleGuard],
        data: { roles: ['tutor'] },
      },

      {
        path: 'earnings',
        component: EarningsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['tutor'] },
        children: [
          { path: '', component: TransactionHistoryComponent },
          { path: 'withdraw', component: WithdrawComponent },
        ],
      },

      // Admin-only routes
      {
        path: 'payments',
        component: AdminPaymentsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },

      {
        path: 'settings',
        component: AdminSettingsComponent,
        canActivate: [RoleGuard],
        data: { roles: ['admin'] },
      },
    ],
  },
];
