import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
brand = 'Doma';
brandimg = './assets/img/doma.svg';
nav1 = 'Portfolio';
nav2 = 'Contact';
nav3 = 'About';

  constructor() { }

  ngOnInit() {
  }

}
