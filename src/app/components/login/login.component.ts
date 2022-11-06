import { Component, OnInit } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
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
   * This function signs in the user, if they are correct, the user
   * is redirected to Home, if not, you got an error message.
   */
  login() {
    this.loginToPD(this.user)
    .then(() => this.router.navigate(['/']))
    .catch((e) => console.error(e.message));
  }

  /**
   * This function verifies if the credentials the user is using
   * are registered in the DB.
   * @param param0 It receives a object with the email and password, both strings
   * @returns Execute 'signInWithEmailAndPassword' function from Angular
   */
  loginToPD({ email, password}: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

}
