import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const useHeroMovie = () => {
  const [heroData, setHeroData] = useState({
    src: '',
    name: '',
    vote: 0,
    id: null,
  });
  const fetchData = async () => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY_MOVIE;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=1`
      );

      console.log(res);

      const randomPopularMovie = Math.floor(
        Math.random() * res.data.results.length
      );

      setHeroData({
        ...heroData,
        src: `https://image.tmdb.org/t/p/original${res.data.results[randomPopularMovie].backdrop_path}`,
        name: res.data.results[randomPopularMovie].title,
        vote: res.data.results[randomPopularMovie].vote_average,
        id: res.data.results[randomPopularMovie].id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { heroData };
};

export default useHeroMovie;
