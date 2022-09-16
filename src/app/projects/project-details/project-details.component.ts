import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Project } from 'src/app/models/project';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProjectComponent } from '../project/project.component';
import { Location } from '@angular/common';
import { Members } from 'src/app/models/members';
@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit,OnDestroy {
project:Project
memberList:Members[];
  constructor(private location:Location,private pc:ProjectComponent,private fs:FirestoreService) { }

  ngOnInit(): void {
    if(ProjectComponent.flag===true){
      this.project=ProjectComponent.projecttoedit
    }
    else{
    this.project={
      name:'',
      description:'',
      startDate:new Date(),
      duration:0,
      budget:0,
      status:''

    }
  }
  if(this.project){
  this.fs.getMembers(this.project.id).subscribe(res=>{
    this.memberList=res
  })
}
  }

  ngOnDestroy(): void {
    ProjectComponent.projecttoedit={}
  }
  onSubmit() {
    if(ProjectComponent.flag===false){
      console.log(this.project)
    this.fs.addData(this.project)
    this.location.back()
    this.project={}
    }
    else{
      this.fs.updateData(this.project)
      this.location.back()
      this.project={}
      ProjectComponent.flag=false
    }
    }
}
