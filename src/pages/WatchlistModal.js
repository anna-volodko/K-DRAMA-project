import React from "react";

export default function WatchlistModal({ isOpen, closeModal}) {
  if (!isOpen) return null;

  return (
    <div className="watchlist_wrapper" onClick={closeModal}>
      <div className="watch_modal" onClick={(e) => e.stopPropagation()}>
        <img className="watch_poster" src="#" alt="name" />
        <div className="watch_info">
          <p className="watch_title">Hello</p>
          <p>(2000)</p>
          <button className="fav_button">Remove from watchlist</button>
        </div>
      </div>
      <button className="exit_button" onClick={closeModal}>
        X
      </button>
    </div>
    
  );
}
