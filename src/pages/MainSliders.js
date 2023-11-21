import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { searchMedia } from "./Api"; 
import DescriptionModal from "./DescriptionModal"; 

export default function MainSliders() {
  const [MovieDescription, setMovieDescription] = useState([]);
  const [ShowDescription, setShowDescription] = useState([]);
  const [chosenDrama, setChosenDrama] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (drama) => {
    setChosenDrama(drama);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const findData = async () => {
      try {
        const movie = await searchMedia('', true, false);
        setMovieDescription(movie);

        const show = await searchMedia('', false, true);
        setShowDescription(show);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    findData();
  }, );
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <section className="movies container">
        <h1>Popular movies</h1>
        <div className="movie_trending">
          <Slider {...settings}>
            {MovieDescription.map((movie) => (
              <div className="card" key={movie.id} onClick={() => openModal(movie)}>
                <p className="card_title">{movie.title}</p>
                <img className="poster" src={movie.poster} alt={movie.title} />
                <div className="card_bottom">
                  <div className="runtime">
                    <img
                      src="../assets/time.svg"
                      alt="time"
                      className="time_img"
                    />
                    <p>125 m</p>
                  </div>
                  <p className="release_date">{movie.releaseYear}</p>
                </div>
              </div>
            ))}
          </Slider>
          {chosenDrama && (
        <DescriptionModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          drama={chosenDrama}
        />
      )}
        </div>
      </section>
      <section className="shows container">
        <h1>Popular shows</h1>
        <div className="shows_trending">
          <Slider {...settings}>
            {ShowDescription.map((show) => (
              <div className="card" key={show.id} onClick={() => openModal(show)}>
                <p className="card_title">{show.title}</p>
                <img className="poster" src={show.poster} alt={show.title} />
                <div className="card_bottom_show">
                  <div className="runtime">
                    <img
                      src="../assets/episode.svg"
                      alt="episode"
                      className="episode_img"
                    />
                    <p>16 episodes</p>
                  </div>

                  <p className="release_date">{show.releaseYear}</p>
                </div>
              </div>
            ))}
          </Slider>
          {chosenDrama && (
        <DescriptionModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          drama={chosenDrama}
        />
      )}
        </div>
      </section>
    </>
  );
}
