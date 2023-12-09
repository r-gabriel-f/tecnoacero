import { React } from "react";

import "../productos_mineria/Productos.css";
import DatosProductos from "../../datos/DatosProductos";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Productos = () => {
  const products = DatosProductos();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-productos" >
      <div className="categoria-producto">
        <h2>Productos de Maquinaria Minera</h2>
      </div>
      <div className="grid-productos">
        {products.map((pro, i) => (
          <div className="productos" key={i}>
            <div className="nomnbre-producto">
              <h2>{pro.name}</h2>
            </div>
            <div className="container-img-producto">
              <div className="img-producto">
                <LazyLoadImage
                  src={pro.img}
                  alt={pro.name}
                  id="p"
                  className="img-productos"
                />
                <div className="botones-detalles">
                  <button
                    type="button"
                    className="boton"
                    to={pro.to}
                    onClick={pro.direc}
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
