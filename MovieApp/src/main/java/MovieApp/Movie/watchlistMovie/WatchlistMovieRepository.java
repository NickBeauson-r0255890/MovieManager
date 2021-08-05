package MovieApp.Movie.watchlistMovie;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface WatchlistMovieRepository extends CrudRepository<WatchlistMovie, UUID> {
}
