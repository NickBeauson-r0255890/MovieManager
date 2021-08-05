import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WatchlistMovie } from '../watchlistMovie';

@Component({
  selector: 'app-watchlist-detail',
  templateUrl: './watchlist-detail.component.html',
  styleUrls: ['./watchlist-detail.component.scss']
})
export class WatchlistDetailComponent implements OnInit {
  watchlistMovie!: WatchlistMovie;
  editPriority!: number;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe( data => {
      const watchlistMovie: WatchlistMovie = data.watchlistMovie;
      alert(watchlistMovie);
      this.editPriority = watchlistMovie.priority;
      this.watchlistMovie = watchlistMovie;
    })
  }

  returnToWatchlist() {
   const movieId = this.watchlistMovie ? this.watchlistMovie.id : null;
  // Relative URL -> '../' url will be /watchlist/;id=...
    this.router.navigate(['../', {id: movieId}], {relativeTo: this.route});
  }

}
