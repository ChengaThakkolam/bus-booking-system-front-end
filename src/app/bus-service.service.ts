import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BusSeating } from './bus-seating';
import { BusSeatingModel } from './bus-seating-model';
import { Login } from './login';
import { SearchModel } from './search-model';
import { UserRegister } from './user-register';



@Injectable({
  providedIn: 'root'
})
export class BusServiceService{

private baseUrl="http://bus-booking-app.us-east-1.elasticbeanstalk.com/";
 private url=this.baseUrl+"/searchbuses";

  private myRes=this.baseUrl+"/bookinghistory";

  private addUser=this.baseUrl+"/userregistration";

  private loginUrl=this.baseUrl+"/login";

  private busSearchById=this.baseUrl+"/booking";

  private busBookingUrl=this.baseUrl+"/busbooking";    // for booking seats 


  private logOutUrl=this.baseUrl+"/logout/";

  constructor(private http:HttpClient) { }


  searchBuses(searchBus:SearchModel):Observable<object>{

    return this.http.post(this.url,searchBus);
  }

  myResource(mobile:string):Observable<any>{

    return this.http.get(`${this.myRes}/${mobile}`);      //this.myRes
  }

  registerUser(user:UserRegister):Observable<Object>{

    return this.http.post(this.addUser,user);
  }

  bookBusTicket(busSeating:BusSeating):Observable<Object>{
   return this.http.post(this.baseUrl+'/busbooking',busSeating);
  }

  getBusById(id:number):Observable<BusSeatingModel>{
    return this.http.get<BusSeatingModel>(`${this.busSearchById}/${id}`)
  }

  
  busSeatBooking(mobile:string,busSeatingModel:BusSeatingModel):Observable<Object>{

    return this.http.post(`${this.busBookingUrl}/${mobile}`,busSeatingModel);
  }

  checkLoginStatus():boolean{
   
   
    let loginStatus= sessionStorage.getItem('loginStatus');
   if(loginStatus=='true')
   {
     return true;
   }
   else{
      return false;
   }

  }

  logOut(mobile:string):Observable<Object>{
    return this.http.get(`${this.logOutUrl}/${mobile}`);
  }


  getUserInfo():Observable<Object>{
    return this.http.get("https://ipapi.co/json",{responseType:'text'});
  }

  getUserLatLanInfo():Observable<any>{
    return this.http.get("https://ipapi.co/json");
  }

  uploadFile(file:File,deviceName:string,deviceType:string,lat:string,lan:string):Observable<any>{
    // create form data
    const formData=new FormData();

    // Store form name as "file" with file data
    formData.append("file", file, file.name);
  
    formData.append("deviceName",deviceName);
    formData.append("deviceType",deviceType);
    formData.append("lat",lat);
    formData.append("lan",lan);
    return this.http.post(this.baseUrl+'/upload', formData);
  }

  findAllImages():Observable<any>{
    return this.http.get('http://localhost:9090/findAllImages');
  }

  deleteFiles(fileName:String):Observable<any>{
   let deleteUrl="http://localhost:9090/delete";
    return this.http.delete(`${deleteUrl}/${fileName}`);
  }
}
