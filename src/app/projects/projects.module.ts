import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectRoutingModule } from './projects-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { FormsModule } from '@angular/forms';
import { AddMemberComponent } from './add-member/add-member.component';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';





@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDetailsComponent,
    AddMemberComponent,
   
    
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireStorageModule
  ],
  exports:[ProjectComponent]
})
export class ProjectsModule { }
