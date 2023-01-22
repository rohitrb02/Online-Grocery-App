import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'shop-now',
  templateUrl: './shop-now.component.html',
  styleUrls: ['./shop-now.component.css']
})
export class ShopNowComponent implements OnInit{
  categoryList:Category[] = [];
  showCategory = true;
  constructor(private useService:UserService) {}
  ngOnInit(): void {
    this.useService.getAllCategories().subscribe(res=>{this.categoryList=res;});
  }
  hideCategory(){
    this.showCategory=false;
  }
}
