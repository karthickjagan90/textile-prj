import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private db:AngularFireDatabase) { }

  detail(products){
    return  this.db.list('/contact').push(products);
   }
}
