import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const heroItems = [
    {
        text: "Embark on a rollercoaster of emotions with the incredible storytelling.",
        bgImage: "url(./assets/worstofevil.jpg)"
    },
    {
        text: "Immerse yourself in the rich cultural tapestry through the lens of K-dramas.",
        bgImage: "url(../assets/glory.jpg)"
    },
    {
        text: "Experience the perfect blend of romance, drama, and excitement.",
        bgImage: "url(../assets/chacha.jpg)"
    },
    {
        text: "Escape reality and be transported to a realm of love, laughter, and suspense.",
        bgImage: "url(../assets/penthouse.jpg)"
    },
    {
        text: "Witness the magnetic chemistry of talented actors and actresses.",
        bgImage: "url(../assets/doona.jpg)"
    },
    {
        text: "Explore a world of diverse characters and compelling narratives.",
        bgImage: "url(../assets/beyondevil.jpg)"
    }  
]
function HeroSlides(props) {
    const {heroItems} = props;

    return(
        <>
            {heroItems.map((item, index) => (
                <div className={`hero_item hero${index + 1}`} key={index} >
                    <div className="container">
                        <p className="hero_text">{item.text}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default function Hero() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <Slider {...settings}>
        <HeroSlides heroItems={heroItems}></HeroSlides>
    </Slider>
  );
}

