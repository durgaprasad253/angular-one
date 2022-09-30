import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Project } from 'src/app/models/project';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProjectComponent } from '../project/project.component';
import { Location } from '@angular/common';
import { Members } from 'src/app/models/members';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit,OnDestroy {
static addmemid:Project['id']
static memUpdateFlag:Boolean=false
static memtoEdit:Members
static projectIdUnderEdit:Project['id']
project:Project
memberList:Members[];
flag:Boolean;
  constructor(private location:Location,private pc:ProjectComponent,private fs:FirestoreService,private router:Router) { }

  ngOnInit():void {
    this.flag=ProjectComponent.flag
    if(ProjectComponent.flag===true){
      this.project=ProjectComponent.projecttoedit
      ProjectDetailsComponent.addmemid=this.project.id
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
    console.log(this.memberList)
  })
}
  }

  ngOnDestroy(): void {
    ProjectComponent.projecttoedit={}
    ProjectComponent.flag=false
  }
   async onSubmit() {
    if(ProjectComponent.flag===false){
     await this.fs.addData(this.project).then((data)=>{
      if(confirm("Do you wish to add members?")){
        ProjectDetailsComponent.addmemid=data.id
        this.router.navigate(['projects/memdetails'])

        
      }else{
        this.location.back()
        this.project={}
      }
    }).catch(()=>alert('Error adding project'))
    
    }
    else{
     await  this.fs.updateData(this.project).then(()=>alert('Success')).catch(()=>alert('Error updating the record'))
      this.location.back()
      this.project={}
      ProjectComponent.flag=false
    }
    }

    update(member:Members){
      ProjectDetailsComponent.memUpdateFlag=true
      ProjectDetailsComponent.memtoEdit=member
      ProjectDetailsComponent.projectIdUnderEdit=ProjectComponent.projecttoedit.id
      this.router.navigate(['projects/memdetails'])
    }

    delete(member:Members){
      this.fs.deleteMember(ProjectComponent.projecttoedit.id,member.id).then(()=>{
        alert('Member deleated successfully')
      }).catch(()=>alert('Error deleating member'))
    }
}


