import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent  } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-form/movie-form.component';

const routes: Routes = [
  {path: 'movies', component: MovieListComponent, data: {animation: 'movies'}},
  {path: 'movie-form', component: MovieFormComponent, data: {animation: 'movies'}},
  {path: 'detail/:id', component: MovieDetailComponent, data: {animation: 'movie'}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
