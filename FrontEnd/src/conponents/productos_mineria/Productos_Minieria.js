import { React, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../productos_mineria/Productos.css";

import locomotorarhino from "../../assets/img/productos/locomotorarhino.webp";
import carrito from "../../assets/img/productos/carrometalero.webp";
import carrogranby from "../../assets/img/productos/carrogranby.webp";
export const Productos_Minieria = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //locomotora rhyno
  const handlelocomotorarhynoClick = () => {
    navigate("/productos/extracción_minera/locomotora_rhyno");
    setIsMenuOpen(false);
  };

  //carro metalero
  const handlecarrometaleroClick = () => {
    navigate("/productos/extracción_minera/carro_metalero");
    setIsMenuOpen(false);
  };
  //carro granby
  const handlecarrogranbyClick = () => {
    navigate("/productos/extracción_minera/carro_granby");
    setIsMenuOpen(false);
  };
  return (
    <section className="container-productos">
      <div className="categoria-producto">
        <h2>Productos de Extraccion Minera</h2>
      </div>
      <div className="grid-productos">
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Locomotora Rhyno</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img
                src={locomotorarhino}
                alt="l"
                href="/f"
                id="p"
                className="img-productos"
              />

              <div className="botones-detalles">
                <button
                  type="button"
                  className="boton"
                  to="/productos/extracción_minera/locomotora_rhyno"
                  onClick={handlelocomotorarhynoClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Carro Metalero</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img
                src={carrito}
                href="/ff"
                alt="r"
                id="p"
                className="img-productos"
              />

              <div className="botones-detalles">
                <button
                  type="button"
                  className="boton"
                  to="/productos/extracción_minera/carro_metalero"
                  onClick={handlecarrometaleroClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="productos">
          <div className="nomnbre-producto">
            <h2>Carro Granby</h2>
          </div>
          <div className="container-img-producto">
            <div className="img-producto">
              <img
                src={carrogranby}
                href="/ff"
                alt="r"
                id="p"
                className="img-productos"
              />

              <div className="botones-detalles">
                <button
                  type="button"
                  className="boton"
                  to="/productos/extracción_minera/carro_granby"
                  onClick={handlecarrogranbyClick}
                >
                  Ver Detalles
                </button>
              </div>
            </div>
            <div className="descripcion-producto"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
