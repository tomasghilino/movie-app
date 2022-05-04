import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const useMovieById = () => {

    const  router  = useRouter();
    const [movie, setMovie] = useState({});

    const fetchMovieById = async () => {
        const apikey = process.env.NEXT_PUBLIC_API_KEY_MOVIE;
        const { id } = router.query;
        try {
            const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apikey}&page=1`
            );

            setMovie(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    
    useEffect(()=>{
        if(router.isReady){
            fetchMovieById();
        }
    }, [router.isReady]);
    

    return { movie };
}
 
export default useMovieById;