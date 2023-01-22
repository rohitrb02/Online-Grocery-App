import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartProduct } from 'src/app/Models/cart-product';
import { Product } from 'src/app/Models/product';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit{
  productList:Product [] = [];
  cartItems: CartProduct[] = [];
  emptyCart:boolean = false;
  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.cartItems = this.userService.cartItem;
    if(this.userService.cartItem.length===0){
      this.emptyCart = true;
    }
    this.userService.cartItem.forEach(e=>{
      this.userService.getProductById(e.productId).subscribe(res=>{this.productList.push(res);});
    })
  }
  removeItem(productId:any){
    for(let i=0; i<this.userService.cartItem.length; i++){
      if(this.userService.cartItem[i].productId==productId){
        this.userService.RemoveFromCart(i);
        break;
      }
    }
    for(let i=0; i<this.productList.length; i++){
      if(this.productList[i].productId==productId){
        this.productList.splice(i,1);
        break;
      }
    }
  }
  payment(){
    var subTotal = 0;
    for(let i=0; i<this.userService.cartItem.length; i++){
      subTotal += this.userService.cartItem[i].unitQuantity*this.userService.cartItem[i].price;
    }
    console.log(subTotal);
    this.userService.subTotal = subTotal;
    this.router.navigate(["/payment"]);
  }
  increaseQuantity(productId:any){
    for(let i=0; i<this.userService.cartItem.length; i++){
      if(this.userService.cartItem[i].productId==productId){
        var value = this.userService.cartItem[i].unitQuantity;
        value = value +1;
        this.userService.cartItem[i].unitQuantity = value;
      }
    }
  }
  decreaseQuantity(productId:any){
    for(let i=0; i<this.userService.cartItem.length; i++){
      if(this.userService.cartItem[i].productId==productId){
        if(this.userService.cartItem[i].unitQuantity>0){
          this.userService.cartItem[i].unitQuantity -=1;
        }
      }
    }
  }
}
