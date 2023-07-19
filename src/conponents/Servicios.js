import { React, useState, useEffect } from "react";
import nn from "../assets/img/ojo.png";
import "./Servicios.css";
import azucarera from "../assets/img/servicios/azucarera.jpg";
import cementera from "../assets/img/servicios/cementera.jpg";
import mineria from "../assets/img/servicios/mineria.jpg";
import petrolera from "../assets/img/servicios/petrolera.jpg";

import acerodecarbono from "../assets/img/fabricamos/acerodecarbono.jpg";
import aceroinoxidable from "../assets/img/fabricamos/acerosinoxidables.jpg";
import broncedealuminio from "../assets/img/fabricamos/broncealuminio.jpg";
import broncefosforoso from "../assets/img/fabricamos/broncefosforoso.jpg";
import fierrofundido from "../assets/img/fabricamos/fierrofundido.jpg";

export const Servicios = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentImageFrabricamosIndex, setCurrentImageFabricamosIndex] =
    useState(0);
  const images = [azucarera, cementera, mineria, petrolera];
  const imagesFrabricamos = [
    fierrofundido,
    broncedealuminio,
    broncefosforoso,
    acerodecarbono,
    aceroinoxidable,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const Interval = setInterval(() => {
      setCurrentImageFabricamosIndex(
        (prevIndex) => (prevIndex + 1) % imagesFrabricamos.length
      );
    }, 5000);
    return () => {
      clearInterval(Interval);
    };
  }, []);

  return (
    <section className="container-servicios">
      <div className="contenido">
        <div className="servicios">
          <div className="nombre-servicios">
            <h2>Clientes</h2>
          </div>
          <div className="container-img-servicios">
            <div className="img-servicios">
              <img
                src={images[currentImageIndex]}
                alt="ser"
                className="img-servicio"
              />
            </div>
            <div className="descripcion-servicios">
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
        <div className="servicios">
          <div className="nombre-servicios">
            <h2>Fabricamos acero y sus aleaciones</h2>
          </div>
          <div className="container-img-servicios">
            <div className="descripcion-servicios">
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
            <div className="img-servicios">
              <img
                src={imagesFrabricamos[currentImageFrabricamosIndex]}
                alt="ser"
                className="img-servicio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
