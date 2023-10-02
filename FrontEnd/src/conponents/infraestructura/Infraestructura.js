import React, { useState } from "react";
import "../infraestructura/Infraestructura.css";
import { DatosInfraestructura } from "../../datos/DatosInfraestructura";

export const Infraestructura = () => {
  const itemsPorFila = 1; 
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % Math.ceil(DatosInfraestructura.length / itemsPorFila)
    );
  };

  const goToPrevSlide = () => {
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
              <img
                src={infra.img}
                alt={infra.name}
                className="img-infraestructura"
              />
            </div>
            <div className="slider-titulo">
              <h3>{infra.name}</h3>
              <p>{infra.descripcion}</p>
            </div>
          </div>
        ))}
        <button className="slider-button prev" onClick={goToPrevSlide}>
          Anterior
        </button>
        <button className="slider-button next" onClick={goToNextSlide}>
          Siguiente
        </button>
      </div>
    </section>
  );
};
