import { useLocation, Link } from 'react-router-dom';
import { List, Item } from 'components/TrendingList/TrendingList.styled';

export const TrendingList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, original_title }) => (
        <Item key={id}>
          <Link state={{ from: location }} to={`/movies/${id}`}>
            {original_title}
          </Link>
        </Item>
      ))}
    </List>
  );
};
