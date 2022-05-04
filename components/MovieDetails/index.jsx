import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { Hero } from '../HomeApp/HomeAppElements';

import { MovieDetailsBgImage, MovieDetailsContent, MovieDetailsTitle, MovieDetailsOverview } from './MovieDetailsElements';

    

const MovieDetails = () => {
    
    // const  router  = useRouter();
    // const { query: { id } } = router;
    const [movie, setMovie] = useState({});

    useEffect(() => {
        fetchMovieById();
    }, []);

    return ( 
        <Hero>
            <MovieDetailsBgImage src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt="" />
            
            <MovieDetailsContent>
                <div>
                    <MovieDetailsTitle>
                        <a href={movie.homepage}>{movie.title}</a>
                        <p>{movie.vote_average}</p>
                    </MovieDetailsTitle>
                    <MovieDetailsOverview>
                        {movie.overview}
                    </MovieDetailsOverview>
                </div>
                <div>
                    {/* {movie.genres.map(genre => (
                        <p>{genre.name}</p>
                    ))} */}
                </div>
            </MovieDetailsContent>  
        </Hero>
    );
}
 
export default MovieDetails;