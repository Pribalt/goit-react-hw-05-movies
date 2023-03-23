import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item } from 'components/MovieList/MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </Item>
      ))}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};
