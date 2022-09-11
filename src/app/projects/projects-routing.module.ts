import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details/project-details.component';


import { ProjectComponent } from './project/project.component';



const routes: Routes = [
    {
        path:'',
        component:ProjectComponent,
    },
    {
      path:'details',
      component:ProjectDetailsComponent
    },
    
  ];






@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class ProjectRoutingModule { }