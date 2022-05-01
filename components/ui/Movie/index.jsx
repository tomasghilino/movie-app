import React from 'react';
import { useRouter } from 'next/router';

import { MovieContainer, MovieButtons } from './MovieElements';


const Movie = ({ src, title, id }) => {

  const { push } = useRouter();

  const handleClick = (id) => {
    push(`/movies/${id}`);
  }

  return (
    <MovieContainer src={src}>
      <MovieButtons>
        <button>Play</button>
        <button onClick={() => handleClick(id)}>Details</button>
      </MovieButtons>
    </MovieContainer>
  );
};

export default Movie;
