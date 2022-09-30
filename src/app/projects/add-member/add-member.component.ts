import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Members } from 'src/app/models/members';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit, OnDestroy {
  member: Members

  constructor(private fs: FirestoreService, private router: Router) { }

  ngOnInit(): void {
    if (ProjectDetailsComponent.memUpdateFlag) {
      this.member = ProjectDetailsComponent.memtoEdit
    }
    else
      this.member = {}
  }

  ngOnDestroy(): void {
    ProjectDetailsComponent.memUpdateFlag = false
    ProjectDetailsComponent.memtoEdit = {}
    ProjectDetailsComponent.projectIdUnderEdit = ''
  }

  async onSubmit() {
    if (!ProjectDetailsComponent.memUpdateFlag) {
      await this.fs.addMember(ProjectDetailsComponent.addmemid, this.member).then(() => {
        alert('Member added successfully')
        if (confirm("Do you want to add more members")) {
          this.member = {}
        } else {
          this.router.navigate(['projects'])
        }
      }).catch(() => alert('failed'))
    }
    else {
      this.fs.updateMember(ProjectDetailsComponent.projectIdUnderEdit, this.member).then(() => {
        alert('Member updated')
        ProjectDetailsComponent.memUpdateFlag = false
        ProjectDetailsComponent.memtoEdit = {}
        ProjectDetailsComponent.projectIdUnderEdit = ''
        this.router.navigate(['projects'])
      }).catch(() => {
        alert('Error updating member')
      })
    }
  }
}
