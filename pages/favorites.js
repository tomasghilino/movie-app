import React, { useState, useEffect } from 'react';

import Layout from '../components/Layout';
import MovieSlider from '../components/ui/MovieSlider';
import Movie from '../components/ui/Movie';

import { useAuthUser } from '../hooks/useAuthUser';

const Favorites = () => {
  const { userData } = useAuthUser();

  const [movies, setMovies] = useState();
  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      setMovies(userData.favoritesMovies);
    }
  }, [userData]);

  return (
    <Layout>
      {movies ? (
        <div>
          <h1>Estas son tus peliculas en favoritos:</h1>
          <MovieSlider>
            {movies.map((movieId) => (
              <Movie id={movieId} />
            ))}
          </MovieSlider>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </Layout>
  );
};

export default Favorites;
