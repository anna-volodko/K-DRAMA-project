import axios from 'axios';

const API_KEY = 'a80e9550bcc216e373c39f9aeaf8ffd4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovie = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc`
      );
  
      const movieDescription = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average,
        releaseYear: new Date(movie.release_date).getFullYear(),
      }));
  
      return movieDescription.slice(0, 10);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };

  export const getNewMovie = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=release_date.desc`
      );
  
      const movieDescription = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        duration: movie.runtime,
        rating: movie.vote_average,
        releaseYear: new Date(movie.release_date).getFullYear(),
      }));
  
      return movieDescription.slice(0, 10);
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };