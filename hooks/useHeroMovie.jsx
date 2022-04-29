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
        `https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=1`
      );

      setHeroData({
        ...heroData,
        src: `https://image.tmdb.org/t/p/original${res.data.results[0].backdrop_path}`,
        name: res.data.results[0].name,
        vote: res.data.results[0].vote_average,
        id: res.data.results[0].id,
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
