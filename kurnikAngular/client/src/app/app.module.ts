import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpService } from './services/http.service';
import { RouterModule, Routes } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatSnackBar,
  MatSnackBarContainer,
  MatSnackBarModule
} from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEditComponent } from './user-edit/user-edit.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { RockPaperComponent } from './rock-paper/rock-paper.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { OverlayModule } from "@angular/cdk/overlay";
import { PongComponent } from './pong/pong.component';
import { SnakeComponent } from './snake/snake.component';
import { BestScoreManager } from './snake/storage';
import { HomeComponent } from './home/home.component';
import { Time } from './timer/timer.component';

const appRoutes: Routes = [
  {
    path: 'timer',
    component: Time,
    data: { title: 'Timer' }
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    GameListComponent,
    GameEditComponent,
    RockPaperComponent,
    RegisterComponent,
    LoginComponent,
    PongComponent,
    SnakeComponent,
    HomeComponent,
    Time,
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    OverlayModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent, HttpService, BestScoreManager],
  bootstrap: [AppComponent],
  entryComponents: [
  ],
})
export class AppModule { }
