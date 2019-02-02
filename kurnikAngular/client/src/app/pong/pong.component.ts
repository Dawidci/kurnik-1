import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Controls } from '../enums/controls';
import { PongGame } from '../classes/pong-game';
import { Boundaries } from '../classes/boundaries';
import { ControlState } from '../classes/control-state';
import { Subscription } from 'rxjs';
import { LanguageService } from '../services/language.service';


@Component({
  selector: 'pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.css']
})
export class PongComponent implements OnInit {
  @ViewChild('PongCanvas') canvasElement: ElementRef
  languageSubscription: Subscription;
  messages;
  public width: number = 800;
  public height: number = 600;
  public which: number = 0;

  private context: CanvasRenderingContext2D;
  private pongGame: PongGame;
  private ticksPerSecond: number = 60;

  private controlState: ControlState; 
  show: boolean = true;

 

  constructor(private languageService: LanguageService) {
    this.pongGame = new PongGame(this.height,this.width);
    this.controlState = { upPressed: false, downPressed: false };
  }

  ngOnInit() {
    this.context = this.canvasElement.nativeElement.getContext('2d');
    this.subscribeOnLanguageChange();
    // Game model ticks 60 times per second. Doing this keeps same game speed
    // on higher FPS environments.
    setInterval(() => this.pongGame.tick(this.controlState), 1 / this.ticksPerSecond);
  }

  private subscribeOnLanguageChange() {
    this.languageSubscription = this.languageService.langSrc$
      .subscribe((language: any) => {
        this.messages = language.messages;
      });
    this.messages = this.languageService.getCurrentLanguage().messages;
  
  }

  wait(ms): void{
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

  onClick():void{
    this.wait(10000);
    this.renderFrame();
  }

  ngOnDestroy(){
    this.languageSubscription.unsubscribe();
  }

  renderFrame(): void {
    this.show = false;
    // Only run if game still going
    if (this.pongGame.gameOver()) {
      this.context.font = "30px Arial";
      this.context.fillText(this.messages.home.GameOver, 50, 50);
      return;
    }

    // Draw background
    this.context.fillStyle = 'rgb(0,0,0)';
    this.context.fillRect(0, 0, this.width, this.height);

    // Set to white for game objects
    this.context.fillStyle = 'rgb(255,255,255)';

    let bounds: Boundaries;

    // Draw player paddle
    let paddleObj = this.pongGame.playerPaddle;
    bounds = paddleObj.getCollisionBoundaries();
    this.context.fillRect(bounds.left, bounds.top, paddleObj.getWidth(), paddleObj.getHeight());

    // Draw enemy paddle
    let enemyObj = this.pongGame.enemyPaddle;
    bounds = enemyObj.getCollisionBoundaries();
    this.context.fillRect(bounds.left, bounds.top, enemyObj.getWidth(), enemyObj.getHeight());

    // Draw ball
    let ballObj = this.pongGame.ball;
    bounds = ballObj.getCollisionBoundaries();
    this.context.fillRect(bounds.left, bounds.top, ballObj.getWidth(), ballObj.getHeight());
    
  
    // Render next frame
    window.requestAnimationFrame(() => this.renderFrame());

  }

  @HostListener('window:keydown', ['$event'])
  keyUp(event: KeyboardEvent) {
    if (event.keyCode == Controls.Up) {
      this.controlState.upPressed = true;
    }
    if (event.keyCode == Controls.Down) {
      this.controlState.downPressed = true;
    }
  }

  @HostListener('window:keyup', ['$event'])
  keyDown(event: KeyboardEvent) {
    if (event.keyCode == Controls.Up) {
      this.controlState.upPressed = false;
    }
    if (event.keyCode == Controls.Down) {
      this.controlState.downPressed = false;
    }
  }
}