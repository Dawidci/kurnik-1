import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameEditComponent } from './game-edit/game-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/game-list', pathMatch: 'full' },
  {
    path: 'game-list',
    component: GameListComponent
  },
  {
    path: 'game-add',
    component: GameEditComponent
  },
  {
    path: 'game-edit/:id',
    component: GameEditComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  },
  {
    path: 'user-add',
    component: UserEditComponent
  },
  {
    path: 'user-edit/:id',
    component: UserEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
