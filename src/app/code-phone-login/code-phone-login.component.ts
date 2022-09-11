import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  '@firebase/auth';
import "@firebase/firestore"
import firebase from 'firebase/compat/app'
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-code-phone-login',
  templateUrl: './code-phone-login.component.html',
  styleUrls: ['./code-phone-login.component.css']
})
export class CodePhoneLoginComponent implements OnInit {
otp:any;
verify:any;
  constructor(public auth:AuthService,public router:Router) { }

  ngOnInit(): void {
    this.verify=JSON.parse(localStorage.getItem('verificationId')||'{}')
    console.log(this.verify)
  }
  onOtpchange(otpCode:any){
this.otp=otpCode
  }

  handleClick(){
    var cred = firebase.auth.PhoneAuthProvider.credential(this.verify,this.otp)
    firebase.auth().signInWithCredential(cred).then((response)=>{
      this.router.navigate(['/home'])
    }).catch((error)=>{
      alert(error)
    })
  }
  
}
