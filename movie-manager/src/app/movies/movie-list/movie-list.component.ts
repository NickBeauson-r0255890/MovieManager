import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  selectedId?: string;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.movies$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = params.get('id')!;
        return this.movieService.getMovies();
      })
    )
  }

  openInNewWindow(movieId: string){
    const url = this.router.serializeUrl(
      this.router.createUrlTree(['/detail/' + movieId])
    );
    window.open(url, '_blank');
  }

}
