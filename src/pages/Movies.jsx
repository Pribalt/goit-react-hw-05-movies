import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getSearchMovies } from 'getAPI';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!movieName) return;

    setLoading(true);

    async function fetchData() {
      try {
        const { results } = await getSearchMovies(movieName);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieName]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <main>
      {loading && <div>Loading...</div>}
      <SearchMovie onChange={updateQueryString} />
      {movies && <MovieList movies={movies} />}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}
      />
    </main>
  );
};
export default Movies;
