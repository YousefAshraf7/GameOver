import { Component } from '@angular/core';
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import { FormGroup , FormControl , Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

constructor(private _AuthService : AuthService , private _Router:Router){
  if(localStorage.getItem("gameToken")){
    this._Router.navigate(["/home"])
  }
}

  registerForm: FormGroup =new FormGroup({
    first_name:new FormControl(null , [Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    last_name:new FormControl(null , [Validators.required,Validators.maxLength(15),Validators.minLength(3)]),
    email:new FormControl(null , [Validators.required , Validators.pattern(/^[a-z][a-z0-9]{5,20}/)]),
    age:new FormControl(null, [Validators.required]),
    password:new FormControl(null ,  [Validators.required , Validators.pattern(/^[a-z][a-z0-9]{5,20}/)])
  })

  isLoading:boolean=false
  errorMes:string="";
  signUp(){

    this.isLoading=true
    this._AuthService.signUp(this.registerForm.value).subscribe({
      next:(response) =>{
        if(   response.message !== "success"){
          this.errorMes=response.message
          this.isLoading=false
          }else{
            this.isLoading=false
            this._Router.navigate(["signin"]);
          }
      },
    })

  }
  
}
