import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'projects',
    loadChildren:() => import('./projects/projects.module').then(m =>m.ProjectsModule)
  },
  {
    path : 'login',
    component : LoginFormComponent
  },
  {
    path : 'signup',
    component : SignupFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
