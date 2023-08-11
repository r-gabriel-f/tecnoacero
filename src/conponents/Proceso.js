import React, { useState, useEffect } from "react";
import dos from "../assets/img/2.png";
import tres from "../assets/img/3.png";

import "../conponents/Proceso.css";
export const Proceso = () => {
  const [imagen, setImagen] = useState(dos); // Inicialmente, muestra la imagen "2.png"

  useEffect(() => {
    const cambiarImagenSegunAncho = () => {
      if (window.innerWidth <= 767) {
        setImagen(tres); // Cambia la imagen a "1.png" si el ancho es menor o igual a 767px
      } else {
        setImagen(dos); // Mantén la imagen "2.png" para anchos mayores a 767px
      }
    };

    cambiarImagenSegunAncho(); // Llama a la función al cargar el componente

    // Agrega un listener para actualizar la imagen al cambiar el tamaño de la pantalla
    window.addEventListener("resize", cambiarImagenSegunAncho);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", cambiarImagenSegunAncho);
    };
  }, []);

  return (
    <section className="container-procesos">
      <div className="titulo-proceso">
        <h2>Proceso</h2>
      </div>
      <div className="container-pasos">
        <img src={imagen} className="img-proceso" alt="Proceso" />
      </div>
    </section>
  );
};
