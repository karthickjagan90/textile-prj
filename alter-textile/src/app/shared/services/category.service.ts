import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 
 
  constructor(public db: AngularFireDatabase) {}
  /*getCategories(){
     this.items= this.db.list('/categories').valueChanges();
    return this.items;
    }*/

    getCategories(){
      return this.db.list('/categories', ref => (ref.orderByChild('name')))
    .snapshotChanges().pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
     
    );
    
  }
    }
  


