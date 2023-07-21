import { React, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../conponents/Productos.css";

import molino_bolas from "../assets/img/molino a bolas.png";
import apronfeader from "../assets/img/apromfeeder.png";
import bonbaslameras from "../assets/img/bonbaslameras.png";
import chancadora from "../assets/img/chancadora.png";
import mesa from "../assets/img/mesa.png";
import celdasdeflotacion from "../assets/img/celdasdeflotacion.png";

export const Productos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //mesa concentradora
  const handlemesaconcentradoraClick = () => {
    navigate("/productos/maquinaria/mesa_concentradora");
    setIsMenuOpen(false);
  };

  //chancadora
  const handlechancadoraClick = () => {
    navigate("/productos/maquinaria/chancadora");
    setIsMenuOpen(false);
  };
  //celdas de flotacion
  const handleceldasdeflotacionClick = () => {
    navigate("/productos/maquinaria/celda_de_flotacion");
    setIsMenuOpen(false);
  };
  //bombas lameras
  const handlebombaslamerasClick = () => {
    navigate("/productos/maquinaria/bombas_lameras");
    setIsMenuOpen(false);
  };

  //molino a bolas

  const handlemolinobolasClick = () => {
    navigate("/productos/maquinaria/molino_a_bolas");
    setIsMenuOpen(false);
  };
  //aprom freeder
  const handleapromfeederClick = () => {
    navigate("/productos/maquinaria/aprom_feeder");
    setIsMenuOpen(false);
  };

  return (
    <section className="container-productos">
      <div className="categoria-producto">
        <h2>Maquinaria Minera</h2>
      </div>
      <div className="grid-productos">
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Mesa Concentradora</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img src={mesa} href id="p" className="img-productos" />
              <div className="botones-detalles">
                <button
                  type="button"
                  class="btn btn-primary"
                  to="/productos/maquinaria/mesa_concentradora"
                  onClick={handlemesaconcentradoraClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Chancadora</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img src={chancadora} href id="p" className="img-productos" />
              <div className="botones-detalles">
                <button
                  type="button"
                  class="btn btn-primary"
                  to="/productos/maquinaria/chancadora"
                  onClick={handlechancadoraClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Celdas de Flotación</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img
                src={celdasdeflotacion}
                href
                id="p"
                className="img-productos"
              />
              <div className="botones-detalles">
                <button
                  type="button"
                  class="btn btn-primary"
                  to="/productos/maquinaria/celda_de_flotacion"
                  onClick={handleceldasdeflotacionClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
            <div className="descripcion-producto"></div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h3>Bombas lameras</h3>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img src={bonbaslameras} href id="p" className="img-productos" />
              <div className="botones-detalles">
                <button
                  type="button"
                  class="btn btn-primary"
                  to="/productos/maquinaria/bombas_lameras"
                  onClick={handlebombaslamerasClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Molino a Bolas</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img src={molino_bolas} href id="p" className="img-productos" />
              <div className="botones-detalles">
                <button
                  type="button"
                  class="btn btn-primary"
                  to="/productos/maquinaria/molino_a_bolas"
                  onClick={handlemolinobolasClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h3>Aprom Feeder</h3>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img src={apronfeader} href id="p" className="img-productos" />
              <div className="botones-detalles">
                <button
                  type="button"
                  class="btn btn-primary"
                  to="/productos/maquinaria/aprom_feeder"
                  onClick={handleapromfeederClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
