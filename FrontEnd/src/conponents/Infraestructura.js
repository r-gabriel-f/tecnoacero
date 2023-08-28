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
// Importar las demás imágenes aquí...

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
          <div className="container-slider">
            <img src={x1} alt="Slide 1" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Diseño</h3>
              <p>
                El proceso de crear un plan o concepto detallado para la
                creación de productos o piezas. Incluye la generación de
                especificaciones, planos y diseños que guiarán la fabricación.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x2} alt="Slide 2" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Modelado</h3>
              <p>
                Creación virtual de formas y geometrías en software de diseño 3D
                para visualizar y planificar cómo se verán los productos antes
                de la fabricación.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x3} alt="Slide 3" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Moldeo</h3>
              <p>
                Proceso de crear moldes que se utilizarán para dar forma a los
                materiales fundidos. Puede implicar moldes de arena, moldes
                metálicos, moldes cerámicos, entre otros.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x4} alt="Slide 4" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Fundición</h3>
              <p>
             
                Proceso de verter metal fundido en un molde para crear piezas
                fundidas sólidas con la forma deseada. Es fundamental en la
                creación de objetos metálicos.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x5} alt="Slide 5" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Acabado</h3>
              <p>
                Proceso posterior a la fundición que implica la eliminación de
                rebabas, imperfecciones y otras irregularidades de las piezas
                fundidas, mejorando su apariencia y funcionalidad.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x6} alt="Slide 6" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Tratamientos Termicos</h3>
              <p>
                Procesos controlados de calentamiento y enfriamiento aplicados a
                las piezas para mejorar sus propiedades físicas y mecánicas,
                como la dureza y la resistencia.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x7} alt="Slide 8" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Laboratorio</h3>
              <p>
                Un espacio equipado con instrumentos y herramientas
                especializados para realizar análisis, pruebas y evaluaciones,
                como pruebas de control de calidad o análisis de materiales.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x8} alt="Slide 8" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Maestranza</h3>
              <p>
                Lugar de torneria
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x9} alt="Slide 9" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Control de calidad</h3>
              <p>
            
                Proceso de supervisión y evaluación sistemática de los productos
                fabricados para asegurar que cumplan con los estándares de
                calidad establecidos y satisfagan las expectativas del cliente.
              </p>
            </div>
          </div>
          <div className="container-slider">
            <img src={x10} alt="Slide 10" className="img-infraestructura" />
            <div className="slider-titulo">
              <h3>Metrologia</h3>
              <p>
                Conjunto de actividades relacionadas con la medición y control
                de las dimensiones y características de las piezas fabricadas.
                Incluye la calibración de instrumentos, la inspección de piezas,
                el control de dimensiones, el control de calidad y la
                trazabilidad de las mediciones.
              </p>
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
