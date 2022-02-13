import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor(private deviceService:DeviceDetectorService) { }

  ngOnInit(): void {

    this.deviceService.isMobile();
    
  }

}
