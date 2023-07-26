import { React, useState, useEffect } from "react";
import n from "../assets/img/ojo.png";
import "./Servicios.css";
import azucarera from "../assets/img/servicios/azucarera.jpg";
import cementera from "../assets/img/servicios/cementera.jpg";
import mineria from "../assets/img/servicios/mineria.jpg";
import petrolera from "../assets/img/servicios/petrolera.jpg";
import construccion from "../assets/img/servicios/construccion.png";
import general from "../assets/img/servicios/general.png";

export const Servicios = () => {
  return (
    <section className="container-servicios">
      <div className="nombre-servicios">
        <h2>Clientes</h2>
        <h2>Tecnoacero S.R.L.</h2>
      </div>
      <div className="container-img-servicios">
        <div className="img-servicio">
          <img src={mineria} href className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Minera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={cementera} href className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Cementera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={petrolera} href className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Petrolera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={azucarera} href className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Azucarera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={construccion} href className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias de Construcción</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={general} href className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias en General</h3>
          </div>
        </div>
      </div>
      <div className="piezas-servicio-nombre">
        <h2>Fabricamos acero y sus aleaciones</h2>
      </div>
      <div className="container-parts-servicio">
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Acero al Carbono</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Fierro Nodular</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Fierro Fundido</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Hierro ni Hard</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Aceros Inoxidables</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Kromox</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Acero al Manganeso</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Bronce Fosforoso</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Bronce al Aluminio</h3>
          </div>
        </div>
        <div className="piezas-servicio">
          <img src={n} className="img-pieza-servicio" />
          <div className="nombre-pieza-servicio">
            <h3>Aceros Aleados Especiales</h3>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};
