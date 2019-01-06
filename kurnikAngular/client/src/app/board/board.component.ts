import { Component, ViewContainerRef } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BoardService } from '../board.service';
import { Board } from '../board';

const NUM_PLAYERS: number = 2;
const BOARD_SIZE: number = 6;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [BoardService]
})
export class BoardComponent {

  canPlay: boolean = true;
  player: number = 0;
  players: number = 0;
  gameId: string;
  gameUrl: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port: '');

  constructor(
    private toastr: ToastrModule,
    //private _vcr: ViewContainerRef,
    private boardService: BoardService
  ) {
    //this.toastr.setRootViewContainerRef(_vcr);
    this.createBoards();
  }

  // event handler for click event on
  // each tile - fires torpedo at selected tile
  fireTorpedo(e:any) : BoardComponent {
    let id = e.target.id,
      boardId = id.substring(1,2),
      row = id.substring(2,3), col = id.substring(3,4),
      tile = this.boards[boardId].tiles[row][col];
    if (!this.checkValidHit(boardId, tile)) {
      return;
    }

    if (tile.value == 1) {
      //this.toastr.success("You got this.", "HURRAAA! YOU SANK A SHIP!");
      this.boards[boardId].tiles[row][col].status = 'win';
      this.boards[this.player].player.score++;
    } else {
      //this.toastr.info("Keep trying.", "OOPS! YOU MISSED THIS TIME");
      this.boards[boardId].tiles[row][col].status = 'fail'
    }
    this.canPlay = false;
    this.boards[boardId].tiles[row][col].used = true;
    this.boards[boardId].tiles[row][col].value = "X";
    return this;
  }

  checkValidHit(boardId: number, tile: any) : boolean {
    if (boardId == this.player) {
      //this.toastr.error("Don't commit suicide.", "You can't hit your own board.")
      return false;
    }
    if (this.winner) {
      //this.toastr.error("Game is over");
      return false;
    }
    if (!this.canPlay) {
      //this.toastr.error("A bit too eager.", "It's not your turn to play.");
      return false;
    }
    if(tile.value == "X") {
      //this.toastr.error("Don't waste your torpedos.", "You already shot here.");
      return false;
    }
    return true;
  }

  createBoards() : BoardComponent {
    for (let i = 0; i < NUM_PLAYERS; i++)
      this.boardService.createBoard(BOARD_SIZE);
    return this;
  }

  // winner property to determine if a user has won the game.
  // once a user gets a score higher than the size of the game
  // board, he has won.
  get winner () : Board {
    return this.boards.find(board => board.player.score >= BOARD_SIZE);
  }

  // get all boards and assign to boards property
  get boards () : Board[] {
    return this.boardService.getBoards()
  }
}