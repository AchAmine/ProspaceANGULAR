import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-front-navbar',
  templateUrl: './front-navbar.component.html',
  styleUrls: ['./front-navbar.component.css']
})
export class FrontNavbarComponent implements OnInit {

  user:any;
  constructor() { }

  ngOnInit(): void {
  }

}
