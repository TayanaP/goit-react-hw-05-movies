import { useLocation, Link } from 'react-router-dom';
import {
  List,
  Item,
  Img,
  Title,
} from 'components/TrendingList/TrendingList.styled';

export const TrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, original_title, src }) => (
        <Item key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            <Img src={src} alt={original_title} />
            <Title>{original_title}</Title>
          </Link>
        </Item>
      ))}
    </List>
  );
};
