import { useState, useEffect } from 'react';
import { getTrending } from '..//getAPI';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const { results } = await getTrending();

        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      {isloading && <div>Loading...</div>}
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </main>
  );
};
export default Home;
