import React, { useState } from 'react';

import { getRepos } from './services/api';

import Container from './components/Container';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import NotFound from './components/NotFound';
import EmptyList from './components/EmptyList';

function App() {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');
  const [status, setStatus] = useState(0);
  const [repository, setRepository] = useState([]);

  const handleInput = ({ target }) => {
    const { value } = target;

    if (value && value.match(/--|^-|-$|\s{1,}|\w{40,}|[^a-zA-Z\d\-{1}]/g)) {
      setInputError('Input inválido');
    } else {
      setInputError('');
    }

    setInput(value);
  };

  const handleKeyPress = event => {
    try {
      if (event.key === 'Enter' && !inputError) {
        setStatus(0);

        getRepos(input).then(json => {
          if (json.message) {
            setStatus(3);
          } else if (json.length) {
            setRepository(json);
            setStatus(2);
          } else {
            setRepository([]);
            setStatus(1);
          }
        });
      }
    } catch (err) {
      setStatus(3);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <Header />
      <Form
        value={input}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        onSubmit={handleSubmit}
        error={inputError}
      />
      {status === 3 ? (
        <NotFound />
      ) : status === 1 ? (
        <EmptyList />
      ) : status === 2 ? (
        <List repository={repository} />
      ) : (
        <div></div>
      )}
    </Container>
  );
}

export default App;
