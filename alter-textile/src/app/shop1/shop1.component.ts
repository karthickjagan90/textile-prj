import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../models/product';
@Component({
  selector: 'app-shop1',
  templateUrl: './shop1.component.html',
  styleUrls: ['./shop1.component.scss']
})
export class Shop1Component implements OnInit {
  @Input('prod') prod: Product;
  constructor() { }

  ngOnInit() {
  }

}
