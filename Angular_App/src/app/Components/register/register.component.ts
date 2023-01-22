import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Route, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm?: FormGroup ;
  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    let user=new User(0,"","","","","","",20);
    this.registerForm = new FormGroup({
      userId:new FormControl(user.userId),
      firstName:new FormControl(user.firstName,Validators.compose([Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      
    ])),
    lastName:new FormControl(user.lastName,Validators.compose([Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ])),
    email:new FormControl(user.email,Validators.compose([Validators.required,
    Validators.email])),
    password:new FormControl(user.password,Validators.compose([Validators.required,
     Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
    ])),
    phoneNo:new FormControl(user.phoneNo,Validators.compose([Validators.required,
    Validators.pattern(/^\d{10,12}$/),
    ])),
    address:new FormControl(user.address,[Validators.required]),
    walletPoints:new FormControl(user.walletPoints)
  });
}
  registerSubmit(user: User){
    var userData = new User(user.userId,user.firstName.toString(),user.lastName.toString(),user.email.toString(),user.password.toString(),user.phoneNo.toString(),user.address.toString(),user.walletPoints);
      var result = "";
      var emailService ={
        email:user.email,
        message: "You have successfully registered.\nThanks for registration.\nHappy Shopping!"
      }
      console.log(userData);
      this.userService.signUpUser(userData).subscribe(res=>{result=res;
        if(result=="Done"){
          alert("Succefully signed up!\n Please login!");
          emailjs.send('service_2p0r3pi', 'template_18irftx',emailService, 'Za16-zsC6WyeWdlT8').then((result: EmailJSResponseStatus) => {
            console.log(result)
          });
          this.router.navigate(['login']);
        }
        else{
          alert('Email id already exist!\nLogin or Sign up with different id');
        }
      });
  }
}
