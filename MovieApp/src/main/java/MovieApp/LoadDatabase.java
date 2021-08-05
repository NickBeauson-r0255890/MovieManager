package MovieApp;

import MovieApp.Movie.Movie;
import MovieApp.Movie.MovieRepository;
import MovieApp.Movie.watchlistMovie.WatchlistMovie;
import MovieApp.Movie.watchlistMovie.WatchlistMovieRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class LoadDatabase {
    private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

   // @Bean
   // CommandLineRunner initDatabase(MovieRepository repository, WatchlistMovieRepository watchlistMovieRepository) {
//
   //     return args -> {
   //         log.info("Preloading " + repository.save(new Movie("Frozen", 89)));
   //         log.info("Preloading " + repository.save(new Movie("Rapunzel", 97)));
   //         log.info("Preloading " + watchlistMovieRepository.save(new WatchlistMovie("Rapunzel", 97, 5)));
//
   //     };
   // }
}
