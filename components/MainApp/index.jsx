import React from 'react';

import { MainAppDiv } from './MainAppElements';

import useMovies from '../../hooks/useMovies';
import MovieSlider from '../ui/MovieSlider';
const MainApp = () => {
  const { popularMovies } = useMovies();

  return (
    <MainAppDiv>
      <h1>Popular Movies</h1>
      <MovieSlider movies={popularMovies} />
    </MainAppDiv>
  );
};

export default MainApp;
