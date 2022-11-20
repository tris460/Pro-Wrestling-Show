import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore, private storage: Storage) { }

  /**
   * This function saves a new product in the data base.
   * @param newProduct New object's data to be saved
   * @returns A promise with the object to be saved in the database
   */
  saveProduct(newProduct: Product) {
    const productReference = collection(this.firestore, 'product');
    return addDoc(productReference, newProduct);
  }

  /**
   * This function uploads an image in the folder assigned,
   * if it is incorrect it will show a message in the console.
   * @param $event The event when someone chooses an image
   * @param folder The folder where the image will be saved
   */
  uploadImage($event: any, folder: string) {
    const file = $event.target.files[0]; // Single image to upload
    const imgReference = ref(this.storage, `${folder}/${file.name}`); // Image reference to upload it
    uploadBytes(imgReference, file)
    .then(response => {})
    .catch(error => {
      console.error(error);
    });
  }

 /**
  * This function will give you an array with the urls of the
  * images, if something is wrong, you will get an error message.
  * @param folder Folder's name where you want to get the images
  */
  getImages(folder: string) {
    const imagesReference = ref(this.storage, folder);
    let imagesURL: Array<string> = []; // Where the URLs will be stored
    listAll(imagesReference) // Get all the images stored in the database
    .then(async response => {
      imagesURL = [];
      for(let item of response.items) {
        const url = await getDownloadURL(item);
        imagesURL.push(url);
      }
      return imagesURL;
    })
    .catch(error => console.error(error));
  }
}
