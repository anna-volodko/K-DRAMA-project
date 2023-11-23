import React from "react";
import useWatchlist from "../helpers/useWatchlist.js";

export default function WatchlistModal({ isOpen, closeModal }) {
  const { list, removeFromList } = useWatchlist();
  console.log("WatchlistModal", list);
  if (!isOpen) return null;

  return (
    <div className="watchlist_wrapper" onClick={closeModal}>
      <div className="watch_modal" onClick={(e) => e.stopPropagation()}>
        <p className="watchlist_title">Watchlist</p>
        <div className="watchlist_items">
          {list.length === 0 ? (
            <p className="watchlist_empty">Watchlist is empty. Add new items by clicking on "Add to watchlist" button in drama description.</p>
          ) : (
            list.map((item, index) => (
              <div key={index} className="watchlist_item">
                <img className="watch_poster" src={item.poster} alt={item.name} />
                <p className="watchmodal_title">{item.title} ({item.releaseYear})</p>
                <button
                  className="remove_button"
                  onClick={() => removeFromList(item.id)}
                >
                  Remove from watchlist
                </button>
              </div>
            ))
          )}
        </div>
        <button className="exit_button" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
}