import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductFeedback } from 'src/app/Models/product-feedback';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'previous-order-product',
  templateUrl: './previous-order-product.component.html',
  styleUrls: ['./previous-order-product.component.css']
})
export class PreviousOrderProductComponent {
  @Input() orderId: number = 0;
  currentrate: number = 0;
  order: any;
  allProduct: any[] = [];
  buttonOff:boolean = false;
  productFeedback: ProductFeedback = new ProductFeedback();
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    //console.log(this.orderId)
    this.currentrate = 0;
    this.userService.getOrderByOrderId(this.orderId).subscribe(data => {
      this.order = data;

      let productlist = this.order.productList.split("/");
      productlist.pop();
      console.log('lst:', productlist);

      

      this.callFn(productlist);
      
    });
    // this.Feedback();
  }

  Feedback(productId:number){
    this.productFeedback.productId = productId as unknown as number;
    this.productFeedback.userId = localStorage.getItem('userId') as unknown as number;
    console.log(this.productFeedback);
    this.userService.reviewProduct(this.productFeedback).subscribe(res=>{
      alert("Reviewed successfully!");
      this.buttonOff = true;
    })
  }
  
 async callFn(productlist: Product[]){
    for (const it2 of productlist) {
      this.userService.getProductById(Number(it2)).subscribe(data => {
        console.log('data:', data);
        this.allProduct.push(data);
      });
    }
  }
}
