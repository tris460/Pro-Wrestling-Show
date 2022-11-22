import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/interfaces/login-data';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userFields = {
    email: '',
    c_email: '',
    password: '',
    c_password: ''
  };

  email_req: boolean = false;
  email_verify: boolean = false;
  email_registered: boolean = false;
  c_email_req: boolean = false;
  c_email_match: boolean = false;
  pass_req: boolean = false;
  pass_char: boolean = false;
  c_pass_req: boolean = false;
  c_pass_match: boolean = false;
  privacy_policy_accepted: boolean = true;

  validateEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  validatePassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

  fieldsVerified: boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  async verifyFields() {
    // Verify the fields are not empty
    this.userFields.email === '' ? this.email_req = true : this.email_req = false;
    this.userFields.c_email === '' ? this.c_email_req = true : this.c_email_req = false;
    this.userFields.password === '' ? this.pass_req = true : this.pass_req = false;
    this.userFields.c_password === '' ? this.c_pass_req = true : this.c_pass_req = false;
    // Verify the email and password confirmation
    this.userFields.c_email === '' ? this.c_email_match = false : this.c_email_match = false;
    this.userFields.c_email === this.userFields.email ? this.c_email_match = false : this.c_email_match = true;
    this.userFields.c_password === '' ? this.c_pass_match = false : this.c_pass_match = false;
    this.userFields.c_password === this.userFields.password ? this.c_pass_match = false : this.c_pass_match = true;
    //Verify password's conditions
    this.validatePassword.test(this.userFields.password) && this.userFields.password !== '' ? this.pass_char = false : this.pass_char = true;
    // Verify it is an email
    this.validateEmail.test(this.userFields.email) && this.userFields.email !== '' ? this.email_verify = false : this.email_verify = true;

    if(this.email_req === true ||
      this.c_email_req === true ||
      this.pass_req === true ||
      this.c_pass_req === true ||
      this.c_email_match === true ||
      this.c_pass_match === true ||
      this.pass_char === true ||
      this.email_verify === true ||
      this.privacy_policy_accepted === false) {
        this.fieldsVerified = true;
      } else {
        const newUserCredentials: LoginData = {
          email: this.userFields.email,
          password: this.userFields.password
        };
        await this.signUp(newUserCredentials);
      }
  }

  /**
   * This function registers a new user in the DB after verify the fields
   * @param user object with the user credentials
   */
  signUp(user: LoginData) {
    this.loginService.signUp(user);
  }

  /**
   * This function is for the login with Google, it shows a popup
   * where you choose your email, and then redirects you to home
   * in case they are correct.
   */
  signUpWithGoogle() {
    this.loginService.signUpWithGoogle();
  }
}
