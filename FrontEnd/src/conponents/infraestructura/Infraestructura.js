import React, { useState } from "react";
import "../infraestructura/Infraestructura.css";
import { DatosInfraestructura } from "../../datos/DatosInfraestructura";

export const Infraestructura = () => {
  const totalSlides = 10;
  const slideWidth = 100 / totalSlides;

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
  };

  const sliderStyle = {
    transform: `translateX(-${currentSlide * slideWidth}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <section className="container-infraestructura">
      <div className="nombre-infraestructura">
        <h2>Infraestructura</h2>
      </div>
      <div className="slider-container">
        <figure style={sliderStyle}>
          {DatosInfraestructura.map((infra, i) => (
            <div className="container-slider" key={i}>
              <img
                src={infra.img}
                alt={infra.name}
                className="img-infraestructura"
              />
              <div className="slider-titulo">
                <h3>{infra.name}</h3>
                <p>{infra.descripcion}</p>
              </div>
            </div>
          ))}
        </figure>
        <div className="slider-buttons">
          <button className="prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
};
