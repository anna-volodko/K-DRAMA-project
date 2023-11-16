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
        <>
        {MovieDescription.map((movie) => (
          <div className='card' key={movie.id}>
            <p>{movie.title}</p>
            <p>{movie.original}</p>
            <img className='poster' src={movie.poster} alt={movie.title} />
            <p>{movie.rating}</p>
            <p>{movie.releaseYear}</p>
          </div>
        ))}
      </>
  );
};

