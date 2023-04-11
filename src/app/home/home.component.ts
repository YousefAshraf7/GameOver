import { Component ,OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _GamesService:GamesService ,private _ActivatedRoute:ActivatedRoute){}
  sort:String="?sort-by="
  sortby:any="popularity"
  games:Game[]=[];
  ngOnInit(): void {

      this._GamesService.gamesApi(this.sort,this.sortby).subscribe({
        next:(data)=>{
          this.games=data
        }
      })

  }
}
