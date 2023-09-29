import React from "react";
import "../../conponents/detalles/EstiloDetalles.css";
import bombas from "../../assets/img/productos/bonbaslameras.webp";

export const Detalles_Bombas = () => {
  return (
    <section className="container-detallesproductosestilos" transition-style>
      <div className="container-detallesparts-name">
        <h2>Detalles de Bombas Lameras</h2>
      </div>
      <div className="image-detalle">
        <img src={bombas} alt="bombas" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
          <thead>
            <tr>
              <th>BOMBAS</th>
              <th>CAUDAL MAXIMO</th>
              <th>TAMAÑO</th>
              <th>ALTURA MANOMETRICA MAXIMA</th>
              <th>TAMAÑO MAXIMO DE SOLIDOS</th>
              <th>MOTOR</th>
              <th>TOLERANCIA A ABRASION</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wifley</td>
              <td>---</td>
              <td>6</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Wifley</td>
              <td>---</td>
              <td>3</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Symonaco</td>
              <td>---</td>
              <td>6</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Galigher</td>
              <td>---</td>
              <td>2 1/2 x 2</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Denver SRL</td>
              <td>---</td>
              <td>5x4</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
            <tr>
              <td>Vogel</td>
              <td>---</td>
              <td>5x4</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>---</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
