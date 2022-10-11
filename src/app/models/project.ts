import { MatDateRangePicker } from "@angular/material/datepicker";

export interface Project {
    id?:string
    name?: string;
    description?: string;
    startDate?:Date;
    duration?:number;
    budget?:number;
    status?:string;

  
  }