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
  previewImage = document.getElementById('previewImage');
  currentImage: any = 'assets/unavailable.png';
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

  /**
   * This function allows you to preview the image you chose.
   * @param $event Selected image in the input
   */
  selectedImage($event: any) {
    let file = $event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event => {
      this.currentImage = reader.result;
    });
  }

  /**
   * This function will call the function to upload the image to
   * firebase storage, that function is located in the product service.
   * @param $event Image to be uploaded
   */
  async uploadImage($event: any) {
    await this.productService.uploadImage($event, 'products');
  }
}
