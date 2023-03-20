import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'getAPI';

const Cast = () => {
  const [castMovie, setCastMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const respons = await getMovieCast(movieId);
        setCastMovie(respons.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {castMovie.length !== 0 ? (
        <ul>
          {castMovie.map(({ id, profile_path, name, character }) => (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w200${profile_path}`
                    : `https://hryoutest.in.ua/uploads/images/default.jpg`
                }
                alt={name}
                width={100}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We have no information about the cast</p>
      )}
    </>
  );
};

export default Cast;
