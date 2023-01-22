import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrls: ['./welcomepage.component.css']
})
export class WelcomepageComponent implements OnInit{
  lstcategory:Category[]=[];
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getAllCategory().subscribe(data=>{
      this.lstcategory=data;
    })
  }

 }


  


