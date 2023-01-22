import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  productList:Product[] = []
  constructor(private activatedRoute:ActivatedRoute, private userService:UserService){ }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(paramsData => {
      let id = paramsData["id"];
      this.userService.getProductByCategory(id).subscribe(res=>{this.productList=res});
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

