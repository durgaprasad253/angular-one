import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  constructor(public auth: AngularFireAuth, public router: Router) {}
  signin(email: string, password: string) {
    return this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
      })
      .catch((error) => {
        alert(error);
      });
  }

  async signup(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
      });
  }
  logout() {
    this.isLoggedIn = false;
    return this.auth.signOut();
  }

  loginWithGoogle() {
    return this.auth
      .signInWithPopup(new GoogleAuthProvider())
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem('token', JSON.stringify(res.user?.uid));
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        alert(error);
      });
  }
}
