import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { BusServiceService } from '../bus-service.service';
import { LatLanClass } from '../lat-lan-class';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {


   // Variable to store shortLink from api response
   status:boolean=false;
   shortLink: string = "";
   loading: boolean = false; // Flag variable
  file: any = null; // Variable to store file
url:any=null;
deviceInfo:LatLanClass=new LatLanClass();
deviceInformation:any=null;
  constructor(private fileUploadService:BusServiceService, private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.fileUploadService.getUserLatLanInfo().subscribe(
      (data)=>{
        this.deviceInfo=data;
       

      }

    );
  }


   // On file Select
   onChange(event:any) {
    this.file = event.target.files[0];

    if (event.target.files) {
      var reader= new FileReader();

      reader.readAsDataURL(event.target.files[0]);
      reader.onload=(event:any)=>{
       // console.log(event.target.result);
        this.url= event.target.result;
      }
    }
      
  }


   // OnClick of button Upload
   onUpload() {
     console.log("file uploading ");
    this.loading = !this.loading;
    this.deviceInformation = this.deviceService.getDeviceInfo();
    console.log("device information "+this.deviceInfo);
    
    console.log("device latitude "+this.deviceInfo.latitude);
    console.log("device latitude "+this.deviceInfo.longitude);
    console.log("device Name "+this.deviceInformation.device);
    console.log("device type "+this.deviceInformation.deviceType);
    this.fileUploadService.uploadFile(this.file,this.deviceInformation.device,this.deviceInformation.deviceType,this.deviceInfo.latitude,this.deviceInfo.longitude).subscribe(
        (data) => {
            
          console.log(data);
          if(data.status=="ok")
          {
            this.status=true;
            this.loading=false;
          }
        }
    );
}

}
