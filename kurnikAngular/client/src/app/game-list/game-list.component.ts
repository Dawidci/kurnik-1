import { Component, OnInit } from '@angular/core';
import { GameService } from '../shared/game/game.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Array<any>;
  languageSubscription: Subscription;
  messages;
  admin: boolean = true;
  username : string;
  role : string;
  id: string;
  date: string;
  name: string;

  constructor(private gameService: GameService, private giphyService: GiphyService, private languageService: LanguageService) { }

  ngOnInit() {
    this.username = sessionStorage.getItem('username');
    this.role = sessionStorage.getItem('role');
    this.gameService.getAll().subscribe(data => {
      this.games = data;
      this.subscribeOnLanguageChange();
      for (const game of this.games) {
        this.giphyService.get(game.title).subscribe(url => game.giphyUrl = url);
      }
    })
  }

  private subscribeOnLanguageChange() {
    this.languageSubscription = this.languageService.langSrc$
      .subscribe((language: any) => {
        this.messages = language.messages;
      });
    this.messages = this.languageService.getCurrentLanguage().messages;
  }

  ngOnDestroy(){
    this.languageSubscription.unsubscribe();
  }

}