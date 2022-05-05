import React, { useEffect, useState, useContext } from 'react';

// styles
import { Hero, HeroDesc, HeroCTA } from './HomeAppElements';

// context & hook
import useMovies from '../../hooks/useMovies';

//components
import MainApp from '../MainApp';

// user state
import { useAuthUser } from '../../hooks/useAuthUser';

const HomeApp = () => {
  const { onePopularMovie } = useMovies();
  const { userData } = useAuthUser();

  return (
    <>
      {Object.keys(userData).length > 0 ? (
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
      ) : (
        <p>Cargando...</p>
      )}
    </>
  );
};

export default HomeApp;
