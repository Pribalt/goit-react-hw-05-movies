import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'getAPI';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

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

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    <main>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : `https://hryoutest.in.ua/uploads/images/default.jpg`
        }
        alt="{title}"
        width={300}
      />
      <div>
        <h2>
          {title}
          {release_date && <span>{release_date.split('-')[0]}</span>}
        </h2>
        <p>User Score: {Math.round(vote_average * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>

          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>

      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
