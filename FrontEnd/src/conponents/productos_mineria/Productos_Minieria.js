import { React } from "react";

import "../productos_mineria/Productos.css";
import DatosProductosMineria from "../../datos/DatosProductosMineria";

export const Productos_Minieria = () => {
  const productsMineria = DatosProductosMineria();
  return (
    <section className="container-productos">
      <div className="categoria-producto">
        <h2>Productos de Extraccion Minera</h2>
      </div>
      <div className="grid-productos">
        {productsMineria.map((promi, i) => (
          <div className="productos" key={i}>
            <div className="nomnbre-producto">
              <h2>{promi.name}</h2>
            </div>
            <div className="container-img-producto">
              <div className="img-producto">
                <img
                  src={promi.img}
                  alt={promi.name}
                  id="p"
                  className="img-productos"
                />

                <div className="botones-detalles">
                  <button
                    type="button"
                    className="boton"
                    to={promi.to}
                    onClick={promi.direc}
                  >
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
