import { Component, OnInit } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/interfaces/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: LoginData = {
    email: '',
    password: ''
  };
  correctCredentials: boolean = false;

  constructor(private auth: Auth, private router: Router) { }

  ngOnInit(): void {
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
    .then(() => this.router.navigate(['/']))
    .catch((e: any) => console.error(e.message));
  }

  /**
   * This function is for the login with Google, it shows a popup
   * where you choose your email, and then redirects you to home
   * in case they are correct.
   */
  loginGoogle() {
    signInWithPopup(this.auth, new GoogleAuthProvider())
    .then(() => this.router.navigate(['/']))
    .catch((e: any) => console.error(e.message));
  }
}
