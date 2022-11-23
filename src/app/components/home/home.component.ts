import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any = [];
  userLogged: string = localStorage.getItem('idUserLogged') || '';

  constructor(private productService: ProductsService, private userService: UsersService) {

  }

  ngOnInit(): void {
    // Get the products in the DB
    this.productService.getProducts().subscribe(product => {
      this.productList = product;
    });
    // Get the users in the DB
    this.userService.getUsers().subscribe(user => {
      this.userService.userLogged = user.filter(u => {
        return u.id_auth == this.userLogged;
      });
      this.userService.rol = this.userService.userLogged[0].rol;
    });
  }

}
