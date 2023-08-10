import React, { useState, useEffect } from "react";
import uno from "../assets/img/1.png";
import dos from "../assets/img/2.png";

import "../conponents/Proceso.css";
export const Proceso = () => {
  const [imagen, setImagen] = useState(dos); // Inicialmente, muestra la imagen "2.png"

  useEffect(() => {
    const cambiarImagenSegunAncho = () => {
      if (window.innerWidth <= 767) {
        setImagen(uno); // Cambia la imagen a "1.png" si el ancho es menor o igual a 767px
      } else {
        setImagen(dos); // Mantén la imagen "2.png" para anchos mayores a 767px
      }
    };
    window.addEventListener("resize", cambiarImagenSegunAncho);
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
