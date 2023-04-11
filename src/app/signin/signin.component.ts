import { Component } from '@angular/core';
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private _AuthService : AuthService , private _Router:Router){
    if(localStorage.getItem("gameToken")){
      this._Router.navigate(["/home"])
    }
  }


  signInForm: FormGroup =new FormGroup({
    email:new FormControl(null , [Validators.required , Validators.pattern(/^[a-zA-Z0-9]{5,20}/), Validators.email]),
    password:new FormControl(null ,  [Validators.required , Validators.pattern(/^[a-zA-Z][a-z0-9]{5,20}/)])
  })


  isLoading:boolean=false
  errorMes:string="";
  signIn(){

    this.isLoading=true
    this._AuthService.signin(this.signInForm.value).subscribe({
      next:(response) =>{
        if(   response.message !== "success"){
        this.errorMes=response.message
        this.isLoading=false
        }else{
          this.isLoading=false
          localStorage.setItem( "gameToken", response.token )
          console.log(localStorage.getItem( "gameToken" ))
          this._Router.navigate(["home"]);
        this._AuthService.islogged()

        }
      },
    })

  }

}
