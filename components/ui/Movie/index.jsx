import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import {
  MovieContainer,
  MovieButtonsWrapper,
  MovieCTAButton,
  FavoriteButton,
} from './MovieElements';

import { db } from '../../../firebase';
import { updateDoc, doc, getDoc } from 'firebase/firestore';

import { useAuthUser } from '../../../hooks/useAuthUser';

const Movie = ({ src, title, id }) => {
  const { push } = useRouter();

  const { userData } = useAuthUser();

  // check if movie in favs
  const [inFavorites, setInFavorites] = useState(false);

  useEffect(() => {
    if (Object.keys(userData).length > 0) {
      setInFavorites(userData.favoritesMovies.includes(id));
    }
  }, [userData]);

  const handleClick = (id) => {
    push(`/movies/${id}`);
  };

  const handleFavorites = async (id) => {
    const userRef = doc(db, 'user', userData.id);
    let newFavorites;

    try {
      if (userData.favoritesMovies.some((moviesId) => moviesId === id)) {
        newFavorites = userData.favoritesMovies.filter(
          (moviesId) => moviesId !== id
        );
      } else {
        newFavorites = [...userData.favoritesMovies, id];
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
      <MovieContainer src={src}>
        <MovieButtonsWrapper>
          <MovieCTAButton>Play</MovieCTAButton>
          <MovieCTAButton onClick={() => handleClick(id)}>
            Details
          </MovieCTAButton>
          <FavoriteButton
            inFavorites={inFavorites}
            onClick={() => handleFavorites(id)}
          >
            ⭐
          </FavoriteButton>
        </MovieButtonsWrapper>
      </MovieContainer>
    </>
  );
};

export default Movie;
