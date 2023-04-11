import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { ActivatedRoute } from '@angular/router';
import { Game } from '../game';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  constructor(private _GamesService:GamesService ,private _ActivatedRoute:ActivatedRoute){}
  category:String="?category="
  categoryValue:any=""
  games:Game[]=[];
  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.categoryValue=params.get("value")
      this._GamesService.gamesApi(this.category,this.categoryValue).subscribe({
        next:(data)=>{
          this.games=data
        }
      })
    })

  }
}
