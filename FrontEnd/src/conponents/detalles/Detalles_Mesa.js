import React from "react";
import "../../conponents/detalles/EstiloDetalles.css";
import mesa from "../../assets/img/productos/mesa.png";

export const Detalles_Mesa = () => {
  return (
    <section className="container-detallesproductosestilos" transition-style>
      <div className="container-detallesparts-name">
        <h2>Detalles de Mesa Concentradora</h2>
      </div>
      <div className="image-detalle">
        <img src={mesa} alt="mesa" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
          <thead>
            <tr>
              <th>CAPACIDAD</th>
              <th>-</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TAMAÑO PARTICULA</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>MOTOR ELECTRICO</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>PESO(DESPACHO)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>VOLUMEN (DESPACHADO)</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>CATEGORIA</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
