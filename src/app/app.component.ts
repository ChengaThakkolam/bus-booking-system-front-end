import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { BusServiceService } from './bus-service.service';
import { LoginResponse } from './login-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

   
   constructor(private busService:BusServiceService,private auth:AuthGuard){

    
   }

  status:any=false;
  

   isDisplay(){

    return this.auth.canActivate();

   }
   
  
  ngOnInit(): void {
    
    this.status= sessionStorage.getItem('loginStatus');




    console.log("from application login status");
    console.log(this.status);
    
  }
  title = 'BusBookingApp';


}
