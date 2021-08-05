import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomsModule } from '../customs/customs.module';


import { MoviesRoutingModule } from './movies-routing.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieFormComponent} from './movie-form/movie-form.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailComponent,
    MovieSearchComponent,
    MovieFormComponent
  ],
  imports: [
    CommonModule,
    CustomsModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
  ]
})
export class MoviesModule { }
