import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <h1> Directors Page </h1>
    {
      directors.map((director) => {
        const movies = director.movies;
    
        return (
          <div key={director.name}>
            <h2>{director.name}</h2>
            <ol>
              {movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ol>
          </div>
        );
      })
    }
  </div>)
}

export default Directors;
