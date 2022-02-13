import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
import { BusSeating } from '../bus-seating';
import { BusSeatingModel } from '../bus-seating-model';
import { BusServiceService } from '../bus-service.service';
import { SearchModel } from '../search-model';

@Component({
  selector: 'app-searchbus',
  templateUrl: './searchbus.component.html',
  styleUrls: ['./searchbus.component.css']
})
export class SearchbusComponent implements OnInit {

  constructor(private busService:BusServiceService,private http:HttpClient, private router:Router) { }

    searchModel:SearchModel=new SearchModel();
    search:any=[];

    busSeatingModel:BusSeatingModel[]=[];

    busModel:BusSeatingModel=new BusSeatingModel();

    busSeating:BusSeating=new BusSeating();

  ngOnInit(): void {
  }


  searchBuses(){
    this.http.post<BusSeatingModel[]>("http://bus-booking-app.us-east-1.elasticbeanstalk.com/searchbuses",this.searchModel).subscribe(
      (data)=>{
        this.busSeatingModel=data;

        console.log(data);
      }
    );
  }

  onSubmit(){
    this.searchBuses();
    console.log(this.searchModel);
  
}

onSubmitBus(){

   
}

bookBusTicket(){
  this.busService.bookBusTicket(this.busSeating).subscribe(
    (data)=>{

    }
  )
}


updateBus(id:number){


  this.router.navigate(['update-bus',id]);
}

}
