import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFeedback } from 'src/app/Models/app-feedback';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  //  now = new Date();

  currentrate:number = 0;
  id:number = 0;
  appFeedback:AppFeedback=new AppFeedback(0,0,"No",0,"");
  constructor(private userService:UserService,private router:Router){}




  ngOnInit(): void {

    this.currentrate=0;
    var id = localStorage.getItem('userId');
    this.id = id as unknown as number;

  }
  Feedback(){  
    let data = new AppFeedback(this.appFeedback.appFeedbackId,this.id as number,this.appFeedback.displayStatus,this.appFeedback.rating,this.appFeedback.review);
    console.log(data);
    this.userService.appFeedback(data).subscribe(res=>{
      alert("Thank you for rating us!");
      this.router.navigate(["/home2"]);});
  }
  

 }
