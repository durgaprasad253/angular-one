import { Component, OnInit } from '@angular/core';
import {data} from './data';
import {Project} from '../../models/project'
import {Location} from '@angular/common';
import {FirestoreService} from '../../services/firestore.service'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class ProjectComponent implements OnInit {
  datalist = data;
  dl:Project[];
  static flag=false
  static projecttoedit:Project
  constructor(private router:Router,private location: Location,private fs:FirestoreService) {


   }
   

  ngOnInit(): void {
    this.fs.getData().subscribe(data =>{
      this.dl=data;
    })
  }
  
  back(){
    this.location.back()
  }

  delete(project:Project){
      if(confirm("Are you sure you want to delete the project? This operation cannot be undone!")){
        this.fs.deleteProject(project)
      }
  }

  update(project:Project){
    ProjectComponent.flag=true
    ProjectComponent.projecttoedit=project
    this.router.navigate(['/projects/details'])

  }


  

}
