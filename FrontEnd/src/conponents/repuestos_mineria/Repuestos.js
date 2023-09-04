import { React, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../productos_mineria/Productos.css";

import molino_bolas from "../../assets/img/productos/molino a bolas.png";
import apronfeader from "../../assets/img/productos/apromfeeder.png";
import bonbaslameras from "../../assets/img/productos/bonbaslameras.png";
import chancadora from "../../assets/img/productos/chancadora.png";
import mesa from "../../assets/img/productos/mesa.png";
import celdasdeflotacion from "../../assets/img/productos/celdasdeflotacion.png";
export const Repuestos = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    window.scrollTo({ top: 0, behavior: "smooth" });
    const navigate = useNavigate();
  
    //mesa concentradora
    const handlemesaconcentradoraClick = () => {
      navigate("/repuestos/maquinaria/mesa_concentradora");
      setIsMenuOpen(false);
    };
  
    //chancadora
    const handlechancadoraClick = () => {
      navigate("/repuestos/maquinaria/chancadora");
      setIsMenuOpen(false);
    };
    //celdas de flotacion
    const handleceldasdeflotacionClick = () => {
      navigate("/repuestos/maquinaria/celda_de_flotacion");
      setIsMenuOpen(false);
    };
    //bombas lameras
    const handlebombaslamerasClick = () => {
      navigate("/repuestos/maquinaria/bombas_lameras");
      setIsMenuOpen(false);
    };
  
    //molino a bolas
  
    const handlemolinobolasClick = () => {
      navigate("/repuestos/maquinaria/molino_a_bolas");
      setIsMenuOpen(false);
    };
    //aprom freeder
    const handleapromfeederClick = () => {
      navigate("/repuestos/maquinaria/aprom_feeder");
      setIsMenuOpen(false);
    };
  
    return (
      <section className="container-productos" transition-style>
        <div className="categoria-producto">
          <h2>Repuestos de Maquinaria Minera</h2>
        </div>
        <div className="grid-productos">
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
                    className="boton"
                    to="/repuestos/maquinaria/molino_a_bolas"
                    onClick={handlemolinobolasClick}
                  >
                    Ver Repuestos
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
                    className="boton"
                    to="/repuestos/maquinaria/chancadora"
                    onClick={handlechancadoraClick}
                  >
                    Ver Repuestos
                  </button>
                </div>
              </div>
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
                    className="boton"
                    to="/repuestos/maquinaria/bombas_lameras"
                    onClick={handlebombaslamerasClick}
                  >
                    Ver Repuestos
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
                    className="boton"
                    to="/repuestos/maquinaria/celda_de_flotacion"
                    onClick={handleceldasdeflotacionClick}
                  >
                    Ver Repuestos
                  </button>
                </div>
              </div>
              <div className="descripcion-producto"></div>
            </div>
          </div>
  
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
                    className="boton"
                    to="/repuestos/maquinaria/mesa_concentradora"
                    onClick={handlemesaconcentradoraClick}
                  >
                    Ver Repuestos
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
                    className="boton"
                    to="/repuestos/maquinaria/aprom_feeder"
                    onClick={handleapromfeederClick}
                  >
                    Ver Repuestos
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
