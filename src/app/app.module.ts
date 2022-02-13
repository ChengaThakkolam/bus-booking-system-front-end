import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbusComponent } from './searchbus/searchbus.component';

import {HttpClientModule} from '@angular/common/http';
import { BusServiceService } from './bus-service.service';
import { RegisterComponent } from './register/register.component';
import { MyresourceComponent } from './myresource/myresource.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { LoginComponent } from './login/login.component';
import { StartingComponent } from './starting/starting.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogOutComponent } from './log-out/log-out.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';

import { AuthGuard } from './auth.guard';
import { PracticeComponent } from './practice/practice.component';
import { OtptypeComponent } from './otptype/otptype.component';
import { OtpRequestComponent } from './otp-request/otp-request.component';
import { ForgetPasswordVerifyOtpComponent } from './forget-password-verify-otp/forget-password-verify-otp.component';
import { UUIDComponent } from './uuid/uuid.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ImagefetchComponent } from './imagefetch/imagefetch.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbusComponent,
    RegisterComponent,
    MyresourceComponent,
    UserRegistrationComponent,
    LoginComponent,
    StartingComponent,
    
    LogOutComponent,
    UpdateBusComponent,
    ModifyUserComponent,
    PracticeComponent,
    OtptypeComponent,
    OtpRequestComponent,
    ForgetPasswordVerifyOtpComponent,
    UUIDComponent,
    FileuploadComponent,
    ImagefetchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
  ],
  providers: [BusServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
