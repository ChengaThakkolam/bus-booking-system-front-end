import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { ForgetPasswordVerifyOtpComponent } from './forget-password-verify-otp/forget-password-verify-otp.component';
import { ImagefetchComponent } from './imagefetch/imagefetch.component';

import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { MyresourceComponent } from './myresource/myresource.component';
import { OtpRequestComponent } from './otp-request/otp-request.component';
import { PracticeComponent } from './practice/practice.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UUIDComponent } from './uuid/uuid.component';

const routes: Routes = [

  {path: '',   redirectTo: '/login', pathMatch: 'full'}
 ,

  {path:'bus', component:SearchbusComponent}  // search bus based on from and to 
  ,
  {path:'dashbord/bus', component:SearchbusComponent}  // search bus based on from and to 
 
  ,
  {path:'update-bus/:id', component:UpdateBusComponent}     // for booking seats in bus 
  ,
  {path:'history', component:MyresourceComponent , canActivate: [AuthGuard]}  // myResource component
  ,
  {path:'addUser', component:UserRegistrationComponent}  // add user 
  ,
  {path:'login', component:LoginComponent}   // login 
  ,
  
  
  {path:'logOut', component:LogOutComponent  , canActivate: [AuthGuard]}  // logOut 
  ,
  {path:'modify', component:ModifyUserComponent  , canActivate: [AuthGuard]}  // Modify content for ask the balance ,
  ,
  {path:'practice',component:PracticeComponent},
  {path:'otpreq',component:OtpRequestComponent} ,
  {path:'forgetotpverify' , component: ForgetPasswordVerifyOtpComponent},
  {path:'uuid',component:UUIDComponent},
  {path:'fileupload', component:FileuploadComponent} // file upload
  ,
  {path:'allimages', component:ImagefetchComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
