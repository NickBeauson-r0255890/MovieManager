import { Component, OnInit } from '@angular/core';

import { WatchlistMovie } from '../watchlistMovie';
import { WatchlistService } from '../watchlist.service';

import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-watchlist-list',
  templateUrl: './watchlist-list.component.html',
  styleUrls: ['./watchlist-list.component.scss']
})
export class WatchlistListComponent implements OnInit {

  watchlistMovies$! : Observable<WatchlistMovie[]>
  selectedId?: string;

  constructor(private watchlistService: WatchlistService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.watchlistMovies$ = this.route.paramMap.pipe(
      switchMap( params => {
        this.selectedId = params.get('id')!; //Get possible ID when watchlistMovie has been selected
        return this.watchlistService.getWatchlistMovies();
      })
    )
  }

}
