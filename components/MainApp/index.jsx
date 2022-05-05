import React, { useState, useEffect, useContext } from 'react';

import {
  MainAppDiv,
  MainAppTitle,
  MovieSliderWrapper,
} from './MainAppElements';

import useMovies from '../../hooks/useMovies';

import MovieSlider from '../ui/MovieSlider';

const MainApp = () => {
  const { popularMovies, topRatedMovies, upcomingMovies } = useMovies();

  return (
    <MainAppDiv>
      <MovieSliderWrapper>
        <MainAppTitle>Popular Movies</MainAppTitle>
        <MovieSlider movies={popularMovies} />
      </MovieSliderWrapper>

      <MovieSliderWrapper>
        <MainAppTitle>Top Rated Movies</MainAppTitle>
        <MovieSlider movies={topRatedMovies} />
      </MovieSliderWrapper>

      <MovieSliderWrapper>
        <MainAppTitle>Upcoming Movies</MainAppTitle>
        <MovieSlider movies={upcomingMovies} />
      </MovieSliderWrapper>
    </MainAppDiv>
  );
};

export default MainApp;
