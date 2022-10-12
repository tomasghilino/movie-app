import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
  MovieContainer,
  MovieButtonsWrapper,
  MovieCTAButton,
  FavoriteButton,
} from './MovieElements';

import { db } from '../../../firebase';
import { updateDoc, doc } from 'firebase/firestore';

import { useAuthUser } from '../../../hooks/useAuthUser';

const Movie = ({ movie }) => {
  const { push } = useRouter();

  const { userData } = useAuthUser();

  // check if movie in favs
  const [inFavorites, setInFavorites] = useState(false);

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      setInFavorites(
        userData.favoritesMovies.some((favsMovie) => favsMovie.id === movie.id)
      );
    }
  }, [userData]);

  const handleClick = () => {
    push(`/movies/${movie.id}`);
  };

  const handleFavorites = async () => {
    const userRef = doc(db, 'user', userData.id);
    let newFavorites = [];

    try {
      if (
        userData.favoritesMovies.some((favsMovie) => favsMovie.id === movie.id)
      ) {
        newFavorites = userData.favoritesMovies.filter(
          (favsMovieFilter) => favsMovieFilter.id !== movie.id
        );
      } else {
        newFavorites = [
          ...userData.favoritesMovies,
          {
            id: movie.id,
            poster_path: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
            title: movie.title,
          },
        ];
      }

      await updateDoc(userRef, {
        favoritesMovies: newFavorites,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MovieContainer
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
      >
        
          <MovieCTAButton>Play</MovieCTAButton>
          <MovieCTAButton onClick={() => handleClick()}>Details</MovieCTAButton>
          <FavoriteButton
            inFavorites={inFavorites}
            onClick={() => handleFavorites()}
          >
            ⭐
          </FavoriteButton>
        
      </MovieContainer>
    </>
  );
};

export default Movie;
