import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import  '@firebase/auth';
import "@firebase/firestore"
import firebase from 'firebase/compat/app'
import { Router } from '@angular/router';


@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})
export class PhoneLoginComponent implements OnInit {
  phoneNumber:any;
  reCaptchaVerifier:any
  constructor(public authentication:AngularFireAuth,public router:Router) { }

  ngOnInit(): void {
  }
  getOtp(){
    this.reCaptchaVerifier= new firebase.auth.RecaptchaVerifier('sign-in-button',{})
   firebase.auth().signInWithPhoneNumber(this.phoneNumber,this.reCaptchaVerifier).then((confirmationResult)=>{
    localStorage.setItem('verificationId',JSON.stringify(confirmationResult.verificationId))
    this.router.navigate(['/code'])
   }).catch((error)=>{
    alert(error.message)
    setTimeout(()=>{
      window.location.reload()
    })
   })

  }
}
