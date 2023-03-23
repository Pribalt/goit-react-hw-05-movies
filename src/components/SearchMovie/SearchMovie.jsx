import { useState } from 'react';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';
import {
  Section,
  Form,
  Input,
  Button,
} from 'components/SearchMovie/SearchMovie.styled';

const SearchMovie = ({ onChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setSearchQuery(value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      toast.error('The search field is empty!');
      return;
    }

    onChange(searchQuery);
    setSearchQuery('');
  };

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleChange}
        />

        <Button type="submit">Search</Button>
      </Form>
    </Section>
  );
};

SearchMovie.propTypes = {
  onChange: PropTypes.func,
};

export default SearchMovie;
