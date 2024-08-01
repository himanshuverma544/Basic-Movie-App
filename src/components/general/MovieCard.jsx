import { Link, useLocation } from "react-router-dom";

import { useState } from "react";

import EditModal from "../pages/preferences/modals/EditModal";

import Rating from "../utility/Rating";

import { HOME } from "../../../routes";


export default function MovieCard({ movie, setLocalMovies }) {

  const location = useLocation();

  const [movieData, setMovieData] = useState(null);

  const closeModal = () => {
    setMovieData(null);
  }

  return (
    <div className="movie-card flex flex-col items-center justify-center gap-1 p-3 rounded-lg bg-primaryLight">

      <div className="img-cont w-[300px] h-[400px]">
        <img
          className="size-full object-fill rounded"
          src={movie.images.portrait}
          alt={movie.name}
        />
      </div>

      <div className="name text-base truncate font-semibold">
        {movie.name}
      </div>

      <Rating given={movie.rating / 2}/>

      <div className="release-date text-sm">
        {movie.release_date}
      </div>

      <Link className="trailer-link px-3 py-1 mt-1 rounded text-sm bg-black text-white" to={movie.trailer_link} target="_blank">
        Watch Trailer
      </Link>

      {location.pathname != HOME.pathname && 
        <button
          className="edit-btn px-3 py-1 mt-1 rounded text-sm bg-black text-white"
          onClick={() => setMovieData({
            id: movie.id,
            name: movie.name,
            url: movie.images.portrait,
            rating: movie.rating / 2
          })}
        >
          Edit Movie-Card
        </button>
      }

      {movieData &&
        <EditModal
          movieData={movieData}
          setLocalMovies={setLocalMovies}
          closeModal={closeModal}
        />
      }
    </div>
  );
}
