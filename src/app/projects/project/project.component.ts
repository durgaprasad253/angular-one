import { Component, OnInit,HostListener } from '@angular/core';
import {data} from './data';
import {Item} from '../../models/item'
import {Location} from '@angular/common';
import {FirestoreService} from '../../services/firestore.service'

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  datalist = data;
  dl:Item[];
  constructor(private location: Location,private fs:FirestoreService) { }

  ngOnInit(): void {
    this.fs.getData().subscribe(data =>{
      this.dl=data;
    })
  }
  @HostListener('click')
  onClick(){
    this.location.back()
  }

}
