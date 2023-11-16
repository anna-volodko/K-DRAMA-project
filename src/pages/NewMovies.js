import React, { useState, useEffect } from 'react';
import { getNewMovie } from './Api.js'; 

export default function MovieListWithDetails(){
  const [MovieDescription, setMovieDescription] = useState([]);

  useEffect(() => {
    const getMoviesWithDetails = async () => {
      const movies = await getNewMovie();
      setMovieDescription(movies);
    };

    getMoviesWithDetails();
  }, []);

  return (
      <>
        {MovieDescription.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.rating}</p>
            <p>{movie.releaseYear}</p>
          </div>
        ))}
      </>
  );
};
