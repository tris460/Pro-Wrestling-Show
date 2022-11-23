import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.css']
})
export class MenuHomeComponent implements OnInit {
  rol: string;
  showLogin: boolean = true;

  constructor(private userService: UsersService) {
    this.rol = this.userService.rol;
    if(this.userService.userLogged) this.showLogin = false;
  }

  ngOnInit(): void {
  }

}
