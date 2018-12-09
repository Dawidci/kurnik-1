import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from '../shared/game/game.service';
import { GiphyService } from '../shared/giphy/giphy.service';
import { NgForm } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit, OnDestroy {
  game: any = {};
  
  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private gameService: GameService,
              private giphyService: GiphyService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.gameService.get(id).subscribe((game: any) => {
          if (game) {
            this.game = game;
            this.game.href = game._links.self.href;
            this.giphyService.get(game.title).subscribe(url => game.giphyUrl = url);
          } else {
            console.log(`Game with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/game-list']);
  }

  save(form: NgForm) {
    this.gameService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.gameService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}