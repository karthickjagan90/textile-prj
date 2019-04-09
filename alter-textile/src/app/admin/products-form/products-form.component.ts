import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../shared/services/category.service';
import { Observable, observable,  } from 'rxjs';

import { ProductService } from '../../shared/services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.scss']
})
export class ProductsFormComponent implements OnInit {
  categories$:Observable<any[]>;
  product={};
  id;
  constructor(private categoryService:CategoryService,
    private productService:ProductService,
    private router:Router,
    private route:ActivatedRoute) { 
      this.categories$=this.categoryService.getCategories();
     
      this.id = this.route.snapshot.paramMap.get('id');

      if (this.id) {
        this.productService.get(this.id).valueChanges().pipe(take(1))
        .subscribe(p => this.product = p);
      }
      
  }
  
  /*items:Observable<any[]>;
 
  constructor(public db: AngularFireDatabase) {
    this.items = db.list('/categories').valueChanges();
  }*/

  

  save(product){
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
      this.productService.create(product);
    }
    
    this.router.navigate(['/manage/products']);
  }
  delete() {
    if (!confirm('Are you sure you want to delete this product?')) { return; } 

    console.log(this.id);
    this.productService.detele(this.id);
    this.router.navigate(['/manage/products']);    
  }

  ngOnInit() {
  }
}
