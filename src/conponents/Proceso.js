import React from "react";
import uno from "../assets/img/1.png";
import dos from "../assets/img/2.png";
import "../conponents/Proceso.css";
export const Proceso = () => {
  return (
    <section className="container-procesos">
      <div className="titulo-proceso">
        <h2>Proceso</h2>
      </div>
      <div className="container-pasos">
      <img src={uno} href  className="img-proceso" />
      <img src={dos} href  className="img-proceso" />
      </div>
    </section>
  );
};
