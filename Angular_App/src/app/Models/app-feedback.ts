export class AppFeedback {
    appFeedbackId:number=0;
    userId:number=0;
    displayStatus:string="";
    rating:number=0;
    review:string="";
    reviewTime:string= new Date().toISOString();

    constructor(appFeedbackId:number,userId:number,displayStatus:string,rating:number, review:string){
        this.appFeedbackId=appFeedbackId;
        this.userId=userId;
        this.displayStatus=displayStatus;
        this.rating=rating;
        this.review=review;
    }

}
