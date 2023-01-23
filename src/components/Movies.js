import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <div>
    <h1>Movies Page</h1>
    {
      movies.map((movie) => {
        const genres = movie.genres;
    
        return (
          <div key={movie.title}>
            <h2>{movie.title}</h2>
            <h3>{movie.time}</h3>
            <ul>
              {genres.map((genre, index) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        );
      })
    }
  </div>
  );
}

export default Movies;
