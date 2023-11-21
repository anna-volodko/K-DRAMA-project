import axios from "axios";

const API_KEY = "a80e9550bcc216e373c39f9aeaf8ffd4";
const BASE_URL = "https://api.themoviedb.org/3";
const ALL_RESULTS = "/search/multi";


export async function searchMedia(searchText, typeMovie, typeShow) {
  try {
    let link = "";
    if (searchText) {
      link = `${BASE_URL}${ALL_RESULTS}?api_key=${API_KEY}&language=en&query=${searchText}&include_adult=false&region=KO`;
    } else {
      if (typeMovie) {
        link = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc&region=KO`;
      } else if (typeShow) {
        link = `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc&region=KO`;
      }
    }

    const response = await axios.get(link);
    const data = response.data.results.map((item) => {
      const posterImage = item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : "../assets/img_placeholder.png";

      return {
        id: item.id,
        title: item.title || item.name,
        poster: posterImage,
        rating: item.vote_average,
        releaseYear:
          (item.release_date && new Date(item.release_date).getFullYear()) ||
          (item.first_air_date && new Date(item.first_air_date).getFullYear()),
        overview: item.overview,
        original: item.original_title || item.original_name,
        voters: item.vote_count,
      };
    });

    return data.slice(0, 10);
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
