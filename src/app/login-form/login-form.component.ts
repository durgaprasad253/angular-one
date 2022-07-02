import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  registerForm: FormGroup;
  isSignedIn=false
  constructor(private fb: FormBuilder,public firebaseService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }
  async login(){
   console.log("workimg")
    await this.firebaseService.signin(this.registerForm.value.email,this.registerForm.value.password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    
  }


}
