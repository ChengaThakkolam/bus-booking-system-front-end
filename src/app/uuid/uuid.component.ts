import { Component, OnInit } from '@angular/core';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-uuid',
  templateUrl: './uuid.component.html',
  styleUrls: ['./uuid.component.css']
})
export class UUIDComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  

  myFun(){
    var uuId=uuidv4();
    console.log("UUID from angular ");
    console.log(uuId);

    sessionStorage.setItem('uuid',uuId);
  }

  removeUUID(){
    sessionStorage.removeItem('uuid');

    console.log('remove uuid ');
  }

  

}
