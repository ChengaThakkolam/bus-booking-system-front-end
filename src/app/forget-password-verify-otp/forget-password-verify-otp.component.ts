import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';

import { ForgetOTPVerify } from '../forget-otpverify';

@Component({
  selector: 'app-forget-password-verify-otp',
  templateUrl: './forget-password-verify-otp.component.html',
  styleUrls: ['./forget-password-verify-otp.component.css']
})
export class ForgetPasswordVerifyOtpComponent implements OnInit {

  constructor(private http:HttpClient,private busServices:BusServiceService) {}
    
  status:any;

  forgetVerify:ForgetOTPVerify=new ForgetOTPVerify();

  ngOnInit(): void {

    this.busServices.getUserInfo().subscribe(
      (data)=>{
        this.forgetVerify.deviceInfo=data;
      }

    );

  }


  forgetReq(){

   
    this.forgetVerify.deviceId=(sessionStorage.getItem('forgetDeviceId') || '{}');
   
   this.forgetVerify.email = (localStorage.getItem('email') || '{}');
    
    console.log(this.forgetVerify);
    this.http.post<any>("http://localhost:9090/v1/forgetpassword/verify/otp",this.forgetVerify).subscribe(
      (data)=>{
  
        console.log(data);

                if(data.status=='OTP_VALID'){
                  this.status="Forget Password completed successfully";
                  console.log(this.status +" forget valid");
                }
                if(data.status=='IN_VALID_DEVICE_ID'){
                  this.status="IN_VALID_DEVICE_ID";
                  console.log(this.status +"IN_VALID_DEVICE_ID");
                }
                if(data.status=='OTP_EXPIRED'){
                  this.status="OTP_EXPIRED";
                  console.log(this.status +"OTP_EXPIRED");
                }
                if(data.status=='OTP_invalid'){
                  this.status="OTP_invalid";
                  console.log(this.status +"OTP_invalid");
                }
                if(data.status=='email_is_not_existed'){
                  this.status="please check your requested forget password email address";
                  console.log(this.status +"email_is_not_existed");
                }

                sessionStorage.removeItem('forgetDeviceId');
      }
      
    )
  }

  onSubmit(){
      this.forgetReq();
  }

}
