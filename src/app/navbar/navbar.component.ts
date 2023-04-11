import { Component } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  loggedIn:boolean=false
constructor(private _AuthService:AuthService){
  this._AuthService.userData.subscribe({
    next:(data) => {
      if (data!==null) {
        this.loggedIn=true
        console.log(this.loggedIn)
      } else {
        this.loggedIn=false
      console.log(this.loggedIn)
      }
      console.log(this.loggedIn)
    }
  })


  if(localStorage.getItem("gameToken")!==null){
    this.loggedIn=true
    console.log(this.loggedIn)
    }
}

logOut(){
  this.loggedIn=false
  this._AuthService.logOut()
}
}
