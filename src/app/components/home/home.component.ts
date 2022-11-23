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

  constructor(private productService: ProductsService, private userService: UsersService) { }

  ngOnInit(): void {
    // Get the products in the DB
    this.productService.getProducts().subscribe(product => {
      this.productList = product;
    });
    // Get the logged user
    this.userService.getUserLogged();
  }

}
