import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

const heroItems = [
    {
        text: "Embark on a rollercoaster of emotions with the incredible storytelling.",
        bgImage: "../assets/worstofevil.jpg"
    },
    {
        text: "Immerse yourself in the rich cultural tapestry through the lens of K-dramas.",
        bgImage: "../assets/glory.jpg"
    },
    {
        text: "Experience the perfect blend of romance, drama, and excitement.",
        bgImage: "../assets/chacha.jpg"
    },
    {
        text: "Escape reality and be transported to a realm of love, laughter, and suspense.",
        bgImage: "../assets/penthouse.jpg"
    },
    {
        text: "Witness the magnetic chemistry of talented actors and actresses.",
        bgImage: "../assets/doona.jpg"
    },
    {
        text: "Explore a world of diverse characters and compelling narratives.",
        bgImage: "../assets/beyondevil.jpg"
    }  
]
export default function Hero() {
    const settings = {
      dots: true,

      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  return (
    <Slider {...settings}>
        {heroItems.map((item, index) => (
                <div className="hero_item" key={index}>
                    <div className="hero_bg" style={{background: `linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%), url(${item.bgImage})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                    }}>
                    <div className="container">
                        <p className="hero_text">{item.text}</p>
                    </div>
                    </div>
                </div>
            ))}
    </Slider>
  );
}

