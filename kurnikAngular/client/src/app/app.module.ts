import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpService } from './services/http.service';

import { MatButtonModule, MatCardModule, MatInputModule, MatCheckboxModule, MatProgressSpinnerModule,
  MatListModule, MatToolbarModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserEditComponent } from './user-edit/user-edit.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { RockPaperComponent } from './rock-paper/rock-paper.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    GameListComponent,
    GameEditComponent,
    RockPaperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
