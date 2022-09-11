import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit,OnDestroy {
  userLoggedIn:Boolean=false
  private authSubscriiption:Subscription
  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
this.authSubscriiption=this.auth.ifloggedIn().subscribe((loggedIn)=>this.userLoggedIn=loggedIn)
  }
  ngOnDestroy(): void {
  if(this.authSubscriiption)
  this.authSubscriiption.unsubscribe()
  }

  toggleLogin(): void {

    if(this.userLoggedIn){
      this.auth.logout()
    }
    this.router.navigate(['/login'])
  }
}
