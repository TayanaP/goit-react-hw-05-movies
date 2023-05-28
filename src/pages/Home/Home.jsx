import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies).catch(console.log).finally();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <TrendingList movies={movies} />
    </>
  );
};
