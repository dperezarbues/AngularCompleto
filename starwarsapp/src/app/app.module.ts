import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

//Modules
import { MoviesModule } from './modules/movies/movies.module';
import { CharactersModule } from './modules/characters/characters.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MoviesModule,
    CharactersModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
