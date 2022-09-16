import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map,Observable } from 'rxjs';
import {Project} from '../models/project'
import { Members } from '../models/members';
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private projectsCollection: AngularFirestoreCollection<Project>;
  private projectsDocument:AngularFirestoreDocument<Project>
  projects: Observable<Project[]>;
  members:Observable<Members[]>
  constructor(private afs: AngularFirestore) {
    this.projects = afs.collection<Project>('projects1').valueChanges({idField:'id'});

    
  }

  getData(){
    return this.projects;
  }
  addData(project:Project){
    this.afs.collection<Project>('projects1').add(project)
  
  }

  updateData(project:Project){
    this.afs.doc('projects1/'+project.id).update(project);
  }

  deleteProject(project:Project){
    this.projectsDocument = this.afs.doc('projects1/'+project.id)
    console.log(project.id)
    this.projectsDocument.delete()
  }

  getMembers(id:Project['id']){
    this.members=this.afs.collection<Members>('projects1/'+id+'/members').valueChanges({idField:'id'})
    return this.members
  }

}
