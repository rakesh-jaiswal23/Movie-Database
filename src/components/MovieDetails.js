import React from "react";

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div className="movie-details">
      <button onClick={onBack} className="back-button">
        Back
      </button>
      <img src={movie.image} alt={movie.movie} className="movie-poster-large" />
      <h2>{movie.movie}</h2>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>

      <p>
        <strong>Director:</strong> {movie.Director ? movie.director : "N/A"}
      </p>
      <p>
        <strong>Actors:</strong> {movie.Actors ? movie.Actor : "N/A"}
      </p>
      <p>
        <strong>Link:</strong> {movie.imdb_url}
      </p>
    </div>
  );
};

export default MovieDetails;
