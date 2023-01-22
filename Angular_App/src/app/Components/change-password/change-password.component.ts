import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn, ControlContainer } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/Models/login-credentials';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor(private userService:UserService, private router:Router){}
  reactiveForm?:FormGroup;
  credential :LoginCredentials = new LoginCredentials()
  user:User = new User(0,"","","","","","",20);
  ngOnInit(): void {
    this.userService.getUserDetail(localStorage.getItem('userId')).subscribe(res=>{
    this.user = res;
    this.reactiveForm = new FormGroup({
      password:new FormControl(this.credential.username,Validators.compose([Validators.required,
       Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)])),
      confirmPassword:new FormControl(this.credential.password,Validators.compose([Validators.required])),
      });
    });   
  }
  isMatchingPwd(control: AbstractControl){

    if(control.value== this.credential.username){
      return {confirmPassword:false};
    }else{
      return {confirmPassword:false};
    }


  }
  
  onSubmit(data:any){
    var userData = new User(this.user.userId,this.user.firstName.toString(),this.user.lastName.toString(),this.user.email.toString(),data.password.toString(),this.user.phoneNo.toString(),this.user.address.toString(),this.user.walletPoints);
    this.userService.changePassword(userData).subscribe(res=>{
      alert("Password changed successfully!");
      this.router.navigate(['home2']);
    })
  }

  
}