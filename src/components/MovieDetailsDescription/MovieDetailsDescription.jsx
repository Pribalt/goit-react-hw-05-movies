import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Section,
  Wrapper,
  Image,
  Title,
  Span,
  Text,
  Subtitle,
  Genres,
  WrapperInformation,
  TitleInformation,
  List,
  Item,
} from 'components/MovieDetailsDescription/MovieDetailsDescription.Styled';

const MovieDetailsDescription = ({
  movie: { poster_path, title, release_date, vote_average, overview, genres },
}) => {
  return (
    <Section>
      <Wrapper>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://hryoutest.in.ua/uploads/images/default.jpg`
          }
          alt="{title}"
          width={300}
        />
        <div>
          <Title>
            {title}
            {release_date && <Span>({release_date.split('-')[0]})</Span>}
          </Title>
          <Text>User Score: {Math.round(vote_average * 10)}%</Text>
          <Subtitle>Overview</Subtitle>
          <Text>{overview}</Text>
          <Subtitle>Genres</Subtitle>
          <List>
            {genres &&
              genres.map(({ id, name }) => <Genres key={id}>{name}</Genres>)}
          </List>
        </div>
      </Wrapper>
      <WrapperInformation>
        <TitleInformation>Additional information</TitleInformation>
        <List>
          <Item>
            <Link to={`cast`}>Cast</Link>
          </Item>

          <Item>
            <Link to={`reviews`}>Reviews</Link>
          </Item>
        </List>
      </WrapperInformation>
    </Section>
  );
};

export default MovieDetailsDescription;

MovieDetailsDescription.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
