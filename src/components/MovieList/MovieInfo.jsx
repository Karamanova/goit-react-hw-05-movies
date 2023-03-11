import PropTypes from 'prop-types';
import { releaseNormalize, ratingNormalize } from 'normalizers';
import { Genres } from 'components/Genres/Genres';
import {
  MovieInfoCard,
  MovieInfoPoster,
  MovieInfoTitle,
  MovieInfoBlock,
} from './MovieInfo.styled';

export const MovieInfo = ({ movie }) => {
  return (
    <MovieInfoCard>
      <MovieInfoPoster
        src={
          movie.poster_path
            ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
            : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'
        }
        alt=""
        width="100px"
      />
      <div>
        <MovieInfoTitle>
          {movie.title}
          {'  '}
          <span>({releaseNormalize(movie.release_date)})</span>
        </MovieInfoTitle>
        <MovieInfoBlock>
          Rating: <span>{ratingNormalize(movie.vote_average)}</span>
        </MovieInfoBlock>
        <MovieInfoBlock>Overview: {movie.overview}</MovieInfoBlock>
        <MovieInfoBlock>
          Genres:
          {<Genres movieGenres={movie.genres} />}
        </MovieInfoBlock>
      </div>
    </MovieInfoCard>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object.isRequired,
};
