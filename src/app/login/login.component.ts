import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { Login } from '../login';
import { LoginResponse } from '../login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup=new FormGroup({
    first:new FormControl('',
    [Validators.required,Validators.minLength(10)]),

    second: new FormControl('',
    [Validators.required,Validators.minLength(8), Validators.maxLength(20)])

  })



  login:Login=new Login();

  loginResponse:LoginResponse=new LoginResponse(); 

  status:any=[];
  constructor(private busService:BusServiceService,private http:HttpClient, private router:Router) {
     
    this.status=sessionStorage.getItem('loginStatus');
    
   }

   

  ngOnInit(): void {
  }

  LoginUser(){
    this.http.post<any>("http://bus-booking-app.us-east-1.elasticbeanstalk.com/login",this.login).subscribe(
      (data)=>{
        this.loginResponse=data;
        console.log(this.loginResponse);
        if(this.loginResponse.message==true){
            console.log("Login Status is "+this.loginResponse.message);

            // session management 
            sessionStorage.setItem('mobile',this.loginResponse.mobile);
            sessionStorage.setItem('loginStatus','true');

            this.router.navigate(['bus']);            
             console.log("navigate to search bus ");
        }


      }
      
    )
  }


  facebooklogin(){
    console.log("facebook login request begin");
    this.http.get("http://localhost:9090/user").subscribe(
      (data)=>{
        console.log("facebook login ");
              console.log(data);
      }
    )
  }


  onSubmit(){
    this.LoginUser();
    console.log(this.login);
    
    
  } 


  get f(){
    return this.form.controls;
  }
}
