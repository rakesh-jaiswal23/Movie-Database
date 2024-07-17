import React from "react";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-item"
          onClick={() => onSelectMovie(movie)}
        >
          <img
            src={"shawshank.jpg"}
            alt={movie.movie}
            className="movie-poster"
          />
          <h3>{movie.movie}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
