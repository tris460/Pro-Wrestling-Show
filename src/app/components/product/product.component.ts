import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public idProduct: string | null = '';
  productToShow = {
    category: [],
    description: '',
    discount: 0,
    format: [],
    image: '../../assets/unavailable.png',
    name: '',
    price: 0,
    variants: []
  };
  productInfo: any;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {
    // Read the param 'id' in the url
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.idProduct = params.get('id');
    });
    this.getData();
  }

  ngOnInit(): void { }

  async getData() {
    const P = this.productToShow;
    this.productInfo = await this.productService.getOneProduct(this.idProduct);
    const product = this.productInfo._document.data.value.mapValue.fields;
    setTimeout(() => {
      P.category = product.category.arrayValue.values;
      P.description = product.description.stringValue;
      P.discount = product.discount.integerValue;
      P.format = product.format.arrayValue.values;
      P.image = product.image.stringValue;
      P.name = product.name.stringValue;
      P.price = product.price.integerValue;
      P.variants = product.variants.arrayValue.value;
    }, 1000);
  }
}
