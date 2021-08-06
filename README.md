# MovieManager

Application built to manage your movie collection.

Once finished:
- Have a searchable movie-overview
- Add Movies to your personal watchlist
- Share you watchlist with other users
- See what movies your friends would like to see/ what movies you both want to see
- Possibility to import your movie-collection using an excel sheet
- If possible, connect with 'Can I Stream It?' API, if it ever comes back to check if a certain movie is available on a streaming service.  
  + Make a 'streaming' watchlist that can also be shared/merged to find out what to see with friends

## Frontend: Movie-manager - Angular/Bootstrap

Currently:
| URL        | Purpose                                      | Extra's          | Status      |
|------------|----------------------------------------------|------------------|-------------|
| /dashboard | Home page/Login                              |                  | In Progress |
| /movies    | Movie overview                               | add movie/Search | Done        |
| /watchlist | Show Movies the logged in user want's to see |                  | TODO        |

Launch:   
***cd movie-manager***  
***ng serve --open*** 

## Backend: MovieApp - Spring Boot

Currently:
Basic CRUD RestController using h2 DB.


