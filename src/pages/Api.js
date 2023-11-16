import axios from 'axios';

const API_KEY = 'a80e9550bcc216e373c39f9aeaf8ffd4';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getPopularMovie = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=vote_average.desc&vote_count.gte=1300`
      );
  
      const movieDescription = response.data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        rating: movie.vote_average,
        releaseYear: new Date(movie.release_date).getFullYear(),
        original: movie.original_title,
        overview: movie.overview,
        genres: movie.genres,
      }));
  
      return movieDescription.slice(0, 10);
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  export const getPopularShow = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko&sort_by=vote_average.desc&vote_count.gte=50`
      );
  
      const showDescription = response.data.results.map((show) => ({
        id: show.id,
        title: show.name,
        poster: `https://image.tmdb.org/t/p/w500${show.poster_path}`,
        rating: show.vote_average,
        releaseYear: new Date(show.first_air_date).getFullYear(),
        original: show.original_name,
        overview: show.overview,
        episodes: show.number_of_episodes,
        genres: show.genres,
      }));
  
      return showDescription.slice(0, 10);
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

 