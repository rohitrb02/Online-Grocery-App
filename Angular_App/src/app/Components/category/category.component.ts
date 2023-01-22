import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  allCategory:Category[]=[];
  constructor(private userService:UserService){}
  ngOnInit(): void{

  

    this.userService.getAllCategory().subscribe(data=>{
      this.allCategory=data;
      console.log(this.allCategory);
    })



  }
}
  

  


