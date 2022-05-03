import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';

import { MovieContainer, MovieButtons } from './MovieElements';

import { db } from '../../../firebase';
import { updateDoc, doc, getDoc } from 'firebase/firestore';

import { useAuthUser } from '../../../hooks/useAuthUser';

const Movie = ({ src, title, id }) => {
  const { push } = useRouter();

  const { userData } = useAuthUser();

  // check if movie in favs
  const [inFavorites, setInFavorites] = useState(false);

  const handleClick = (id) => {
    push(`/movies/${id}`);
  };

  const handleFavorites = async (id) => {
    const userRef = doc(db, 'user', userData.id);
    let newFavorites;

    if (userData.favoritesMovies.some((moviesId) => moviesId === id)) {
      newFavorites = userData.favoritesMovies.filter(
        (moviesId) => moviesId !== id
      );
      console.log('Se agrego a favoritos');
    } else {
      newFavorites = [...userData.favoritesMovies, id];
      console.log('Se quito de favoritos');
    }

    await updateDoc(userRef, {
      favoritesMovies: newFavorites,
    });
  };

  return (
    <>
      {userData ? (
        <MovieContainer src={src}>
          <MovieButtons>
            <button>Play</button>
            <button onClick={() => handleClick(id)}>Details</button>
            <button onClick={() => handleFavorites(id)}>
              ⭐ {inFavorites}
            </button>
          </MovieButtons>
        </MovieContainer>
      ) : (
        <p>Cargando</p>
      )}
    </>
  );
};

export default Movie;
