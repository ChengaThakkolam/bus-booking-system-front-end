import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, timer } from 'rxjs';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router,private busService:BusServiceService) { }



  logOutStatus:any="";
  ngOnInit(): void {

    let mobile=sessionStorage.getItem('mobile');
    console.log("http://localhost:9090/logout/"+mobile);

    this.http.get("http://bus-booking-app.us-east-1.elasticbeanstalk.com/logout/"+mobile).subscribe(
      (data)=>{
     
        console.log(data);

        this.logOutStatus=data;
        if(this.logOutStatus.status==true){
              sessionStorage.clear();
              this.router.navigate(['/']);
        }
        else{
          console.log("first You need to login then you click logout ");
          //this.observableTimer();
          this.router.navigate(['login']);
        }

      }

    )


  }
    
}
