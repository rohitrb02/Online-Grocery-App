export class ProductFeedback {
    feedbackId:number=0;
    userId:number=0;
    productId:number=0;
    rating:number=0;
    review:string="";
    reviewTime:string=new Date().toISOString();
}
