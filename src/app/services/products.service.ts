import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private firestore: Firestore) { }

  saveProduct(newProduct: Product) {
    const productReference = collection(this.firestore, 'product');
    return addDoc(productReference, newProduct);
  }
}
