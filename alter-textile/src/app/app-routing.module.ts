import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { TemplateComponent } from './template/template.component';
import { Checkout1DeliveryComponent } from './checkout1-delivery/checkout1-delivery.component';
import {Checkout1AddressComponent} from './checkout1-address/checkout1-address.component';
import {Checkout1PaymentComponent} from './checkout1-payment/checkout1-payment.component';
import {Checkout1ReviewComponent} from './checkout1-review/checkout1-review.component';
import {Checkout1ConfirmationComponent} from './checkout1-confirmation/checkout1-confirmation.component'
import { ContactComponent } from './contact/contact.component';
import { CustomerAccountComponent } from './customer-account/customer-account.component';
import { CustomerAddressesComponent } from './customer-addresses/customer-addresses.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CustomerOrdersComponent } from './customer-orders/customer-orders.component';
import { DetailComponent } from './detail/detail.component';
import { Detail2Component } from './detail2/detail2.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { ManageProductsComponent } from './admin/manage-products/manage-products.component';
import { ProductsFormComponent } from './admin/products-form/products-form.component';

import { ProductsComponent } from './products/products.component';
import { ProductFilterComponent } from './product-filter/product-filter.component';


import { Shop1Component } from './shop1/shop1.component';
import { ProductQuantityComponent } from './shared/product-quantity/product-quantity.component';



const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'login',component:LoginComponent},
  
  {path:'shop',component:ShopComponent},
  {path:'shop1',component:Shop1Component},
  {path:'template',component:TemplateComponent},
  {path:'checkout1',component:Checkout1AddressComponent},
  {path:'checkout2',component:Checkout1DeliveryComponent},
  {path:'checkout3',component:Checkout1PaymentComponent},
  {path:'checkout4',component:Checkout1ReviewComponent},
  {path:'checkout5',component:Checkout1ConfirmationComponent},
  {path:'contact',component:ContactComponent},
  {path:'customer/account',component:CustomerAccountComponent},
  {path:'customer/addresses',component:CustomerAddressesComponent},
  {path:'customer/login',component:CustomerLoginComponent},
  {path:'customer/order',component:CustomerOrderComponent},
  {path:'customer/orders',component:CustomerOrdersComponent},
  {path:'detail',component:DetailComponent},
  {path:'detail2',component:Detail2Component},
  {path:'category',component:CategoryComponent},

  { path:'manage/products/new',component:ProductsFormComponent },
  { path:'manage/products/:id', component:ProductsFormComponent},
  { path:'manage/products', component:ManageProductsComponent },
  { path:'manage/orders', component:ManageOrdersComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  export const routingComponents=[HomeComponent,ShopComponent,TemplateComponent,
    Checkout1AddressComponent,Checkout1DeliveryComponent,
    Checkout1PaymentComponent,Checkout1ReviewComponent,
    Checkout1ConfirmationComponent,ContactComponent,Detail2Component,DetailComponent,CustomerAccountComponent,
    CustomerAddressesComponent,CustomerLoginComponent,CustomerOrderComponent,
    CustomerOrdersComponent,CategoryComponent,LoginComponent, ManageOrdersComponent,
    ManageProductsComponent,
    ProductsFormComponent,
    ProductsComponent,
    Shop1Component,
   ];

