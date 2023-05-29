import { useState } from 'react';
import { Form, Input, Button } from 'components/SearchForm/SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) {
      alert('Select any movie');
      return;
    }
    onSubmit({ query: value });
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name movie"
        autoFocus
        onChange={handleChange}
        value={value}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};
