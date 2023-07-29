import React, { useState } from "react";
import "./Infraestructura.css";

import x1 from "../assets/img/infraestructura/modelado.jpg";
import x2 from "../assets/img/infraestructura/modeo1.jpg";
import x3 from "../assets/img/infraestructura/modeo2.jpg";
import x4 from "../assets/img/infraestructura/hornostratamiento.jpg";
import x5 from "../assets/img/infraestructura/hornosfundicion.jpg";
import x6 from "../assets/img/infraestructura/fundicion.jpg";
import x7 from "../assets/img/infraestructura/esmerilado.jpg";
import x8 from "../assets/img/infraestructura/torneria1.jpg";
import x9 from "../assets/img/infraestructura/torneria2.jpg";
import x10 from "../assets/img/infraestructura/torneria3.jpg";
import x11 from "../assets/img/infraestructura/torneria4.jpg";
// Importar las demás imágenes aquí...

export const Infraestructura = () => {
  const totalSlides = 11;
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
          <div className="container-slider">
            <img src={x1} alt="Slide 1" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>modelado</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x2} alt="Slide 2" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Moldeo 1</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x3} alt="Slide 3" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Moldeo 2</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x4} alt="Slide 4" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Hornos de Tratamiento</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x5} alt="Slide 5" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Hornos de Fundicion</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x6} alt="Slide 6" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Fundicion</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x7} alt="Slide 8" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Esmerilado</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x8} alt="Slide 8" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Torneria 1</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x9} alt="Slide 9" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Torneria 2</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x10} alt="Slide 10" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Torneria 3</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x11} alt="Slide 11" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Torneria 4</h3>
            </div>
          </div>
          
        
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
