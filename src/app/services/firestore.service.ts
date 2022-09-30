import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { map,Observable } from 'rxjs';
import {Project} from '../models/project'
import { Members } from '../models/members';
import { collection, getDocs, query, where } from "firebase/firestore";
import { data } from '../projects/project/data';
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
   async addData(project:Project){
    return this.afs.collection<Project>('projects1').add(project)
  }

  async updateData(project:Project){
   return this.afs.doc('projects1/'+project.id).update(project);
  }

  async deleteProject(project:Project){
    this.afs.doc('projects1/'+project.id).delete()
    
  }

  async addMember(id:Project['id'],member:Members){
    return this.afs.collection<Members>('projects1/'+id+'/members').add(member)
  }

  getMembers(id:Project['id']){
    this.members=this.afs.collection<Members>('projects1/'+id+'/members').valueChanges({idField:'id'})
    return this.members
  }

  async updateMember(pid:Project['id'],member:Members){
    return this.afs.doc('projects1/'+pid+'/members/'+member.id).update(member)
  }

  async deleteMember(pid:Project['id'],mid:Members['id']){
    this.afs.doc('projects1/'+pid+'/members/'+mid).delete()
  }

  async getId(){
  
    // const q=query(projRef,where("name","==","Angular"))
    // const querySnapshot= await getDocs(q)
    
  }

}
