import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    // Get the products in the DB
    this.productService.getProducts().subscribe(product => {
      this.productList = product;
    });
  }

}
