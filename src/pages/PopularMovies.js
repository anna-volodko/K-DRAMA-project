import React, { useState, useEffect } from 'react';
import { getPopularMovie } from './Api.js'; 

export default function MovieListWithDetails(){
  const [MovieDescription, setMoviesWithDetails] = useState([]);

  useEffect(() => {
    const getMoviesWithDetails = async () => {
      const movies = await getPopularMovie();
      setMoviesWithDetails(movies);
    };

    getMoviesWithDetails();
  }, []);

  return (
        <div>
        {MovieDescription.map((movie) => (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.rating}</p>
            <p>{movie.releaseYear}</p>
          </div>
        ))}
      </div>
  );
};

