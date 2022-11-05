import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { copyFileSync } from 'fs';
import { delay } from 'rxjs';
import { SignUpService } from 'src/app/services/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  newUser = {
    email: '',
    password: '',
    name: '',
    last_name: ''
  };
  userFields = {
    name: '',
    last_name: '',
    email: '',
    c_email: '',
    password: '',
    c_password: ''
  };
  name_req: boolean = false;
  last_n_req: boolean = false;
  email_req: boolean = false;
  email_verify: boolean = false;
  email_registered: boolean = false;
  c_email_req: boolean = false;
  c_email_not_match: boolean = false;
  pass_req: boolean = false;
  pass_char: boolean = false;
  pass_short: boolean = false;
  c_pass_req: boolean = false;
  c_pass_not_match: boolean = false;

  validateEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
  validatePassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

  constructor(private signUpService: SignUpService, private router: Router) { }

  ngOnInit(): void {
  }

  verifyFields() {
    // Verify the fields are not empty
    this.userFields.name === '' ? this.name_req = true : this.name_req = false;
    this.userFields.last_name === '' ? this.last_n_req = true : this.last_n_req = false;
    this.userFields.email === '' ? this.email_req = true : this.email_req = false;
    this.userFields.c_email === '' ? this.c_email_req = true : this.c_email_req = false;
    this.userFields.password === '' ? this.pass_req = true : this.pass_req = false;
    this.userFields.c_password === '' ? this.c_pass_req = true : this.c_pass_req = false;
    // Verify the email and password confirmation
    this.userFields.c_email === '' ? this.c_email_not_match = false : this.c_email_not_match = false;
    this.userFields.c_email === this.userFields.email ? this.c_email_not_match = false : this.c_email_not_match = true;
    this.userFields.c_password === '' ? this.c_pass_not_match = false : this.c_pass_not_match = false;
    this.userFields.c_password === this.userFields.password ? this.c_pass_not_match = false : this.c_pass_not_match = true;
    // Verify the password's length
    this.userFields.password.length < 8 && this.userFields.password.length > 16 && this.userFields.password !== '' ? this.pass_short = true : this.pass_short = false;
    //Verify password's conditions
    this.validatePassword.test(this.userFields.password) && this.userFields.password !== '' ? this.pass_char = false : this.pass_char = true;
    // Verify it is an email
    this.validateEmail.test(this.userFields.email) && this.userFields.email !== '' ? this.email_verify = true : this.email_verify = false;
  }

  /**
   * This function registers a new user in the DB after verify the fields
   */
  async signUp() {
    // await this.signUpService.addUser(this.newUser);
    alert('aletsgajdajdh')
    this.router
  }

}
