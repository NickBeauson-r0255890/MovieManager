package MovieApp.Movie;

import MovieApp.Movie.watchlistMovie.WatchlistMovie;
import MovieApp.Movie.watchlistMovie.WatchlistMovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("/movie-api")
@RestController
public class MovieController {

    @Autowired
    MovieRepository movieRepository;

    @Autowired
    WatchlistMovieRepository watchlistMovieRepository;

    @GetMapping("")
    public String welcome(){
        return "Welcome to the movie api!";
    }

    @GetMapping("/movies")
    public Iterable<Movie> getMovies(){
        return movieRepository.findAll();
    }

    @GetMapping("/movies/{id}")
    public Optional<Movie> getMovie(@PathVariable("id") UUID id) {
        return movieRepository.findById(id);
    }

    @PostMapping("/movies")
    public void addMovie(@RequestBody Movie newMovie){
        System.out.println("Movie: " + newMovie.getName() + " " + newMovie.getDuration() + " " + newMovie.getGenre1());
        this.movieRepository.save(newMovie);
    }

    @PutMapping("/movies")
    public void updateMovie(@RequestBody Movie newMovie){
        UUID id = newMovie.getId();
        System.out.println("ID: " + id);
        movieRepository.findById(id)
                .map(movie -> {
                    movie.setName(newMovie.getName());
                    movie.setDuration(newMovie.getDuration());
                    movie.setGenre1(newMovie.getGenre1());
                    movie.setGenre2(newMovie.getGenre2());
                    movie.setGenre3(newMovie.getGenre3());
                    return movieRepository.save(movie);
                });
        //TODO Give Movie update method
    }

    @GetMapping("/movies/")
    public Iterable<Movie> getMoviesByTerm(@RequestParam("name") String name) {
        System.out.println("GetMoviesByTerm : " + name);
        return movieRepository.findByNameContainingIgnoreCaseOrGenre1ContainingIgnoreCaseOrGenre2ContainingIgnoreCaseOrGenre3ContainingIgnoreCase(name, name, name, name);
    }

    @GetMapping("/watchlist-movies")
    public Iterable<WatchlistMovie> getWatchlistMovies(){
        return watchlistMovieRepository.findAll();
    }

    @DeleteMapping("/movies/{id}")
    void deleteMovie(@PathVariable UUID id) {
        movieRepository.deleteById(id);
    }


}