import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {
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
