export class Product {
    productId:number;
    categoryId:string;
    name:string;
    price:string;
    unitQuantity:string;
    quantity:string;
    image:string;
    countryOfOrigin:string;
    discription:string;
    ingredients:string;
    approvalStatus:string;
    discount:string;
    approval_remark:string;
    vendorId:string;
    constructor(prodId:number,categoryId:string,name:string,price:string,unitQuantity:string,quantity:string,image:string,countryOfOrigin:string,discription:string,ingredients:string,approvalStatus:string,discount:string,approval_remark:string,vendorId:string){
        this.productId = prodId;
        this.categoryId = categoryId;
        this.name = name;
        this.price = price;
        this.unitQuantity = unitQuantity;
        this.quantity =quantity;
        this.image = image;
        this.countryOfOrigin = countryOfOrigin;
        this.discount = discount;
        this.discription = discription;
        this.ingredients = ingredients;
        this.approvalStatus = approvalStatus;
        this.approval_remark = approval_remark;
        this.vendorId = vendorId;
    }
}
