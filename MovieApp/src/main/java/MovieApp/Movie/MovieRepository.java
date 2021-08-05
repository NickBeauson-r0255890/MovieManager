package MovieApp.Movie;

import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

//https://blog.netgloo.com/2014/12/18/handling-entities-inheritance-with-spring-data-jpa/

public interface MovieRepository extends CrudRepository<Movie, UUID> {
    Iterable<Movie> findByNameContainingIgnoreCase(String term);
    Iterable<Movie> findByNameContainingIgnoreCaseOrGenre1ContainingIgnoreCaseOrGenre2ContainingIgnoreCaseOrGenre3ContainingIgnoreCase(String termName, String termG1, String termG2, String termG3);


}
