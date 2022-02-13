import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusServiceService } from '../bus-service.service';
import { Otprequestmodel } from '../otprequestmodel';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-otp-request',
  templateUrl: './otp-request.component.html',
  styleUrls: ['./otp-request.component.css']
})
export class OtpRequestComponent implements OnInit {

  constructor(private busService:BusServiceService,private http:HttpClient, private route:Router) { }

  otpreq:Otprequestmodel=new Otprequestmodel();

  ngOnInit(): void {

    this.busService.getUserInfo().subscribe(
      (data)=>{
        this.otpreq.deviceInfo=data;
      }

    );
  }


  forgetReq(){


    this.otpreq.deviceId=uuidv4();

    

    this.otpreq.otpType='ForgetPassword';
    console.log(this.otpreq.deviceInfo);
    console.log('otpRequest Model is ');
    console.log(this.otpreq);
    this.http.post<any>("http://localhost:9090/v1/forgetpassword/sent/otp",this.otpreq).subscribe(
      (data)=>{
  
        console.log(data);

        if(data.status=='success'){
            localStorage.setItem('email',this.otpreq.email);
            localStorage.setItem('mobile',this.otpreq.mobile);

            console.log("otp sent success then navigate to verify otp")

            sessionStorage.setItem('forgetDeviceId',this.otpreq.deviceId);

            this.route.navigate(['forgetotpverify']);
        }
        
      }
      
    )
  }



  onSubmit(){
    this.forgetReq();
  }

}
