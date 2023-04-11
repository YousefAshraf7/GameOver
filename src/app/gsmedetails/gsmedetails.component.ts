import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Gamedetails } from '../gamedetails';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gsmedetails',
  templateUrl: './gsmedetails.component.html',
  styleUrls: ['./gsmedetails.component.css']
})
export class GsmedetailsComponent {
  constructor(private _GamesService:GamesService ,private _ActivatedRoute:ActivatedRoute){}
  
  idValue:any=""
  gameDetails:any
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.idValue=params.get("id")
      this._GamesService.gamesDetails(this.idValue).subscribe({
        next:(data)=>{
          this.gameDetails=data
          // console.log(this.gameDetails().description);
          
        }
      })
    })

  }








  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: false
  }
}
