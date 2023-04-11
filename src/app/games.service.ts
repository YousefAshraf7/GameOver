import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {BehaviorSubject, Observable} from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private _HttpClient : HttpClient , private _Router:Router) { }
  // baseUrl:string="https://www.freetogame.com/api/games"
   options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd65bc74fc8msheecc0d68e8598d9p164c5fjsnbd1216a5a221',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  gamesApi(x:String="" , y:String=""):Observable<any>{
   return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/games${x}${y}`, this.options);
  }
  gamesDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, this.options);
   }
}
