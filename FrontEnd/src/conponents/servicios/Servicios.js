import { React } from "react";
import "../servicios/Servicios.css";
import { DatosServicios } from "../../datos/DatosServicios";

export const Servicios = () => {
  return (
    <section className="container-servicios">
      <div className="nombre-servicios">
        <h2>Clientes</h2>
      </div>
      <div className="container-img-servicios">
        {DatosServicios.map((servicio, i) => (
          <div className="img-servicio" key={i}>
            <img
              src={servicio.img}
              loading="lazy"
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
