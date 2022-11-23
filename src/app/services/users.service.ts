import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userLogged: any = localStorage.getItem('idUserLogged');
  rol: string = '';
  user: any = {};

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

  /**
   * This function gets the logged users in the 'user' collection.
   * @returns an array with the documents in the collection 'user'
   */
  getUsers(): Observable<User[]> {
    const productsReference = collection(this.firestore, 'user');
    return collectionData(productsReference, { idField: 'id' }) as Observable<User[]>;
  }

  /**
   * With this function you can get the current user and it will
   * be stored in the 'user' variable, to be accessed from other functions.
   */
  getUserLogged() {
    let currentUser;
    this.getUsers().subscribe(user => {
      currentUser = user.filter(u => {
        return u.id_auth == this.userLogged;
      });
      if(currentUser.length > 0) {
        this.user = currentUser[0];
        this.rol = currentUser[0].rol;
      }
    });
  }
}
