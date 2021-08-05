import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { Location } from '@angular/common';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie$!: Observable<Movie>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private movieService: MovieService,
              //private location: Location
              ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    //const id = this.route.snapshot.paramMap.get('id')!; //+ => parseNum,  ! => can't be null
    //this.movieService.getMovie(id)
    //  .subscribe(movie => this.movie = movie);
    this.movie$ = this.route.paramMap.pipe(

              switchMap(params =>
                this.movieService.getMovie(params.get('id')!))
            ) as Observable<Movie>;

    /*The switchMap operator does two things.
                      It flattens the Observable<Hero> that HeroService returns and cancels previous pending requests.
                      If the user re-navigates to this route with a new id while the HeroService is still retrieving the old id,
                      switchMap discards that old request and returns the hero for the new id.*/
                      /*You wouldn't want the router to remove the current HeroDetailComponent instance from the
                      DOM only to re-create it for the next id as this would re-render the view.
                       For better UX, the router re-uses the same component instance and updates the parameter.

                        Since ngOnInit() is only called once per component instantiation,
                        you can detect when the route parameters change from within the same instance using the observable paramMap property.*/
  }

  goToMovies(movie: Movie){
    //this.location.back();
    const movieId = movie? movie.id : null;
    this.router.navigate(['/movies', {id: movieId}]);
  }

  onSubmit(movieForm: any){
    console.log('/n');
    console.log(movieForm.value);
    console.log('/n');
    this.movieService.updateMovie(movieForm.value)
      .subscribe(() => this.goToMovies(movieForm.value));
  }

  delete(movie: Movie){
    if(confirm('Are you sure you want to delete ' + movie.name + '?')){
      this.movieService.deleteMovie(movie.id)
            .subscribe(() => this.goToMovies(movie));
    }
  }

}
