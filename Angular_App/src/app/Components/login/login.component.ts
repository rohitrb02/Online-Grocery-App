import { getLocaleId } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/Models/login-credentials';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm?: FormGroup;
  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
    let credentials = new LoginCredentials();
    this.loginForm = new FormGroup({
      username:new FormControl(credentials.username),
      password: new FormControl(credentials.password)
    });
    }

    loginCall(credentials:LoginCredentials){
      this.userService.loginUser(credentials).subscribe(res=>{
        if(res.result){
        localStorage.setItem('token',res.token);
        this.getId(credentials.username);
        localStorage.setItem('result',res.result.toString());
        location.href="/home2";
        
        }
        else{
          alert('Invalid Username or PassWord');
        }
      })
    }
    getId(email:string){
      this.userService.GetUserId(email).subscribe(res=>{
        localStorage.setItem('userId',res.toString());
      })
    }
  }
