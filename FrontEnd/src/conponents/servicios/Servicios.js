import { React } from "react";
import "../servicios/Servicios.css";
import { DatosServicios } from "../../datos/DatosServicios";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Servicios = () => {
  return (
    <section className="container-servicios">
      <div className="nombre-servicios">
        <h2>Clientes</h2>
      </div>
      <div className="container-img-servicios">
        {DatosServicios.map((servicio, i) => (
          <div className="img-servicio" key={i}>
            <LazyLoadImage
              src={servicio.img}
              href="/"
              alt={servicio.name}
              className="img-servicios"
            />
            <div className="tipo-servicio">
              <h3>{servicio.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
