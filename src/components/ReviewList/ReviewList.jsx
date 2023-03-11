import PropTypes from 'prop-types';
import { ReviewListItem, ReviewerName } from './ReviewList.styled';
export const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(review => {
        return (
          <ReviewListItem key={review.id}>
            <ReviewerName>{review.author}</ReviewerName>
            <p>{review.content}</p>
          </ReviewListItem>
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.array.isRequired,
};