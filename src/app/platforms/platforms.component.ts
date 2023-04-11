import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
@Component({
  selector: 'app-platforms',
  templateUrl: './platforms.component.html',
  styleUrls: ['./platforms.component.css']
})
export class PlatformsComponent {
  constructor(private _GamesService:GamesService ,private _ActivatedRoute:ActivatedRoute){}
  platform:String="?platform="
  platformValue:any=""
  games:Game[]=[];
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.platformValue=params.get("value")
      this._GamesService.gamesApi(this.platform,this.platformValue).subscribe({
        next:(data)=>{
          this.games=data
        }
      })
    })

  }
}
