import { Component ,OnInit} from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';

@Component({
  selector: 'app-sortby',
  templateUrl: './sortby.component.html',
  styleUrls: ['./sortby.component.css']
})
export class SortbyComponent implements OnInit {
  constructor(private _GamesService:GamesService ,private _ActivatedRoute:ActivatedRoute){}
  sort:String="?sort-by="
  sortby:any=""
  games:Game[]=[];
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.sortby=params.get("value")
      this._GamesService.gamesApi(this.sort,this.sortby).subscribe({
        next:(data)=>{
          this.games=data
        }
      })
    })

  }
}
