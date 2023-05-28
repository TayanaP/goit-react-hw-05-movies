import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';
import {
  FilmWrapper,
  ImgWrap,
  Img,
  Title,
  Description,
  SubTitle,
  List,
  Detail,
  LinkList,
} from 'pages/MovieDetails/MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(setMovie).catch(console.log).finally();
  }, [movieId]);

  return (
    <>
      <FilmWrapper>
        <ImgWrap>
          <Img src={movie.src} alt={movie.title} />
        </ImgWrap>
        <div>
          <Title>{movie.original_title}</Title>
          <Description>User score: {movie.vote_average}</Description>
          <SubTitle>Overview</SubTitle>
          <Description>{movie.overview}</Description>
          <SubTitle>Genres</SubTitle>
          <List>
            {movie.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
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
