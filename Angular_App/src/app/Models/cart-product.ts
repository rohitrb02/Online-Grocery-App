export class CartProduct {
    productId:number = 0;
    unitQuantity:number=0;
    price:number = 0;
    constructor(productId:number, quantity:number, price:number){
        this.productId = productId;
        this.unitQuantity = quantity;
        this.price = price;
    }

}
