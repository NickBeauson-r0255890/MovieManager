package MovieApp.Movie;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
//https://www.baeldung.com/hibernate-inheritance
@Inheritance(strategy = InheritanceType.JOINED)
//Table per class would have been easier, but a lot of redundancy if you have a big watchlist
//Don't really know what would be best solution, since now I need to join tables to get priority & name of the movie, but (almost) no redundancy
public class Movie {

    @Id
    @GeneratedValue
    private UUID id;
    private String name;
    private int duration;
    private String genre1;
    private String genre2;
    private String genre3;

    protected Movie() {}

    public Movie(String name, int duration){
        this.setName(name);
        this.setDuration(duration);
    }

    public Movie(String name, int duration, String genre1){
        this.setName(name);
        this.setDuration(duration);
        this.setGenre1(genre1);
        this.setGenre2(null);
        this.setGenre3(null);
    }

    public Movie(String name, int duration, String genre1, String genre2){
        this.setName(name);
        this.setDuration(duration);
        this.setGenre1(genre1);
        this.setGenre2(genre2);
        this.setGenre3(null);
    }

    public Movie(String name, int duration, String genre1, String genre2, String genre3){
        this.setName(name);
        this.setDuration(duration);
        this.setGenre1(genre1);
        this.setGenre2(genre2);
        this.setGenre3(genre3);
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public String getGenre1() {
        return genre1;
    }

    public void setGenre1(String genre1) {
        this.genre1 = genre1;
    }

    public String getGenre2() {
        return genre2;
    }

    public void setGenre2(String genre2) {
        this.genre2 = genre2;
    }

    public String getGenre3() {
        return genre3;
    }

    public void setGenre3(String genre3) {
        this.genre3 = genre3;
    }
}
