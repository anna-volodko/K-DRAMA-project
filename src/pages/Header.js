import React, { useState } from 'react';
import WatchlistModal from './WatchlistModal';

export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);


    function openModal(){
        setIsModalOpen(true);
      };
    
      function closeModal(){
        setIsModalOpen(false);
      };
    return (
        <header>
        <div className="navigation container">
          <div className="logo">
            <a href="#" className="logo_link">
              <img className="star" src="./assets/dots.svg" alt="" />
              <p className="logo_text">K-DRAMATIC</p>
            </a>
          </div>
          <div className="main_nav">
            <a href="#" className="nav_item">Movies</a>
            <a href="#" className="nav_item">Shows</a>
            <a href="#" className="nav_item">About Us</a>
            <a href="#" className="nav_button">
              <img src="./assets/search_icon.svg" alt="" className="icon_search" />
              Go to Search
            </a>
            <a href="#" className="nav_button" onClick={openModal}>
                Open watchlist</a>
          </div>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
        <WatchlistModal
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      </header>  
    )
}