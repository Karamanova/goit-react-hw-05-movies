import { useParams } from 'react-router-dom';
import { getReviews } from 'api/getMovieReviews';
import { useState, useEffect } from 'react';
import { ReviewList } from '../../components/ReviewList/ReviewList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(result => {
      setReviews(result.data.results);
    });
  }, [movieId]);

  return <div>{reviews.length > 0 && <ReviewList reviews={reviews} />}</div>;
};

export default Reviews;