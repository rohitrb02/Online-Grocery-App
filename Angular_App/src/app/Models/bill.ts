export class Bill {
    billId:number = 0;
    orderId:number = 0;
    subTotal:number = 0;
    deliveryCharge:number = 0;
    promoApplied:number = 0;
    grandTotal:number = 0;
    paymentMethod:string = "";
    paymentStatus:string = "Pending";
}
