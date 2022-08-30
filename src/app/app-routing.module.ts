import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodePhoneLoginComponent } from './code-phone-login/code-phone-login.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginFormComponent,
  },
  {
    path: 'signup',
    component: SignupFormComponent,
  },
  {
    path:'phonelogin',
    component:PhoneLoginComponent,
  },
  {
    path:'code',
    component:CodePhoneLoginComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
