import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMovie } from 'services/api';
import {
  List,
  Item,
  Title,
  Content,
  Info,
} from 'components/Reviews/Reviews.styled';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsMovie(movieId).then(setReviews).catch(console.log);
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <List>
          {reviews.map(({ id, author, content }) => (
            <Item key={id}>
              <Title>
                <span>Author:</span> {author}
              </Title>
              <Content>{content}</Content>
            </Item>
          ))}
        </List>
      ) : (
        <Info>No Reviews </Info>
      )}
    </>
  );
};
