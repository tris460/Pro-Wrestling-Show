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
  dataVerified: boolean = true;
  currentImage: any = 'assets/unavailable.png';
  file: any = '';
  fileUploadedURL: string = '';
  product = {
    image: '',
    name: '',
    description: '',
    price: 0,
    discount: 0,
    published_date: this.date,
    category: [],
    format: [],
    variants: [],
    visible: true
  };

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  /**
   * This function verifies if the form is filled correctly, if it is not,
   * it will show the alerts in the form, else, it will call the function
   * to save the data in the database.
   */
  verifyData() {
    const p = this.product;
    if (p.name === '' ||
    p.price <= 0 ||
    p.description === '' ||
    p.category.length === 0 ||
    p.format.length === 0 ) {
      this.dataVerified = false;
      p.image = p.name.replace(/ /g, '');
      this.saveProduct();
    } else {
      this.dataVerified = true;
    }
  }

  /**
   * This function allows you to preview the image you chose.
   * @param $event Selected image in the input
   */
  selectedImage($event: any) {
    this.file = $event;
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
   * @param fileName File's name to be stored
   */
  async uploadImage($event: any, fileName: string) {
    await this.productService.uploadImage($event, 'products', fileName);
  }

  /**
   * This function uploads the image to the bucket in Firebase and
   * save the product data.
   */
  saveProduct() {
    this.uploadImage(this.file, this.product.image);
    this.productService.saveProduct(this.product)
    .then(response => {
      alert("Your product has been stored successfully :)");
      this.clearFields();
     })
    .catch(error => console.error(error))
  }

  /**
   * This function allows you to clear the fields to save a new product
   */
  clearFields() {
    this.product = {
      image: '',
      name: '',
      description: '',
      price: 0,
      discount: 0,
      published_date: this.date,
      category: [],
      format: [],
      variants: [],
      visible: true
    };
    this.currentImage = 'assets/unavailable.png';
  }
}
