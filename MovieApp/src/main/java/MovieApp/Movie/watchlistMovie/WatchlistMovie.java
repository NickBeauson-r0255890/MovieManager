package MovieApp.Movie.watchlistMovie;

import MovieApp.Movie.Movie;

import javax.persistence.Entity;

@Entity
public class WatchlistMovie extends Movie {
    private double priority;

    protected WatchlistMovie() {}

    public WatchlistMovie(String name, int duration, double priority){
        super(name, duration);
        this.setPriority(priority);
    }

    private double getPriority(){
        return this.priority;
    }

    private void setPriority(double priority) {
        this.priority = priority;
    }
}
