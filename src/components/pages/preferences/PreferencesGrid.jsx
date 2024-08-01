import React from 'react';

import MovieCard from '../../general/MovieCard';


export default function PreferencesGrid() {

  const [localMovies, setLocalMovies] = React.useState(JSON.parse(localStorage.getItem("local-movies")));


  React.useEffect(() => {
    
    function storeData() {
      localStorage.setItem("local-movies", JSON.stringify(localMovies));
    }

    if (localMovies.length > 0) {
      storeData();
    }

  }, [localMovies]);


  return (
    <section id="movies-grid" className="flex flex-wrap justify-center gap-5 px-5 py-5">
      {localMovies.length > 0 && localMovies.map(movie => 
        <MovieCard key={movie.id} movie={movie} setLocalMovies={setLocalMovies}/>
      )}
    </section>
  );
}
