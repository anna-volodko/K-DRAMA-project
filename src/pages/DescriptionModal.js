import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";


export default function DescriptionModal({ isOpen, closeModal, drama }) {
  
  if (!isOpen) return null;

  return (
    <div className="modal_wrapper" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <img className="modal_poster" src={drama.poster} alt={drama.name} />
        <div className="modal_info">
          <p className="modal_title">{drama.title}</p>
          <p>{drama.releaseYear}</p>
          <p className="drama_about">{drama.overview}</p>
          <div className="drama_rate">
            <Box component="fieldset" borderColor="transparent">
              <Rating
                name="read-only"
                value={drama.rating / 2}
                readOnly
                sx={{ color: "#313131" }}
              />
            </Box>
            <p className="rate_text">
              {" "}
              - {drama.rating && drama.rating.toFixed(1)} ({drama.voters} votes)
            </p>
          </div>
          <button className="fav_button">Add to watchlist</button>
        </div>
        <button className="exit_button" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}
