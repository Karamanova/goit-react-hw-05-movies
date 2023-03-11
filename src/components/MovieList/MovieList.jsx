import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MovList, MovListItem, MovListItemPoster } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovList>
      {movies.map(movie => {
        return (
          <MovListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovListItemPoster
                src={
                  movie.poster_path
                    ? 'https://image.tmdb.org/t/p/w300' + movie.poster_path
                    : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
                }
                alt=""
              />
              {/* {movie.title} */}
            </Link>
          </MovListItem>
        );
      })}
    </MovList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};