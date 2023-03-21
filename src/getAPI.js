import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ea73d929c285b7e8f7948351eebc9766';

//  список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const getTrending = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

// пошук фільму за ключовим словом на сторінці фільмів
export const getSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

// запит повної інформації про фільм для сторінки кінофільму
export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запит інформації про акторський склад для сторінки кінофільму
export const getMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запит оглядів для сторінки кінофільму
export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
