import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {

  movieForm = this.fb.group({
    name: ['', Validators.required],
    duration: ['', Validators.required],
    genre1: ['', Validators.required],
    genre2: [''],
    genre3: ['']
  });

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private movieService: MovieService,
              ) { }

  ngOnInit(): void {
  }

  goToMovies(){
    this.router.navigate(['/movies']);
  }

  onSubmit(){
      this.movieService.addMovie(this.movieForm.value)
        .subscribe(() => this.goToMovies());
    }

}
