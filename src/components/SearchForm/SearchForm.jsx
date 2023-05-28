import { useState } from 'react';
import { Form, Input, Button } from 'components/SearchForm/SearchForm.styled';

// export const SearchForm = ({ setSearchParams }) => {
//   const [query, setQuery] = useState('');

//   const handleSubmit = e => {
//     e.preventDefault();

//     setSearchParams({ query });
//   };

//   const handleSearchParams = ({ target: { value } }) => {
//     setQuery(value);
//   };

//   return <div>Form</div>;
// };

export const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.target.query);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!query) {
      alert('Select any movie');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name movie"
        autoFocus
        value={query}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
