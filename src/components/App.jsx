import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoaderSpinner } from 'components/Loader/Loader';
import { SharedLayout } from 'layout/common/SharedLayout';
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('pages/MovieDetails/MovieCast'));
const MovieReviews = lazy(() => import('pages/MovieDetails/MovieReviews'));
export const App = () => {
  return (
    <div>
      <Suspense fallback={<LoaderSpinner />}>
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="credits" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
