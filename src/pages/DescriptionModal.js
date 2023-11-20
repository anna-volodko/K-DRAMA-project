import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";


export default function DescriptionModal({ isOpen, closeModal, drama }) {
  if (!isOpen) return null;

  return (
    <div className="modal_wrapper" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {drama.poster_path ? (
          <img
            className="modal_poster"
            src={`https://image.tmdb.org/t/p/w500${drama.poster_path}`}
            alt={drama.name}
          />
        ) : (
          <img className="modal_poster" src="../assets/img_placeholder.png" alt="" />
        )}
        <div className="modal_info">
          <p className="modal_title">{drama.title || drama.name}</p>
          <p>
            {drama.release_date &&
              (new Date(drama.release_date).getFullYear() ||
                new Date(drama.first_air_date).getFullYear())}
          </p>
          <p className="drama_about">{drama.overview}</p>
          <div className="drama_rate">
            <Box component="fieldset" borderColor="transparent">
              <Rating
                name="read-only"
                value={drama.vote_average / 2}
                readOnly
                sx={{ color: "#313131" }}
              />
            </Box>
            <p className="rate_text"> - {drama.vote_average && drama.vote_average.toFixed(1)} ({drama.vote_count} votes)</p>
          </div>
          <button className="fav_button">Add to favorite</button>
        </div>
        <button className="exit_button" onClick={closeModal}>
            X
        </button>
      </div>
    </div>
  );
}
