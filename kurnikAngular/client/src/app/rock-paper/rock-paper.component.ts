import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-rock-paper',
  templateUrl: './rock-paper.component.html',
  styleUrls: ['./rock-paper.component.css']
})
export class RockPaperComponent {
  scores = [0, 0];
  weapons = [
    'rock',
    'paper',
    'scissors'
  ]
  languageSubscription: Subscription;
  messages;
  playerSelected = -1;
  loading= false;
  isResultShow = false;
  
  // theResult -  0 winner
  //              1 lose
  //              2 tie
  theResult = 0 
  enemySelected  = -1;

  constructor(
    private languageService: LanguageService) {
  }

  ngOnInit() {
       this.subscribeOnLanguageChange();
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
  
 pick( weapon: number): void {
   // return immediately when still loading. You don't want
   // the user to spam the button.
   if(this.loading) return;
   this.loading = true;
   this.playerSelected = weapon;
  
  //create a delay to simulate enemy's turn.
   setTimeout( () => {
     this.loading = false;
     // generate a number from 0 -2 
     const randomNum =  Math.floor(Math.random() * 3 ) ;
     this.enemySelected = randomNum;
     this.checkResult();
     this.isResultShow = true;
   },  Math.floor(Math.random()  * 500 ) +200);
 }

 reset(): void {
  this.scores = [0,0];
 }

 checkResult(): void {
   const playerPick = this.playerSelected;
   const enemyPick = this.enemySelected;
  // if you and the enemy have the same weapon, then it is a tie.
   if( playerPick ==  enemyPick)
    {
    this.theResult = 2;
  }
  // let's say you picked rock ( 0 ) 
  // and the enemy picked paper ( 1 )
  // you lose because ( 0 - 1 + 3 ) % 3  is equal to 2.

  // when you picked rock ( 0 )
  // and the enemy picked scissor ( 2 )
  // you win because ( 0 - 2 + 3) % 3 is equal to 1.

  // when you picked scissor ( 2 )
  // and the enemy picked paper ( 1 )
  // you win because ( 2 - 1 + 3 ) % 3 is equal to 1. 4 % 3 is 1.
  // Hope you get the picture.
    else if ( (playerPick - enemyPick + 3)% 3 == 1)    {
      // YOU WIN
      this.theResult = 0;
      this.scores[0] = this.scores[0]+1;
    }
    else{
      // YOU LOSE
      this.theResult = 1;
        this.scores[1] = this.scores[1]+1;
    }
 }
}
