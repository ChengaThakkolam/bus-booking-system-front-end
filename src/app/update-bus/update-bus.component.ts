import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingResponseModel } from '../booking-response-model';
import { BusSeatBookingModel } from '../bus-seat-booking-model';
import { BusSeatingModel } from '../bus-seating-model';
import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  constructor(private router:ActivatedRoute, private http:HttpClient, private busService:BusServiceService) { }

  id:number=0;

 

  busSeatingModel: BusSeatingModel=new BusSeatingModel();

  bookingResponseModel:any=[];

  ngOnInit(): void {
    this.id=this.router.snapshot.params['id'];
    console.log(this.id);
    this.busService.getBusById(this.id).subscribe(
      (data)=>{
     //   this.busSeatingModel.mobile=this.router.snapshot.params['m'];
         this.busSeatingModel=data;

          console.log("getting BusSeatingModel")
          console.log(this.busSeatingModel);
      }
    )

  }

  onSubmit(){
    
     // busService.busSeatBooking(mobile,this.busSeatingModel)
    
    let mobile=sessionStorage.getItem('mobile');
    this.http.post("http://localhost:9090/busbooking/"+mobile,  this.busSeatingModel).subscribe(
      (data)=>{

        console.log(" user submit the form ");
        this.bookingResponseModel=data;
        console.log(data);
        
      }
    )
  }

}
