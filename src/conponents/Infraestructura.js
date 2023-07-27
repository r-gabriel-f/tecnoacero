import React from "react";
import "./Infraestructura.css";
import x1 from "../assets/img/caratulan.png";
import x2 from "../assets/img/apromfeeder.png";
import x3 from "../assets/img/bonbaslameras.png";
import x4 from "../assets/img/carrogranby.png";
import x5 from "../assets/img/carrometalero.png";
import x6 from "../assets/img/celdasdeflotacion.png";
import x7 from "../assets/img/chancadora.png";
import x8 from "../assets/img/locomotorarhino.png";
import x9 from "../assets/img/mesa.png";
import x10 from "../assets/img/molino a bolas.png";
import x11 from "../assets/img/objetivo.png";
import x12 from "../assets/img/ojo.png";
export const Infraestructura = () => {
  return (
    <section className="container-infraestructura">
      <div className="nombre-infraestructura">
        <h2>Infraestructura</h2>
      </div>
      <div className="container-img-infraestructura">
        <div className="slider-container">
          <div className="container-slider">
            <img src={x1} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Diseño</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x2} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Modelo</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x3} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Moldeo</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x4} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Fundición</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x5} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Vaciado de Molde</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x6} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Tratamiento Terminco</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x7} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Esmerilado</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x8} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Maquinado</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x9} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Control de Calidad</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x10} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Acabado Final</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x11} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Depacho</h3>
            </div>
          </div>
          <div className="container-slider">
            <img src={x12} href className="img-infraestructura" />
            <div className="tipo-infraestructura">
              <h3>Post-Venta</h3>
            </div>
          </div>
        </div>
      </div>
      <button class="prev-btn">&#10094;</button>
      <button class="next-btn">&#10095;</button>
    </section>
  );
};
