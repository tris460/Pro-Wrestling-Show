import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  productList: any = [];
  imagesList: any = [];
  constructor(private productService: ProductsService) {
  }

  ngOnInit(): void {
    // Get the products in the DB
    this.productService.getProducts().subscribe(product => {
      this.productList = product;
    });
  }
}
