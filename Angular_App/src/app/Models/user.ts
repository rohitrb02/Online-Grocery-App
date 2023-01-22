export class User {
        userId:number=0;
        firstName:string="";
        lastName:string="";
        email:string;
        password:string;
        phoneNo:string;
        address:string="";
        walletPoints:number = 0;
    
        constructor(userId:number,firstname:string,lastname:string,email:string,password:string,phone:string,address:string, walletPoints:number){
            this.userId=userId;
            this.firstName=firstname;
            this.lastName=lastname;
            this.email=email;
            this.password=password;
            this.phoneNo=phone;
            this.address=address;
            this.walletPoints = walletPoints;
        }
    }
    

