import React from "react";
import nn from "../assets/img/ojo.png";

export const Servicios = () => {
  return (
    <sectionm className="container-productos">
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Servicion</h2>
        </div>
        <div className="container-img-producto">
          <div className="img-producto">
            <img src={nn} href id="p" className="img-productos" />
          </div>
          <div className="descripcion-producto">
            <p>TECNOACERO S.R.L.</p>
            <p>
              Actualmete atiende a clientes a nivel nacional de los siguientes
              segmentos:
            </p>
            <ul>
              <li>Industria Minera</li>
              <li>Industria Cementera</li>
              <li>Industria Petrolera</li>
              <li>Industria Azucarera</li>
              <li>Industria en General</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Fabricamos acero y sus aleaciones</h2>
        </div>
        <div className="container-img-producto">
          <div className="descripcion-producto">
            <ol>
              <li>Acero al Carbono</li>
              <ul>
                <li>Bajo Carbono</li>
                <li>Medio Carbono</li>
                <li>Alto Carbono</li>
                <li>Alto Carbono al Cromo Moly</li>
                <li>Aceros Aleados Especiales</li>
              </ul>
              <li>Fierro Nodular</li>
              <li>Fierro Fundido</li>
              <li>Hierro ni Hard</li>
              <li>Aceros Inoxidables</li>
              <li>Kromox</li>
              <li>Acero al Manganeso</li>
              <li>Bronce Fosforoso</li>
              <li>Bronce al Aluminio</li>
            </ol>
          </div>
          <div className="img-producto">
            <img src={nn} href id="nn" className="img-servicio-one" />
          </div>
        </div>
      </div>
    </sectionm>
  );
};
