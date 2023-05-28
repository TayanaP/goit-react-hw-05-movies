import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '97e7370b1b53c1c2e202ee9c450c39ff';

// export const getTrendingMovies = async () => {
//     try {
//         const response = await axios.get(
//             `${BASE_URL}trending/movie/week?api_key=${KEY}`
//             );
//         const moviesList = response.data.results;
//         console.log(moviesList);
//         return moviesList;
//       } catch (error) {
//         console.log(error.message);
//       }
//     };

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/movie/week?api_key=${KEY}`
  );

  return data.results;
};

export const getMovieByQuery = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );

  return data.results;
};

export const getMovieById = async movieId => {
  const { data } = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );

  return data;
};
