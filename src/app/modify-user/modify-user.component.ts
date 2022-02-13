import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BalanceModel } from '../balance-model';

@Component({
  selector: 'app-modify-user',
  templateUrl: './modify-user.component.html',
  styleUrls: ['./modify-user.component.css']
})
export class ModifyUserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  balance:BalanceModel=new BalanceModel();

  b:any=[];

  ngOnInit(): void {
  }

  onSubmit(){
      let mobile=sessionStorage.getItem('mobile');
      this.http.post("http://bus-booking-app.us-east-1.elasticbeanstalk.com/setbalance/"+mobile, this.balance).subscribe(
        (data)=>
        {
         console.log(data);
         this.b=data; 

        }
      )
  }
}
