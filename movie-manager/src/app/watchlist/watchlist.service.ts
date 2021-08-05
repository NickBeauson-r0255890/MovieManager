import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { WatchlistMovie } from './watchlistMovie';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {

  private watchlistURL = '/movie-api/watchlist-movies';

  constructor(private http: HttpClient){}

  getWatchlistMovies(): Observable<WatchlistMovie[]> {
    return this.http.get<WatchlistMovie[]>(this.watchlistURL).pipe(
      catchError(this.handleError<WatchlistMovie[]>('getWatchlistMovies', []))
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
}
