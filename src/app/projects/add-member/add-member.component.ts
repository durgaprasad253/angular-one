import { Component, OnInit } from '@angular/core';
import { Members } from 'src/app/models/members';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
member:Members
  constructor(private fs:FirestoreService) { }

  ngOnInit(): void {
    console.log(ProjectComponent.projecttoedit.id)
    console.log(ProjectDetailsComponent.addmemid)
    this.member={}
  }
onSubmit(){
this.fs.addMember(ProjectDetailsComponent.addmemid,this.member)
}
}
