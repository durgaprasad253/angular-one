import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  registerForm: FormGroup;
  // isSignedIn=false
  constructor(
    private fb: FormBuilder,
    public firebaseService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm= this.fb.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    //console.log('trying to login');
    this.firebaseService
      .signin(this.registerForm.value.email, this.registerForm.value.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('[LoginFormComponent]: login() -', error);
      });
   
  }

  signinwithgoogle(){
    this.firebaseService.loginWithGoogle()
    
  }
}
