import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { PlatformsComponent } from './platforms/platforms.component';
import { AllComponent } from './all/all.component';
import { SortbyComponent } from './sortby/sortby.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './auth.guard';
import { GsmedetailsComponent } from './gsmedetails/gsmedetails.component';


const routes: Routes = [
  {path:"" ,  redirectTo:"home" , pathMatch:"full"},
  {path:"home" ,canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"categories/:value" ,canActivate:[AuthGuard] ,component:CategoriesComponent},
  {path:"plateforms/:value" ,canActivate:[AuthGuard] ,component:PlatformsComponent},
  {path:"all" ,canActivate:[AuthGuard] ,component:AllComponent},
  {path:"gamedetails/:id" , canActivate:[AuthGuard] , component:GsmedetailsComponent },
  {path:"sortby/:value" ,canActivate:[AuthGuard] ,component:SortbyComponent},
  {path:"signin" ,component:SigninComponent},
  {path:"signup" ,component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
