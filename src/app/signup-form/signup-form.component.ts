import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  registerForm: FormGroup;
  isSignedIn=false
  constructor(private fb: FormBuilder,public firebaseService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: new FormControl(''),
      password: new FormControl('')
    })

  }
  
  async signup(){
   
    await this.firebaseService.signup(this.registerForm.value.email,this.registerForm.value.password).then(()=>{
      alert('Sign up successfull, Please login')
      this.router.navigate(['login'])
    }).catch((error)=>{alert(error)})
   
  }

  

}
