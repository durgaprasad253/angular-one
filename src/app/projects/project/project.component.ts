import { Component, OnInit,HostListener } from '@angular/core';
import {data} from './data';
import {Location} from '@angular/common';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {
  datalist = data;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  @HostListener('click')
  onClick(){
    this.location.back()
  }

}
