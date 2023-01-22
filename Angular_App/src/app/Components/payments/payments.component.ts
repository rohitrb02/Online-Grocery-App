import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Bill } from 'src/app/Models/bill';
import { Order } from 'src/app/Models/order';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  constructor(private userService:UserService){}
  subTotal:number = 0;
  deliveryCharge:number = 50;
  isDisplayed: boolean = false;
  walletPoints: number =0;
  usedWalletPoints:number = 0;
  maxLimit:number =10;
  payment:boolean = false;
  total:number = this.subTotal+this.deliveryCharge - this.usedWalletPoints;
  paymentForm?: FormGroup;
  ngOnInit(): void {
    
    this.userService.getUserDetail(localStorage.getItem('userId')).subscribe(data=>{
      this.walletPoints = data.walletPoints;
      
      this.subTotal =  this.userService.subTotal;
      this.paymentForm = new FormGroup({
        scheduleDelevery : new FormControl(""),
        paymentMethod: new FormControl("",Validators.required),
        useWalletPoints: new FormControl(0,Validators.max(10))
      });
      this.total = this.subTotal+this.deliveryCharge - this.usedWalletPoints;
      if(this.walletPoints<=10){
        this.maxLimit = this.walletPoints
      }
    });
  }
   alerto() {
    alert("Payment Success");
  }
  walletUsed(data:any){
    console.log(data);
    this.usedWalletPoints = data as unknown as number;
    this.total = this.subTotal+this.deliveryCharge - this.usedWalletPoints;

  }
  proceedClick(data:any){
    console.log(data);
    var orderId = 0;
    var billId = 0;
    var productList = "";
    var billRecord = new Bill();
    for(let i=0; i<this.userService.cartItem.length; i++){
      productList += this.userService.cartItem[i].productId.toString()+"/";
    }
    var orderRecord = new Order();
    orderRecord.userId = localStorage.getItem('userId') as unknown as number;
    orderRecord.productList = productList;
    orderRecord.paymentMethod = data.paymentMethod;
    orderRecord.quantity = this.userService.cartItem.length;
    billRecord.deliveryCharge = this.deliveryCharge;
    billRecord.subTotal = this.subTotal;
    billRecord.grandTotal = this.total;
    billRecord.paymentMethod = data.paymentMethod;
    billRecord.promoApplied = data.useWalletPoints;
    orderRecord.scheduleDelivery = data.scheduleDelevery==""? orderRecord.scheduleDelivery:data.scheduleDelevery;
    console.log(orderRecord);
    this.userService.placeOrder(orderRecord).subscribe(res=>{
      this.userService.getAllOrders(localStorage.getItem('userId')).subscribe(res=>{
        res.filter(element=>{
          orderId = element.orderId>orderId?element.orderId:orderId;
        })
        billRecord.orderId = orderId;
        this.userService.generateBill(billRecord).subscribe(res=>{
          this.userService.getBillByOrderId(orderId).subscribe(res=>{
            billId = res.billId as unknown as number;
            this.userService.updateBillId(orderId as number,billId as unknown as number).subscribe(res=>{
              this.usedWalletPoints -= 2*this.usedWalletPoints;
              this.userService.updateWallet(localStorage.getItem('userId') as unknown as number,this.usedWalletPoints).subscribe(res=>{
                this.payment = true;
                //email to user after placing order

                // var email = "";
                // this.userService.getUserDetail(localStorage.getItem('userId')).subscribe(res=>{email=res.email});
                // var params = {
                //   email:email,
                //   message:"Your Order Placed Successfully!\nHere are the Details:\nCart Bill:"+billRecord.subTotal+"\nDelivery Charge: "+billRecord.deliveryCharge+"\nWallet points used: "+billRecord.promoApplied+"\nTotal amount :"+billRecord.grandTotal+"\nPayment Method:"+billRecord.paymentMethod
                // }
                // emailjs.send('service_2p0r3pi', 'template_6squkzr',params, 'Za16-zsC6WyeWdlT8');
              })
            })
          })
        })
      })
    })
  }
  
  showHideText(boolValue:boolean){
      this.isDisplayed = boolValue;
      if(boolValue){
        this.deliveryCharge = 80;
        this.total = this.subTotal+this.deliveryCharge - this.usedWalletPoints;
      }
      else{
        this.deliveryCharge = 50;
        this.total = this.subTotal+this.deliveryCharge - this.usedWalletPoints;
      }
  }
}
