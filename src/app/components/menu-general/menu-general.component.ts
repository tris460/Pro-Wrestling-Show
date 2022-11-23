import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {
  rol: string;
  showLogin: boolean = true;

  constructor(private userService: UsersService) {
    this.rol = this.userService.rol;
    if(this.userService.userLogged) this.showLogin = false;
  }

  ngOnInit(): void {
  }

}
