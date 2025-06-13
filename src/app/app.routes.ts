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
import { MessagesComponent as MessagesComponentTutor } from './modules/authenticated/tutor/messages/messages.component';
import { MessagesComponent } from './modules/authenticated/student/messages/messages.component';
import { ProfileComponent } from './modules/authenticated/student/profile/profile.component';
import { ProfileComponent as ProfileComponentTutor } from './modules/authenticated/tutor/profile/profile.component';
// import { QuizComponent } from './modules/authenticated/student/assessment-and-quizzes/quiz/quiz.component';
// import { AssessmentComponent } from './modules/authenticated/student/assessment-and-quizzes/assessment/assessment.component';
import { TutorsComponent } from './modules/authenticated/student/personal-sessions/tutors/tutors.component';
import { TutorsDescriptionComponent } from './modules/authenticated/student/personal-sessions/tutors-description/tutors-description.component';
import { GetTutorsComponent } from './modules/authenticated/student/personal-sessions/get-tutors/get-tutors.component';
import { MyCoursesComponentTutor } from './modules/authenticated/tutor/my-courses/my-courses.component';
import { ViewCourseComponent } from './modules/authenticated/student/my-courses/view-course/view-course.component';
import { EditProfileComponent } from './modules/authenticated/student/profile/edit-profile/edit-profile.component';
import { AccountComponent } from './modules/authenticated/student/profile/account/account.component';
import { NotificationsComponent } from './modules/authenticated/student/profile/notifications/notifications.component';
import { SecurityComponent } from './modules/authenticated/student/profile/security/security.component';
import { MainProfileComponent } from './modules/authenticated/student/profile/main-profile/main-profile.component';
import { ChatSideComponent } from './modules/authenticated/student/messages/chat-side/chat-side.component';
import { ChatSidebarComponent } from './modules/authenticated/student/messages/chat-sidebar/chat-sidebar.component';
import { ReferalComponent } from './modules/authenticated/student/achievements/referal/referal.component';
import { LeaderboardComponent } from './modules/authenticated/student/achievements/leaderboard/leaderboard.component';
import { StreaksComponent } from './modules/authenticated/student/achievements/streaks/streaks.component';
import { CourseVideoComponent } from './modules/authenticated/student/my-courses/view-course/course-video/course-video.component';
import { WithdrawComponent } from './modules/authenticated/tutor/earnings/withdraw/withdraw.component';
import { TransactionHistoryComponent } from './modules/authenticated/tutor/earnings/transaction-history/transaction-history.component';
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
    component: AuthenticatedComponent,
    children: [
      { path: '', component: DashboardEntryComponent },
      {
        path: 'student',
        component: RouteEntryComponent,
        children: [
          { path: '', component: StudentDashboardComponent },
          {
            path: 'courses',
            component: RouteEntryComponent,
            children: [
              { path: '', component: MyCoursesComponent },
              {
                path: 'view-course/:id',
                component: ViewCourseComponent,
              },
              {
                path: 'view-course/:id/lesson/:id',
                component: CourseVideoComponent,
              },
            ],
          },
          {
            path: 'assessments',
            component: AssessmentAndQuizzesComponent,
          },
          { path: 'mock-exams', component: MockExamsComponent },
          {
            path: 'personal-sessions',
            component: PersonalSessionsComponent,
            children: [
              { path: '', component: GetTutorsComponent },
              { path: 'tutors', component: TutorsComponent },
              { path: 'tutors/:id', component: TutorsDescriptionComponent },
            ],
          },
          {
            path: 'achievements',
            component: AchievementsComponent,
            children: [
              { path: '', component: ReferalComponent },
              { path: 'referal', component: ReferalComponent },
              { path: 'leaderboard', component: LeaderboardComponent },
              { path: 'streaks', component: StreaksComponent },
            ],
          },
          {
            path: 'messages',
            component: MessagesComponent,
            children: [
              { path: '', component: ChatSidebarComponent },
              { path: 'friends/:id', component: ChatSideComponent },
            ],
          },
          {
            path: 'profile',
            component: ProfileComponent,
            children: [
              { path: '', component: MainProfileComponent },
              { path: 'main-profile', component: MainProfileComponent },
              { path: 'edit-profile', component: EditProfileComponent },
              { path: 'account', component: AccountComponent },
              { path: 'notification', component: NotificationsComponent },
              { path: 'security', component: SecurityComponent },
            ],
          },
        ],
      },
      {
        path: 'tutor',
        component: RouteEntryComponent,
        children: [
          { path: '', component: TutorDashboardComponent },
          { path: 'my-sessions', component: MySessionsComponent },
          { path: 'my-courses', component: MyCoursesComponentTutor },
          { path: 'students', component: StudentsComponent },
          { path: 'resources', component: ResourcesComponent },
          { path: 'one-on-one', component: OneOnOneComponent },
          {
            path: 'earnings',
            component: EarningsComponent,
            children: [
              {
                path: '',
                component: TransactionHistoryComponent,
              },
              {
                path: 'withdraw',
                component: WithdrawComponent,
              },
            ],
          },
          { path: 'profile', component: ProfileComponentTutor },
          {
            path: 'messages',
            component: MessagesComponentTutor,
            children: [
              { path: '', component: ChatSidebarComponent },
              { path: 'friends/:id', component: ChatSideComponent },
            ],
          },
        ],
      },
    ],
  },
];
