import { useState, useEffect } from 'react';
import { getTrending } from 'api/getTrending';
import { MainTitle } from 'components/common/MainTitle.styled';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrending().then(result => {
      const { results } = result;
      setTrendingMovies(results);
    });
  }, []);

  return (
    <div>
      <MainTitle>today's trending movies</MainTitle>
      <MovieList movies={trendingMovies} />
    </div>
  );
};

export default Home;