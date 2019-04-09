import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { query } from '@angular/core/src/render3/query';

import { map } from 'rxjs/operators';
import { Subscription, Observable } from 'rxjs';
import {Product} from '../../models/product';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit,OnDestroy {
  /*product$;
  constructor(private productService:ProductService){
  this.product$= this.productService.getAll();
  console.log(this.product$);
  }
  ngOnInit() {
  }*/

  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(products => {
        const temp: any[] = products;
        this.products = temp; 
        this.initilizaTable(this.products);
        console.log(this.products);
      });
  }

  private initilizaTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0})
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) { return; }
    this.tableResource.query(params)
    .then(items => this.items = items);
  }

  // tslint:disable-next-line:no-shadowed-variable
  filter(query: string) {
    const filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

    console.log(filteredProducts);
    this.initilizaTable(filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



















/*class
{
  products: Product[];
  subscription: Subscription;
  tableResource: DataTableResource<Product>;
  items: Product[] = [];
  itemCount: number;

  constructor(private productService: ProductService) {
    this.subscription = this.productService.getAll()
    .subscribe(products => {
        const temp: any[] = products;
        this.products = temp; 
        this.initilizaTable(this.products);
        console.log(this.products);
      });
  }

  private initilizaTable(products: Product[]) {
    this.tableResource = new DataTableResource(products);
    this.tableResource.query({ offset: 0})
    .then(items => this.items = items);
    this.tableResource.count()
    .then(count => this.itemCount = count);
  }

  reloadItems(params) {
    if (!this.tableResource) { return; }
    this.tableResource.query(params)
    .then(items => this.items = items);
  }

  tslint:disable-next-line:no-shadowed-variable
  filter(query: string) {
    const filteredProducts = (query) ?
      this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) : 
      this.products;

    console.log(filteredProducts);
    this.initilizaTable(filteredProducts);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

} */
