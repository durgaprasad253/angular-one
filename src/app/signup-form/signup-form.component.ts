import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  registerForm: FormGroup;
  isSignedIn=false
  constructor(private fb: FormBuilder,public firebaseService:AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }
  
  async signup(){
   
    await this.firebaseService.signup(this.registerForm.value.email,this.registerForm.value.password)
    // if(this.firebaseService.isLoggedIn)
    this.isSignedIn=true
    
  }

  

}
