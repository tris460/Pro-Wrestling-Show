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
   * if it is incorrect it will show a message in the console,
   * it returns the response of the promise when it uploads
   * the image.
   * @param $event The event when someone chooses an image
   * @param folder The folder where the image will be saved
   * @param fileName The name the file will have
   */
  uploadImage($event: any, folder: string, fileName: string) {
    const file = $event.target.files[0]; // Single image to uploaded
    const imgReference = ref(this.storage, `${folder}/${fileName}`); // Image reference to upload it
    let response = uploadBytes(imgReference, file)
    .then(response => { return response })
    .catch(error => {
      console.error(error);
      return error;
    });
    return response;
  }

  /**
   * This function uploads many images without changing the image's name.
   * @param $event Images chosen by the user
   * @param folder Where the images will be saved
   * @returns The response of the promise, it can be successful or error
   */
  uploadManyImages($event: any, folder: string) {
    const files = $event.target.files; // Images to be uploaded
    let response;
    for (let i = 0; i < files.length; i++) {
      let imgReference = ref(this.storage, `${folder}/${files[i].name}`);
      response = uploadBytes(imgReference, files[i])
      .then(response => { return response })
      .catch(error => {
        console.error(error);
        return error;
      });
    }
    return response;
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
