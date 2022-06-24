import { Component, OnInit } from '@angular/core';
import {data} from './data';
interface DATA{
  Name:String;
  Description:String;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  datalist = data;
  constructor() { }

  ngOnInit(): void {
  }

}
