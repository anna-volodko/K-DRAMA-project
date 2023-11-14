import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

//PAGES//
import PopularMovies from "./PopularMovies"
import NewMovies from "./NewMovies"

export default function MainSliders() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <section className="movies container">
        <h1>Movies</h1>
        <h2>Trending now</h2>
        <div className="movie_trending">
          <Slider {...settings}>
            <PopularMovies/>
          </Slider>
        </div>
        <h2>Top 10</h2>
        <div className="movie_top">
          <Slider {...settings}>
            <NewMovies/>
          </Slider>
        </div>
      </section>
      <section className="shows container">
        <h1>Shows</h1>
        <h2>Trending now</h2>
        <div className="shows_trending"></div>
        <h2>Top 10</h2>
        <div className="shows_top"></div>
      </section>
    </>
  );
}
