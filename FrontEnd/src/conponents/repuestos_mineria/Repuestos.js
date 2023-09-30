import { React} from "react";

import "../productos_mineria/Productos.css";

import DatosRepuestoProductos from "../../datos/DatosRepuestoProductos";
export const Repuestos = () => {
  const products = DatosRepuestoProductos();
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-productos" transition-style>
      <div className="categoria-producto">
        <h2>Repuestos de Maquinaria Minera</h2>
      </div>
      <div className="grid-productos">
        {products.map((pro, i) => (
          <div className="productos" key={i}>
            <div className="nomnbre-producto">
              <h2>{pro.name}</h2>
            </div>
            <div className="container-img-producto">
              <div className="img-producto">
                <img
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
                    Ver Repuestos
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
