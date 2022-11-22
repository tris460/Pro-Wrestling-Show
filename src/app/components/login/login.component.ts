import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/interfaces/login-data';
import { LoginService } from 'src/app/services/login.service';

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
  fieldsVerified: boolean = true;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  verifyFields() {
    if(this.user.email === '' || this.user.password === '') {
      this.fieldsVerified = false;
    } else {
      this.fieldsVerified = true;
      this.login(this.user);
    }
  }

  /**
   * This function verifies if the credentials the user is using
   * are registered in the DB. If they are correct, the user
   * is redirected to Home, if not, you got an error message.
   * @param param0 It receives a object with the email and password, both strings
   * @returns Execute 'signInWithEmailAndPassword' function from Angular
   */
  login({ email, password}: LoginData) {
    this.loginService.login({ email, password});
  }

  /**
   * This function is for the login with Google, it shows a popup
   * where you choose your email, and then redirects you to home
   * in case they are correct.
   */
  loginGoogle() {
    this.loginService.signUpWithGoogle();
  }
}
