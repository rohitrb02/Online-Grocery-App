import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit{
  username:string="";
  searchForm?:FormGroup;
  constructor(private userService:UserService,private router:Router){}
  ngOnInit(): void {
    this.userService.getUserDetail(localStorage.getItem('userId')).subscribe(res=>{
      this.username=res.firstName+" "+res.lastName;
      console.log(this.username);
      this.searchForm = new FormGroup({
        search: new FormControl("")
      });
    });
  }
  queryCall(value:number){
    if(value==1){
      localStorage.setItem('QueryTo','Admin');
    }
    else{
      localStorage.setItem('QueryTo','Vendor');
    }
  }
  logoutCall(){
    localStorage.clear();
    localStorage.setItem('result','false');
  }
  // searchSubmit(value:string){
  //   console.log(value);
  //   this.router.navigate(["search",value]);
  //}
}
