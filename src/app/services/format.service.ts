import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Format } from '../interfaces/format';

@Injectable({
  providedIn: 'root'
})
export class FormatService {

  constructor(private firestore: Firestore) { }

  /**
   * This function stores a new format in the database
   * @param newFormat Format's name to be stored in the database
   * @returns A promise in case the format was saved correctly or not
   */
   addFormat(newFormat: Format) {
    const formatReference = collection(this.firestore, 'format');
    return addDoc(formatReference, newFormat);
  }

  /**
   * This function gets the documents stored in the 'Format' collection.
   * @returns The documents stored in the database
   */
  getFormat(): Observable<Format[]> {
    const formatReference = collection(this.firestore, 'format');
    return collectionData(formatReference, { idField: 'id' }) as Observable<Format[]>;
  }
}
