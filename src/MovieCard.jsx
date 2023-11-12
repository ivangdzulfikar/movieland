import React from "react";

const MovieCard = ({movie}) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img
          alt={movie.Title}
          src={
            movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400"
          }
        />
      </div>
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;