import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MoviesRoutingModule } from './movies-routing.module';

//Components
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';

//Services
import { MoviesService } from './services/movies.service';


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
  ]
})
export class MoviesModule { }
