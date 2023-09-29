import React, { useState, useEffect } from "react";
import dos from "../../assets/img/proceso/2.webp";
import tres from "../../assets/img/proceso/3.webp";

import "../proceso/Proceso.css";
export const Proceso = () => {
  const [imagen, setImagen] = useState(dos);

  useEffect(() => {
    const cambiarImagenSegunAncho = () => {
      if (window.innerWidth <= 767 ) {
        setImagen(tres); 
      } else {
        setImagen(dos); 
      }
    };

    cambiarImagenSegunAncho(); 

  
    window.addEventListener("resize", cambiarImagenSegunAncho);


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
