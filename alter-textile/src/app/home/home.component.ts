import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
images = [1, 2, 3].map(() => `https://picsum.photos/1400/600?random&t=${Math.random()}`);

 
  constructor() { }

  ngOnInit() {
  }

}