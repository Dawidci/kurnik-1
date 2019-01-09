import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { RockPaperComponent } from './rock-paper/rock-paper.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { PongComponent } from './pong/pong.component';
import { SnakeComponent } from './snake/snake.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'game-list', component: GameListComponent },
  { path: 'game-add', component: GameEditComponent },
  { path: 'game-edit/:id', component: GameEditComponent },
  { path: 'user-list',  component: UserListComponent },
  { path: 'user-add',  component: UserEditComponent },
  { path: 'user-edit/:id', component: UserEditComponent },
  { path: 'rockPaper', component: RockPaperComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'pong', component: PongComponent},
  { path: 'snake', component: SnakeComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
