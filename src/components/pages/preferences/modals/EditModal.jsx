import { createPortal } from "react-dom";

import { useState, useCallback } from "react";


const EditModal = ({ movieData, setLocalMovies, closeModal }) => {

  const [url, setUrl] = useState(movieData.url);
  const [rating, setRating] = useState(movieData.rating);

  const handleEdit = e => {

    e.preventDefault();

    setLocalMovies(prevLocalMovies => {

      return (
        prevLocalMovies.map(localMovie => 
          (localMovie.id === movieData.id ? 
            {...localMovie, rating, images: { portrait: url } } :
            localMovie
          )
        )
      );
    });

    closeModal();
  }
 
  return createPortal(
      <div className="the-edit-modal overlay flex justify-center items-center">
        <div className="wrapper flex flex-col items-center justify-center gap-3 p-5 rounded-lg bg-white">

          <div className="movie-name text-lg font-semibold">
            {movieData.name}
          </div>

          <hr className="w-full"/>

          <form
            className="flex flex-col items-center justify-center gap-3"
            onSubmit={handleEdit}>

            <div className="input-group flex flex-col items-center justify-center gap-3">
              <label>
                Enter Movie Image Url
              </label>
              <input
                id="user-movie-image-url"
                name="user-movie-image-url"
                type="text"
                className="text-center border px-2 py-1"
                placeholder="Enter URL"
                value={url}
                onChange={e => setUrl(e.target.value)}
              />
            </div>

            <div className="input-group flex flex-col items-center justify-center gap-3">
              <label>
                Give your Rating
              </label>
              <input
                id="user-rating-input"
                name="user-rating"
                type="text"
                className="text-center border px-2 py-1"
                placeholder="Enter Rating"
                defaultValue={movieData.rating}
                value={rating}
                onChange={e => setRating(e.target.value)}
              />
            </div>

            <button className="w-full px-3 py-1 rounded bg-black text-white">
              Submit
            </button>

            <button className="px-3 py-1 rounded bg-black text-white" onClick={closeModal}>
              Close Modal
            </button>

          </form>
        </div>
      </div>,
    document.getElementById("edit-modal")
  );
}

export default EditModal;