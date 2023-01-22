import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';

import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userDetail:User = new User(0,"","","","","","",0);
  constructor(private userService:UserService){}
  ngOnInit(): void {
    this.userService.getUserDetail(localStorage.getItem('userId')).subscribe(res=>{
      this.userDetail = res;
    })
  } 
}
