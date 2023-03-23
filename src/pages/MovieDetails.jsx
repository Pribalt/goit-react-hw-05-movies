import { useState, useEffect, Suspense, useRef } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'getAPI';
import BackLink from 'components/BackLink/BackLink';
import MovieDetailsDescription from 'components/MovieDetailsDescription/MovieDetailsDescription';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function fetchData() {
      try {
        const respons = await getMovieDetails(movieId);
        setMovie(respons);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      <MovieDetailsDescription movie={movie} />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
