import React, { useState } from "react";
import "../infraestructura/Infraestructura.css";
import { DatosInfraestructura } from "../../datos/DatosInfraestructura";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Infraestructura = () => {
  const itemsPorFila = 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + 1) % Math.ceil(DatosInfraestructura.length / itemsPorFila)
    );
  };

  const goToPrevSlide = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? Math.ceil(DatosInfraestructura.length / itemsPorFila) - 1
        : prevIndex - 1
    );
  };

  const startIndex = currentIndex * itemsPorFila;
  const endIndex = startIndex + itemsPorFila;
  const visibleItems = DatosInfraestructura.slice(startIndex, endIndex);

  return (
    <section className="container-infraestructura">
      <div className="nombre-infraestructura">
        <h2>Infraestructura</h2>
      </div>
      <div className="slider-container">
        {visibleItems.map((infra, i) => (
          <div className="container-slider" key={i}>
            <div className="slider-img">
              <LazyLoadImage
                src={infra.img}
                alt={infra.name}
                className="img-infraestructura"
              />
            </div>
            <div className="slider-titulo">
              <h3>{infra.name}</h3>
              <p>{infra.descripcion}</p>
              <ion-icon
                name="arrow-back-outline"
                class="slider-button prev"
                onClick={goToPrevSlide}
              ></ion-icon>
              <ion-icon
                name="arrow-forward-outline"
                onClick={goToNextSlide}
                class="slider-button next"
              ></ion-icon>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
