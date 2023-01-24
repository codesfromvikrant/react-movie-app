// Configuration setup for TMDB API

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8affd7e9aa1bbcaf696efe27fede3ce1';

// Search for movies
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;

// Popular Movies
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w780';

export {
  API_URL,
  API_KEY,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}