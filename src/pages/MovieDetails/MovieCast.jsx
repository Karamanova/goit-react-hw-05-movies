import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCredits } from 'api/getMovieCredits';
import { CastList } from '../../components/CastList/CastList';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCredits(movieId).then(result => {
      setCredits(result.data.cast);
    });
  }, [movieId]);

  return <>{credits && <CastList credits={credits} />}</>;
};

export default Cast;