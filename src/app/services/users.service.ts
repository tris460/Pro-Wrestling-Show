import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private firestore: Firestore) { }

  // Generate the BD CRUD

  /**
   * Save a new user in the DB (this.firestore)
   * @param newUser Information of the new user based in the 'User' interface
   * @returns Save the new user in the DB
   */
  createUser(newUser: User) {
    const userReference = collection(this.firestore, 'user');
    return addDoc(userReference, newUser);
  }

}
