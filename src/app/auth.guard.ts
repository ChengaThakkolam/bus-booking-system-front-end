import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(){
   
    return this.loggedIn();
  }

  
  loggedIn(){
    if('true'==sessionStorage.getItem('loginStatus')){
      return true;
    }
    else{
      return false;
    }

  }

  
  
}


