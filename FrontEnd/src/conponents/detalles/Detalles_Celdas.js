import React from "react";
import "../../conponents/detalles/EstiloDetalles.css";
import celdas from "../../assets/img/productos/celdasdeflotacion.webp";

export const Detalles_Celdas = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-detallesproductosestilos">
      <div className="container-detallesparts-name">
        <h2>Detalles de Celdas de Flotación</h2>
      </div>
      <div className="image-detalle">
        <img src={celdas} alt="celdas" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <div className="scroll-detalles">
          <table className="caracteristicas-table">
            <thead>
              <tr>
                <th>Celda de Flotación</th>
                <th>Tipo</th>
                <th>Capacidad (m³)</th>
                <th>Material de Construcción</th>
                <th>Uso Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Celda 1</td>
                <td>Columna</td>
                <td>10</td>
                <td>Acero inoxidable</td>
                <td>Flotación de mineral A</td>
              </tr>
              <tr>
                <td>Celda 2</td>
                <td>Convencional</td>
                <td>5</td>
                <td>Polímeros y acero</td>
                <td>Flotación de mineral B</td>
              </tr>
              <tr>
                <td>Celda 3</td>
                <td>Columna</td>
                <td>8</td>
                <td>Acero recubierto de goma</td>
                <td>Flotación de mineral C</td>
              </tr>
              <tr>
                <td>Celda 4</td>
                <td>Convencional</td>
                <td>7</td>
                <td>Polietileno</td>
                <td>Flotación de mineral D</td>
              </tr>
              <tr>
                <td>Celda 5</td>
                <td>Columna</td>
                <td>12</td>
                <td>Fibra de vidrio</td>
                <td>Flotación de mineral E</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
