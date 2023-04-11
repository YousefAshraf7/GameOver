import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userToken:any=""
  userData=new BehaviorSubject(null)
  constructor(private _HttpClient : HttpClient , private _Router:Router) { 
  if(localStorage.getItem("gameToken")){
    this.userData.next(this.userToken)
  }
  }
  islogged(){
    let userToken:any=localStorage.getItem("gameToken")
    return this.userData.next(userToken)
  }
  logOut(){
    localStorage.removeItem("gameToken")
    this.userData.next(null)
    this._Router.navigate(['signin'])
  }

  signUp(userData:object):Observable<any> {
   return this._HttpClient.post(`https://route-movies-api.vercel.app/signup`, userData);
  }
  signin(userData:object):Observable<any> {
    return this._HttpClient.post(`https://route-movies-api.vercel.app/signin`, userData);
  }

}
