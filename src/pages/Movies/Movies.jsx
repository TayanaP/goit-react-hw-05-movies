import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('movies');
    if (!query) return;

    getMovieByQuery(query).then(setMovies).catch(console.log).finally();
  }, [searchParams]);

  const onSubmit = movie => {
    setSearchParams({ movie });
  };
  console.log(movies);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <TrendingList movies={movies} />
    </>
  );
};
