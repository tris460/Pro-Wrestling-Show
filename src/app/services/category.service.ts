import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private firestore: Firestore) { }

  addCategory(newCategory: Category) {
    const categoryReference = collection(this.firestore, 'category');
    return addDoc(categoryReference, newCategory);
  }

  getCategories(): Observable<Category[]> {
    const categoryReference = collection(this.firestore, 'category');
    return collectionData(categoryReference, { idField: 'id' }) as Observable<Category[]>;
  }
}
