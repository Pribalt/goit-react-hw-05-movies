import { useState } from 'react';
import { toast } from 'react-hot-toast';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={searchQuery}
          onChange={handleChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchMovie;
