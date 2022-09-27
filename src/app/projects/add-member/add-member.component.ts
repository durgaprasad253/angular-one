import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Members } from 'src/app/models/members';
import { FirestoreService } from 'src/app/services/firestore.service';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  member: Members
  constructor(private fs: FirestoreService, private router: Router) { }

  ngOnInit(): void {
    this.member = {}
  }

  async onSubmit() {
    await this.fs.addMember(ProjectDetailsComponent.addmemid, this.member).then(() => {
      alert('Member added successfully')
      if (confirm("Do you want to add more members")) {
        this.member = {}
      } else {
        this.router.navigate(['projects'])
      }
    }).catch(() => alert('failed'))
  }
}
