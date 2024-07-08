"use client";

interface IMovies {
  title: string;
  id: string;
  poster_path: string;
}
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider(
  { similarMovies },
  {}: { similarMovies: any }
) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {similarMovies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.backdrop_path} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </Slider>
  );
}
