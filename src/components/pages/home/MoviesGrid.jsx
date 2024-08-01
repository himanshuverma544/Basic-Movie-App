import React from 'react';

import Axios from "axios";

import MovieCard from '../../general/MovieCard';


export default function MoviesGrid() {

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {

    async function fetchMovies() {
      try {
        const { data: { movies } } = await Axios.get(import.meta.env.VITE_BASIC_MOVIE_APP_API);
        setMovies(movies);
      }
      catch(e) {
        console.error(e);
      }
    }
    fetchMovies();
  }
  , [setMovies]);


  React.useEffect(() => {
    
    function storeData() {
      localStorage.setItem("local-movies", JSON.stringify(movies));
    }

    if (movies.length > 0) {
      storeData();
    }

  }, [movies]);

  return (
    <section id="movies-grid" className="flex flex-wrap justify-center gap-5 px-5 py-5">
      {movies.length > 0 && movies.map(movie => 
        <MovieCard key={movie.id} movie={movie}/>
      )}
    </section>
  );
}
