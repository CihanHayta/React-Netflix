import React, { useState,useEffect } from 'react'
import Api from '../../utis/api';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from 'react-router-dom';
import { baseImgUrl } from '../../utis/constants';



const MovieList = ( {genre} ) => {
    const [movies, setMovies] = useState();


    useEffect(() => {
        const params = {
          with_genres: genre.id,
          language: "tr",
          region: "TUR",
        };
    
        Api
          .get("/discover/movie", { params })
          .then((res) => setMovies(res.data.results));
      }, []);
    
      

  return (
    <div className="my-10">
    <h1 className="text-3xl font-semibold mb-3">{genre.name}</h1>

    <Splide
      options={{
        autoWidth: true,
        gap: "20px",
        pagination: false,
        type: "loop",
      }}
    >
      {movies?.map((movie) => (
        <SplideSlide key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img
              src={baseImgUrl + movie.poster_path}
              className="max-w-[300px] cursor-pointer rounded transition hover:scale-[1.01]"
            />
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  </div>

  )
}

export default MovieList;