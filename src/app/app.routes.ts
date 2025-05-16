import { Routes } from '@angular/router';
import { UnAthenticatedComponent } from './layout/un-athenticated/un-athenticated.component';
import { SplashScreenComponent } from './modules/unAuthenticated/splash-screen/splash-screen.component';
import { ResetPasswordComponent } from './modules/unAuthenticated/set-password/reset-password.component';
import { PreRegisterComponent } from './modules/unAuthenticated/register/pre-register.component';
import { LoginComponent } from './modules/unAuthenticated/login/login.component';
import { SignUpComponent } from './modules/unAuthenticated/sign-up/sign-up.component';
import { ConfirmationComponent } from './modules/unAuthenticated/confirmation/confirmation.component';
import { ActivationUiComponent } from './shared/components/activation-ui/activation-ui.component';
import { AuthenticatedComponent } from './layout/authenticated/authenticated.component';
import { PorfileSetUpComponent } from './modules/authenticated/porfile-set-up/porfile-set-up.component';
import { DashBoardComponent } from './modules/authenticated/tutor/dash-board/dash-board.component';
import { NewPasswordComponent } from './modules/unAuthenticated/new-password/new-password.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: UnAthenticatedComponent,
    children: [
      { path: '', component: SplashScreenComponent },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,
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
      // {
      //   path :'forgot-password',
      //   component
      // }
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
      {
        path: '',
        component: DashBoardComponent,
      },
    ],
  },
];
