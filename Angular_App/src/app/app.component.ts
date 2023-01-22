import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logedIn:boolean = false;
  constructor(private router:Router){}
  ngOnInit(): void {
    if(localStorage.getItem('result') == "true"){
      this.logedIn = true;
    }
    
  }
  title = 'Grocery_Mania';
}
