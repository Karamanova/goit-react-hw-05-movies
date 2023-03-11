import PropTypes from 'prop-types';
import { GenresList, GenresListItem } from './Genres.styled';

export const Genres = ({ movieGenres }) => {
  return (
    <GenresList>
      {movieGenres.map(genre => {
        return <GenresListItem key={genre.id}>{genre.name}</GenresListItem>;
      })}
    </GenresList>
  );
};

Genres.propTypes = {
  movieGenres: PropTypes.array.isRequired,
};