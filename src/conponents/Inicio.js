import React from "react";
import "../conponents/Inicio.css";
import { Institucion } from "./Institucion";
export const Inicio = () => {
  return (
    <section className="container-inicio" transition-style>
      <div className="contenido">
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
