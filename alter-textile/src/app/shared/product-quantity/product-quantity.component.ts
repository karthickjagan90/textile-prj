import { Component, OnInit,Input } from '@angular/core';
import {Product} from '../../models/product';
@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.scss']
})
export class ProductQuantityComponent implements OnInit {
  @Input('product') product: Product;
  constructor() { }

  ngOnInit() {
  }

}
