import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = {
    favorites: [],
    last_name: '',
    name: 'User name',
  };
  logged: boolean;

  constructor(private userService: UsersService, private loginService: LoginService) {
    if(this.userService.userLogged) {
      this.logged = true;
      setTimeout(() => {
        this.user.favorites = this.userService.user.favorites;
        this.user.last_name = this.userService.user.last_name;
        this.user.name = this.userService.user.name;
      }, 1500);
    } else {
      this.logged = false;
    }
  }

  ngOnInit(): void {
    // location.reload();
    // Get the user logged currently
    this.userService.getUserLogged();
  }

  /**
   * This function logs out the current user.
   */
  logout() {
    this.loginService.logout();
  }

}
