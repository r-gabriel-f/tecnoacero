import React from "react";
import "../inicio/Inicio.css";
import { Institucion } from "../institucion/Institucion";

export const Inicio = () => {
  return (
    <section className="container-inicio">
      <div className="contenido-inicio">
        <div className="center-content">
          <h1 className="h1-margin">TECNOACERO S.R.L.</h1>
          <p>
            Es una empresa industrial cochabambina, presente en el mercado 14
            años, colaborando a la industria boliviana.
          </p>
          <p>
            Ofrecemos equipos completos y piezas de repuestosde acero, la
            materia prima se funde y fabrica en la empresa garantizando la
            calidad de cada producto
          </p>
          <p>
            Poseemos tecnologia que so solo mejora los procesos de produccion,
            tambien es amigable con el medio ambiente
          </p>
        </div>
      </div>

      <div className="intitucion">
        <Institucion />
      </div>
    </section>
  );
};
