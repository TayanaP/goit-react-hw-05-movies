import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { Loader } from 'components/Loader/Loader';
import {
  FilmWrapper,
  ImgWrap,
  Img,
  Title,
  Description,
  SubTitle,
  List,
  Item,
  Detail,
  LinkList,
} from 'pages/MovieDetails/MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true);
    getMovieById(movieId)
      .then(setMovie)
      .catch(console.log)
      .finally(() => setShowLoader(false));
  }, [movieId]);
  if (!movie) return;

  return (
    <>
      {showLoader && <Loader visible={showLoader} />}
      <FilmWrapper>
        <ImgWrap>
          <Img
            src={`${
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
            }`}
          />
        </ImgWrap>
        <div>
          <Title>{movie.original_title}</Title>
          <Description>User score: {movie.vote_average}</Description>
          <SubTitle>Overview</SubTitle>
          <Description>{movie.overview}</Description>
          <SubTitle>Genres</SubTitle>
          <List>
            {movie.genres.map(genre => (
              <Item key={genre.id}>{genre.name}</Item>
            ))}
          </List>
        </div>
      </FilmWrapper>
      <Detail>Additional information</Detail>
      <LinkList>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </LinkList>
      <Suspense fallback={<div>Please wait. We are in a process...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
