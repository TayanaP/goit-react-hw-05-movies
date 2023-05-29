import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    // console.log(query);

    getMovieByQuery(query)
      .then(setMovies)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, [searchParams]);

  // const onSubmit = movie => {
  //   setSearchParams({ query: movie });
  // };
  // console.log(movies);

  return (
    <>
      <SearchForm onSubmit={setSearchParams} />
      <Loader visible={showLoader} />
      {movies.length > 0 && <TrendingList movies={movies} />}
    </>
  );
};
