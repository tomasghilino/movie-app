import React from 'react';

import { MovieContainer, MovieButtons } from './MovieElements';
const Movie = ({ src, title }) => {
  return (
    <MovieContainer src={src}>
      <MovieButtons>
        <button>Play</button>
        <button>Details</button>
      </MovieButtons>
    </MovieContainer>
  );
};

export default Movie;
