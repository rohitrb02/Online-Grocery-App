import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userDetail:User = new User(0,"","","","","","",0);
  editForm?:FormGroup;
  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
    var userData = new User(0,"","","","","","",0);
    this.userService.getUserDetail(localStorage.getItem('userId')).subscribe(res=>{
      this.userDetail = res;
      userData = res;
    
    this.editForm = new FormGroup({
      userId: new FormControl(userData.userId),
      firstName: new FormControl(userData.firstName),
      lastName: new FormControl(userData.lastName),
      email: new FormControl(userData.email),
      phoneNo : new FormControl(userData.phoneNo,Validators.compose([Validators.required,
        Validators.pattern(/^\d{10,12}$/)])),
      password: new FormControl(userData.password),
      address : new FormControl(userData.address,[Validators.required]),
      walletPoints :new FormControl(userData.walletPoints)
    })
  })
  }
  editCall(user:User){
    var userData = new User(user.userId,user.firstName.toString(),user.lastName.toString(),user.email.toString(),user.password.toString(),user.phoneNo.toString(),user.address.toString(),user.walletPoints);
    console.log(userData);
    this.userService.editProfile(userData).subscribe(res=>{
      alert("Edited Successfully");
      this.router.navigate(['home2']);
    });
    

    
  }
}
