import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormatService } from 'src/app/services/format.service';
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
  variants: Array<any> = [];
  fileUploadedURL: string = '';
  categoryList: any = [];
  formatList: any = [];
  categorySelected: Array<string> = [];
  formatSelected: Array<string> = [];
  folder = '';
  product = {
    image: '',
    name: '',
    description: '',
    price: 0,
    discount: 0,
    published_date: this.date,
    category: this.categorySelected,
    format: this.formatSelected,
    variants: this.variants,
    visible: true
  };

  constructor(private productService: ProductsService, private categoryService: CategoryService, private formatService: FormatService) { }

  ngOnInit(): void {
    // Get the categories in the DB
    this.categoryService.getCategories().subscribe(categories => {
      this.categoryList = categories;
    });
    // Get the formats in the DB
    this.formatService.getFormat().subscribe(format => {
      this.formatList = format;
    })
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
    } else {
      p.image = p.name.replace(/ /g, '');
      this.saveProduct();
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
   * This function saves the images selected in a variable to be used
   * subsequently.
   * @param $event Selected image in the input
   */
  selectedManyImages($event: any) {
    this.variants = $event;
  }

  /**
   * This function will call the function to upload the image to
   * firebase storage, that function is located in the product service.
   * @param $event Image to be uploaded
   * @param fileName File's name to be stored
   */
  async uploadImage($event: any, fileName: string) {
    const response = await this.productService.uploadImage($event, 'products', fileName);
    this.product.image = response;
  }

  /**
   * This function calls other function to upload the images in the database.
   * @param $event Image's data to be updated in the database
   */
  async uploadManyImages($event: any) {
    this.folder = `variants/products_${this.product.image}`;
    const response = await this.productService.uploadManyImages($event, this.folder);
    this.product.variants = response;
  }

  /**
   * This function uploads the image to the bucket in Firebase and
   * save the product data.
   */
  async saveProduct() {
    await this.uploadManyImages(this.variants);
    await this.uploadImage(this.file, this.product.image);
    await this.productService.saveProduct(this.product)
    await alert("Your product has been stored successfully :)");
    await this.clearFields();
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

  /**
   * This function help us to know which options the user selected, those options will
   * be stored in an array.
   * @param index Index of the element selected by the user, is the index of the arrayList
   * @param arrayList Array whit all the options the user can select
   * @param arraySelected Array with the items the user selected
   */
  addToArray(index: number, arrayList: Array<any>, arraySelected: Array<any>) {
    let element = arrayList[index].name;
    let exist = false;
    // Check if the element selected exists in the array
    arraySelected.filter(e => {
      e == element ? exist = true : false;
    })
    if(exist) {
      // If the element is already in the array, delete it, if not,
      // add it to the array.
      arraySelected = arraySelected.filter(e => {
        if(e !== element) {
          return e;
        } else {
          return;
        }
      })
    } else {
      arraySelected.push(element);
    }
  }
}
