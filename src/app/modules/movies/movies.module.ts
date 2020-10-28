import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesContainerComponent } from './containers/movies-container/movies-container.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@NgModule({
  declarations: [MoviesContainerComponent, MovieListComponent],
  imports: [CommonModule, MoviesRoutingModule],
})
export class MoviesModule {}
