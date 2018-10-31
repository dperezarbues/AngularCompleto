import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//Components
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';

//Services
import { MoviesService } from './services/movies.service';
import { MoviesRoutingModule } from './movies-routing.module';


@NgModule({
  declarations: [
    MoviesListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: []
})
export class MoviesModule { }
