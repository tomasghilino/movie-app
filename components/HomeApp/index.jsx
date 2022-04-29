import React, { useEffect, useState, useContext } from 'react';

// styles
import { Hero, HeroDesc, HeroCTA } from './HomeAppElements';

// context & hook
import useHeroMovie from '../../hooks/useHeroMovie';

const HomeApp = () => {
  const { heroData } = useHeroMovie();

  return (
    <Hero>
      <img src={heroData.src} alt="home background image" />
      <HeroDesc>
        <p>⭐{heroData.vote}</p>
        <h1>{heroData.name}</h1>

        <HeroCTA>
          <button>Play</button>
          <button>Details</button>
        </HeroCTA>
      </HeroDesc>
    </Hero>
  );
};

export default HomeApp;
