import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QueryClass } from 'src/app/Models/query';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit{
  queryForm?:FormGroup;
  constructor(private userService:UserService, private router:Router){}
  ngOnInit(): void {
    this.queryForm = new FormGroup({
      queryDiscription: new FormControl("",Validators.required)
    })
  }

  submitCall(data:any){
    var queryRecord = new QueryClass();
    queryRecord.queryDiscription = data.queryDiscription;
    var queryto = localStorage.getItem('QueryTo')?.toString();
    queryRecord.queryTo = queryto;
    queryRecord.queryUserOrVedId = localStorage.getItem('userId') as unknown as number;
    this.userService.addQuery(queryRecord).subscribe(res=>{
      alert("Your Query will be replied soon by mail!");
      this.router.navigate(['/home2']);
    })
  }
}
