import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AppUser } from '../models/app-user';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public auth:AuthService) { }
  
  ngOnInit(){}

logout(){
  this.auth.logout();
 }

 
}