import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import MovieSlider from '../components/ui/MovieSlider';
import { MovieSliderWrapper } from '../components/MainApp/MainAppElements';
import { css } from 'styled-components';

import { useAuthUser } from '../hooks/useAuthUser';

const Favorites = () => {
  const { userData } = useAuthUser();

  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      setMovies(userData.favoritesMovies);
    }
  }, [userData]);

  return (
    <Layout>
      {movies.length > 0 ? (
        <div
          css={css`
            padding: 12rem;
            height: 100%;
            margin: auto 0;
          `}
        >
          <h1>Estas son tus peliculas en favoritos:</h1>
          <div>
            <MovieSliderWrapper>
              <MovieSlider movies={movies} />
            </MovieSliderWrapper>
          </div>
        </div>
      ) : (
        <div
          css={css`
            padding: 12rem;
            height: 100%;
            margin: auto 0;
          `}
        >
          <p>No tienes peliculas en favoritos</p>
        </div>
      )}
    </Layout>
  );
};

export default Favorites;
