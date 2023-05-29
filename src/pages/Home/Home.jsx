import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getTrendingMovies('')
      .then(setMovies)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, []);

  return (
    <>
      <Loader visible={showLoader} />
      <h1>Trending today</h1>
      <TrendingList movies={movies} />
    </>
  );
};
