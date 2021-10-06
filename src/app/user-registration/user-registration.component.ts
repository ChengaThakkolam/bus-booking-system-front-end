import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';
import { UserRegister } from '../user-register';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  constructor(private buService:BusServiceService) { }

  user:UserRegister=new UserRegister();

  u:any=[];
  
  ngOnInit(): void {
  }

  saveUser(){
    this.buService.registerUser(this.user).subscribe(
      (data)=>{
          this.u=data;
        console.log(data);
      }
    )
  }

  onSubmit(){
    this.saveUser();
    console.log(this.user);
}
}
