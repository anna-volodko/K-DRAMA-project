import axios from 'axios';

const API_KEY = 'a80e9550bcc216e373c39f9aeaf8ffd4';
const BASE_URL = 'https://api.themoviedb.org/3';
const MOVIE = '/discover/movie?';
const SHOW = '/discover/tv?';
const KO = '&with_original_language=ko';
const SORT_BY_VOTE = 'sort_by=vote_average.desc&vote_count.gte';
let PAGE = 1;
let DRAMA_TYPE = '/search/multi?';


export const getPopularMovie = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}${MOVIE}api_key=${API_KEY}${KO}&${SORT_BY_VOTE}=1300`
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
        `${BASE_URL}${SHOW}api_key=${API_KEY}${KO}&${SORT_BY_VOTE}=50`
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
      console.log(showDescription.slice(0, 10))
      return showDescription.slice(0, 10);
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  };

  