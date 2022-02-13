import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { BusServiceService } from '../bus-service.service';

@Component({
  selector: 'app-imagefetch',
  templateUrl: './imagefetch.component.html',
  styleUrls: ['./imagefetch.component.css']
})
export class ImagefetchComponent implements OnInit {


  url="http://localhost:9090/download";
 
  allImages:any="";
  constructor(private imageFetch:BusServiceService,private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    this.imageFetch.findAllImages().subscribe((data)=>
    {
      console.log("all images "+data);
      this.allImages=data;
    })
  }

  fetchData(fileName:String){
    let u=`${this.url}/${fileName}`;
    console.log(u);
    
    return u;
  }

  delete(fileName:String){
    console.log(fileName+" deleted requestBegin");

    this.imageFetch.deleteFiles(fileName).subscribe((data)=>
    {
      console.log(" file data delted "+data);
      if(data.status=="ok"){
     
        this.route.navigate(['allimages']);
      }

    })
    
    

    
  }

}
