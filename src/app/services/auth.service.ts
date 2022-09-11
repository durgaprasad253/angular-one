import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn=new BehaviorSubject<boolean>(false)
  constructor(public auth: AngularFireAuth, public router: Router) {
    this.auth.authState.subscribe((user)=>{this.loggedIn.next(Boolean(user?.uid))})
  }
  signin(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        alert(error);
      });
  }

  async signup(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password);
  }
  logout() {
    this.loggedIn.next(false)
    return this.auth.signOut();
  }

  loginWithGoogle() {
    return this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        alert(error);
      });
  }

  ifloggedIn():Observable<boolean>{
    return this.loggedIn.asObservable()
  }
}
