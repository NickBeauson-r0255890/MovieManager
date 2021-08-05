import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private moviesUrl = '/movie-api/movies';
  httpOptions = {
    headers: new HttpHeaders({ 'content-type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        catchError(this.handleError<Movie[]>('getMovies', []))
      );
  }

  getMovie(id: string): Observable<Movie>{
    return this.http.get<Movie>(`${this.moviesUrl}/${id}`)
      .pipe(
        catchError(this.handleError<Movie>('getMovie id=${id}'))
      );
  }

  updateMovie(movie: Movie) {
    return this.http.put(this.moviesUrl, movie, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateMovie'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) { //type T needed so we can return an empty T
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

  searchMovies(term: string): Observable<Movie[]> {
    if(!term.trim()) {
      return of([]);
    }
    return this.http.get<Movie[]>(`${this.moviesUrl}/?name=${term}`).pipe(
          tap(x => x.length ?
             console.log(`found movies matching "${term}"`) :
             console.log(`no movies matching "${term}"`)),
          catchError(this.handleError<Movie[]>('searchMovies', []))
        );
  }

  deleteMovie(movieId: String): Observable<Movie>{
    return this.http.delete<Movie>(`${this.moviesUrl}/${movieId}`, this.httpOptions).pipe(
      catchError(this.handleError<Movie>('deleteMovie'))
    );
  }

  addMovie(movieFormData: any) : Observable<Movie>{
    return this.http.post<Movie>(`${this.moviesUrl}`, Movie.fromForm(movieFormData), this.httpOptions).pipe(
      catchError(this.handleError<Movie>('addMovie'))
    );
  }

}
