import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router: Router, private auth: Auth) { }

  /**
   * This function registers a new user in the DB after verify the fields
   * @param user object with the user credentials
   */
   signUp(user: LoginData) {
    createUserWithEmailAndPassword(this.auth, user.email, user.password)
    .then((res) => {
      localStorage.setItem('idUserLogged', res.user.uid);
      this.router.navigate(['/user-data']);
    })
    .catch((e) => {
      if(e.code === "auth/email-already-in-use") {
        alert("This email is already registered");
      }
      console.error(e);
    });
  }

  /**
   * This function verifies if the credentials the user is using
   * are registered in the DB. If they are correct, the user
   * is redirected to Home, if not, you got an error message.
   * @param param0 It receives a object with the email and password, both strings
   * @returns Execute 'signInWithEmailAndPassword' function from Angular
   */
   login({ email, password}: LoginData) {
    signInWithEmailAndPassword(this.auth, email, password)
    .then((res) => {
      this.router.navigate(['/']);
    })
    .catch((e: any) => {
      if(e.code === "auth/wrong-password" || e.code === "auth/user-not-found") {
        alert("Incorrect email or password, please, try again");
      } else if (e.code === "auth/invalid-email") {
        alert("The email address is not valid.");
      } else {
        alert("Something went wrong, please, try again");
      }
    });
  }

  /**
   * This function is for the login with Google, it shows a popup
   * where you choose your email, and then redirects you to home
   * in case they are correct.
   */
  signUpWithGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
    .then(() => this.router.navigate(['/']))
    .catch((e: any) => console.error(e.message));
  }

  /**
   * This function closes the active session
   */
  logout() {
    signOut(this.auth);
  }
}
