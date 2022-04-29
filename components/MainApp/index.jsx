import React from 'react';

import { MainAppDiv } from './MainAppElements';

import useMovies from '../../hooks/useMovies';
const MainApp = () => {
  const { popularMovies } = useMovies();

  return (
    <MainAppDiv>
      <h1>Popular Movies</h1>
    </MainAppDiv>
  );
};

export default MainApp;
