import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'getAPI';
import {
  Container,
  List,
  Itam,
  WrapImg,
  WrapText,
} from 'components/Cast/Cast.styled';

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
    <Container>
      {castMovie.length !== 0 ? (
        <List>
          {castMovie.map(({ id, profile_path, name, character }) => (
            <Itam key={id}>
              <WrapImg>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w200${profile_path}`
                      : `https://hryoutest.in.ua/uploads/images/default.jpg`
                  }
                  alt={name}
                  width={150}
                />
              </WrapImg>
              <WrapText>
                <p>{name}</p>
                <p>Character: {character}</p>
              </WrapText>
            </Itam>
          ))}
        </List>
      ) : (
        <p>We have no information about the cast</p>
      )}
    </Container>
  );
};

export default Cast;
