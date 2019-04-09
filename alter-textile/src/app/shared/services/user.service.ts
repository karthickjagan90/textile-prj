import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public db:AngularFireDatabase) { }

  save(user:firebase.User){
    this.db.object('/users'+user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
}

