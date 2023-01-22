import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  productList:Product[] = [];
  searchValue = "";
  constructor(private activatedRoute: ActivatedRoute, private userService:UserService) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramData=>{
      let search = paramData["searchValue"];
      this.searchValue  = search;
      this,this.userService.getAllProducts().subscribe(res=>{
        this.productList=res;
        this.productList = this.productList.filter(value=>{
          if(value.name.toLowerCase().includes(search.toLowerCase())){
            return value;
          }
          else{
            return null;
          }
        });
      })
    })
  }

  CheckPrice(discount:string,price:string){
    let pri = price as unknown as number;
    let dis = discount as unknown as number;
    return pri -(dis*pri)/100;
  }
  AddToCartCall(prod:Product, price:number){
    this.userService.AddToCart(prod,price);
    alert("Added to cart");
  }
}
