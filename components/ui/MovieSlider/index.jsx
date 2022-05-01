import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { css } from 'styled-components';

// import required modules
import { Pagination, Navigation } from 'swiper';

// movie
import Movie from '../Movie';

const MovieSlider = ({ movies }) => {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        grabCursor={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        css={css`
          margin-top: 2rem;
        `}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Movie
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              title={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MovieSlider;
