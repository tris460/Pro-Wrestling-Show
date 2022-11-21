import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: Firestore) { }

  /**
   * This function stores a new category in the database
   * @param newCategory Category's name to be stored in the database
   * @returns A promise in case the category was saved correctly or not
   */
  addCategory(newCategory: Category) {
    const categoryReference = collection(this.firestore, 'category');
    return addDoc(categoryReference, newCategory);
  }

  /**
   * This function gets the documents stored in the 'Category' collection.
   * @returns The documents stored in the database
   */
  getCategories(): Observable<Category[]> {
    const categoryReference = collection(this.firestore, 'category');
    return collectionData(categoryReference, { idField: 'id' }) as Observable<Category[]>;
  }
}
