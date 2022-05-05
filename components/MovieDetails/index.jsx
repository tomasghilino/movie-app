import React from 'react';
import useMovieById from '../../hooks/useMovieById';

import { Hero } from '../HomeApp/HomeAppElements';

import { MovieDetailsLayout, MovieDetailsBgImage, MovieDetailsContent, MovieDetailsTitle, MovieDetailsOverview, MovieDetailsGenres } from './MovieDetailsElements';

    

const MovieDetails = () => {
    
    const { movieById } = useMovieById();

    return ( 
        <>
            { Object.keys(movieById).length > 0 ? (
            <Hero>
                <MovieDetailsLayout>
                    
                    <MovieDetailsBgImage src={`https://image.tmdb.org/t/p/original${movieById.backdrop_path}`} alt="" />
                    
                    <MovieDetailsContent>
                        <MovieDetailsTitle>
                            <a href={movieById.homepage}>{movieById.title}</a>
                            <MovieDetailsGenres>
                                {movieById.genres.map(genre => 
                                    <p key={genre.id}>{genre.name}</p>    
                                )}
                            </MovieDetailsGenres>
                            <p>{movieById.vote_average}</p>
                        </MovieDetailsTitle>
                        
                        <MovieDetailsOverview>
                            {movieById.overview}
                        </MovieDetailsOverview>
                    </MovieDetailsContent>
                </MovieDetailsLayout>  
            </Hero>
        ) : (
            <h1>jaja</h1>    
        )}
        </>
    );
}
 
export default MovieDetails;