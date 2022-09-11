import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map,Observable } from 'rxjs';
import {Project} from '../models/project'
@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private projectsCollection: AngularFirestoreCollection<Project>;
  private projectsDocument:AngularFirestoreDocument<Project>
  projects: Observable<Project[]>;
  constructor(private afs: AngularFirestore) {
    this.projectsCollection = afs.collection<Project>('projects1');
    this.projects = this.projectsCollection.snapshotChanges().pipe(map(actions => actions.map(a=>{
      const data=a.payload.doc.data() as Project;
      data.id=a.payload.doc.id;
      return data;
    })));
    
  }

  getData(){
    return this.projects;
  }
  addData(project:Project){
    this.projectsCollection.add(project)
  }

  updateData(project:Project){
    this.afs.doc('projects1/'+project.id).update(project);
  }

  deleteProject(project:Project){
    this.projectsDocument = this.afs.doc('projects1/'+project.id)
    this.projectsDocument.delete()
  }

}
