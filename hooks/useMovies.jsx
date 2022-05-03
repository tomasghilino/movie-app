import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const useMovies = () => {
  const [onePopularMovie, setOnePopularMovie] = useState({
    src: '',
    name: '',
    vote: 0,
    id: null,
  });
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const router = useRouter();

  // GET ONE RANDOM POPULAR MOVIE
  const fetchOneRandomMov = async () => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY_MOVIE;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=1`
      );

      const randomPopularMovie = Math.floor(
        Math.random() * res.data.results.length
      );

      setOnePopularMovie({
        ...onePopularMovie,
        src: `https://image.tmdb.org/t/p/original${res.data.results[randomPopularMovie].backdrop_path}`,
        name: res.data.results[randomPopularMovie].title,
        vote: res.data.results[randomPopularMovie].vote_average,
        id: res.data.results[randomPopularMovie].id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // GET ARRAY WITH 20 POPULAR MOVIES
  const fetchPopularMovies = async () => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY_MOVIE;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&page=1`
      );

      setPopularMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // GET ARRAY WITH 20 TOP RATED MOVIES
  const fetchTopRatedMovies = async () => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY_MOVIE;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&page=1`
      );

      setTopRatedMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // GET ARRAY WITH 20 UPCOMING MOVIES
  const fetchUpcomingMovies = async () => {
    const apikey = process.env.NEXT_PUBLIC_API_KEY_MOVIE;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&page=1`
      );

      setUpcomingMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // Get Data
  useEffect(() => {
    fetchOneRandomMov();
    fetchPopularMovies();
    fetchTopRatedMovies();
    fetchUpcomingMovies();
  }, []);

  return { onePopularMovie, popularMovies, topRatedMovies, upcomingMovies };
};

export default useMovies;
