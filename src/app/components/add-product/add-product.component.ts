import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  date = new Date().toDateString();
  isChecked: boolean = false;
  dataVerified: boolean = false;
  product = {
    image: '',
    name: '',
    price: 0,
    description: '',
    category: [],
    subcategory: [],
    format: [],
    variants: [],
    discount: 0,
    date: this.date,
    visible: true
  };

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  verifyData() {  }

  async uploadImage($event: any) {
    await this.productService.uploadImage($event, 'products');
  }
}
