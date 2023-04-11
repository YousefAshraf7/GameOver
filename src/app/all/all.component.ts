import { Component ,OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game } from '../game';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
constructor(private _GamesService:GamesService){}
games:Game[]=[];
ngOnInit(): void {
  this._GamesService.gamesApi().subscribe({
    next:(data)=>{
      this.games=data
    }
  })
}
}
