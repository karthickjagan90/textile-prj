import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Product } from '../models/product';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../shared/services/category.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit,OnDestroy{
  products: Product[] = [];
  
  filteredProducts: Product[];
  subscription: Subscription;
  category:string;
  categories$;
  constructor(private productService:ProductService,private categoryService:CategoryService,private route:ActivatedRoute){
  

    this.categories$ = categoryService.getCategories();

    /*route.queryParamMap.subscribe(params=>{
      this.category=params.get('category');
    })*/
  }
  async ngOnInit(){
    this.productService.getAll()
    .pipe(switchMap( products => {
      let temp: any[];
      temp = products;
      this.products = temp; 
      return this.route.queryParamMap;
      }))
      .subscribe(params => {
        this.category = params.get('category');
       
        this.filteredProducts = (this.category) ?
          this.products.filter(p => p.category === this.category) : 
          this.products;
      }); 
    
    }
    ngOnDestroy() {
      /*this.subscription.unsubscribe();*/
    }
}
/*export class ProductsComponent implements OnInit,OnDestroy {

  products: Product[] = [];
  filteredProducts: Product[];
  subscription: Subscription;
  category: string;

  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
   
  ) {}
async ngOnInit(){
  this.productService.getAll()
  .pipe(switchMap( products => {
    let temp: any[];
    temp = products;
    this.products = temp; 
    return this.route.queryParamMap;
    }))
    .subscribe(params => {
      this.category = params.get('category');

      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) : 
        this.products;
    }); 
  
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}*/
