import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';

import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule,NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
/*import {AngularFireAuthModule} from 'angularfire2/auth';*/


import {AngularFireDatabaseModule} from '@angular/fire/database';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DataTableModule } from 'angular5-data-table';

import { DocsComponent } from './docs/docs.component';

import { FooterComponent } from './footer/footer.component';
import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';
import { CategoryService } from './shared/services/category.service';
import { ProductService } from './shared/services/product.service';
import {ContactService} from './shared/services/contact.service';






/*import {AdminAuthGuard} from './admin-auth-guard.service';*/





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    DocsComponent,
    FooterComponent,

   
  
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTableModule,
    NgbModule,NgbCollapseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    FormsModule,
    CustomFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService,UserService,CategoryService,ProductService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
