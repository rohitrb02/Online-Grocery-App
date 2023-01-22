export class Order {
    orderId:number = 0;
    userId:number = 0;
    productList:string = "";
    quantity:number = 0;
    billId:number =0;
    scheduleDelivery:string = "Nil";
    paymentMethod:string = ""; 
    constructor(){
        var date = new Date();
        var day = date.getDate()+2;
        date.setDate(day);
        this.scheduleDelivery = date.toISOString();

    }
}
