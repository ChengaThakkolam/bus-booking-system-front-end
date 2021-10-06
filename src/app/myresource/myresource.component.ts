import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-myresource',
  templateUrl: './myresource.component.html',
  styleUrls: ['./myresource.component.css']
})
export class MyresourceComponent implements OnInit {    // Booking History



  constructor(private http:HttpClient) { }
  myResource:any=[];

  ngOnInit(): void {

    let mobile=sessionStorage.getItem('mobile');
    this.http.get("http://localhost:9090/bookinghistory/"+mobile).subscribe(
      (data)=>{
        console.log(data);
        this.myResource=data;
      }
    )
  }


}
