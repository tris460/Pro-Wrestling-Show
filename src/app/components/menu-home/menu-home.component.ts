import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  rol: string = 'user';
  showLogin: boolean = true;

  constructor(private userService: UsersService) {
    if(this.userService.user) this.showLogin = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.rol = this.userService.rol;
    }, 1000);
  }

}
