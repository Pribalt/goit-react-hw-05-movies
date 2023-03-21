import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'getAPI';

const Reviews = () => {
  const [reviewsMovie, setReviewsMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const respons = await getMovieReviews(movieId);
        setReviewsMovie(respons.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [movieId]);
  return (
    <>
      {reviewsMovie.length !== 0 ? (
        <ul>
          {reviewsMovie.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};

export default Reviews;
