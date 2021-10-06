import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LogOutComponent } from './log-out/log-out.component';
import { LoginComponent } from './login/login.component';
import { ModifyUserComponent } from './modify-user/modify-user.component';
import { MyresourceComponent } from './myresource/myresource.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

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
  {path:'dashbord', component:DashbordComponent}   // if login open dashbord open 
  ,
  {path:'logOut', component:LogOutComponent  , canActivate: [AuthGuard]}  // logOut 
  ,
  {path:'modify', component:ModifyUserComponent  , canActivate: [AuthGuard]}  // Modify content for ask the balance ,
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
