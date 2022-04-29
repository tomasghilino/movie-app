import React, { useEffect, useState, useContext } from 'react';

// styles
import { Hero, HeroDesc, HeroCTA } from './HomeAppElements';

// context & hook
import useMovies from '../../hooks/useMovies';

//components
import MainApp from '../MainApp';

const HomeApp = () => {
  const { onePopularMovie } = useMovies();

  return (
    <>
      <Hero>
        <img src={onePopularMovie.src} alt="home background image" />
        <HeroDesc>
          <p>⭐{onePopularMovie.vote}</p>
          <h1>{onePopularMovie.name}</h1>

          <HeroCTA>
            <button>Play</button>
            <button>Details</button>
          </HeroCTA>
        </HeroDesc>
      </Hero>
      <MainApp />
    </>
  );
};

export default HomeApp;
