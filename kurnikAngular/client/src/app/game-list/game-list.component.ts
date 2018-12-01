import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game/game.service';
import { GiphyService } from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Array<any>;

  constructor(private gameService: GameService, private giphyService: GiphyService) { }

  ngOnInit() {
    this.gameService.getAll().subscribe(data => {
      this.games = data;
      for (const game of this.games) {
        this.giphyService.get(game.title).subscribe(url => game.giphyUrl = url);
      }
    })
  }

}