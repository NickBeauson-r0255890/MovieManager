import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap, finalize, tap
 } from 'rxjs/operators';
 import { Movie } from '../movie';
 import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  private searchTerms = new Subject<string>();
  term!: string;
  loading = false;

  constructor(private movieService: MovieService) { }

  //why filter backend and not use filter() in frontend?
  // https://stackoverflow.com/questions/52346685/filters-logic-should-be-on-frontend-or-backend/52346835

  // Push a search term into the observable stream.
  search(newTerm: string): void {
      this.term=newTerm;
      this.searchTerms.next(newTerm);
  }

  delay(ms: number) {
    return new Promise( res => setTimeout(res, ms));
  }

  ngOnInit(): void {
    this.movies$ = this.searchTerms.pipe(
      debounceTime(500), // wait 500ms after each keystroke before considering the term
      distinctUntilChanged(), // ignore new term if same as previous term -> only new term gets searched for
      tap(() => {this.loading = true}),
      switchMap((newTerm: string) =>
        this.movieService.searchMovies(newTerm).pipe(
          finalize(() => this.loading = false) ),
      )
    );
  }

}
