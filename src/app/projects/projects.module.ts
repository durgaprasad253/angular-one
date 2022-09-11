import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailsComponent,
   
    
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[ProjectComponent]
})
export class ProjectsModule { }
