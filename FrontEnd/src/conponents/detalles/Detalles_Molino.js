import React from "react";
import "../../conponents/detalles/EstiloDetalles.css";
import molino from "../../assets/img/productos/molino a bolas.webp";

export const Detalles_Molino = () => {
  return (
    <section className="container-detallesproductosestilos" transition-style>
      <div className="container-detallesparts-name">
        <h2>Detalles de Molino a Bolas</h2>
      </div>
      <div className="image-detalle">
        <img src={molino} alt="molino" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
          <thead>
            <tr>
              <th>MOLINO</th>
              <th>CARGA DE BOLAS Kg/ 45%vol</th>
              <th>POTENCIA MOTOR (HP)</th>
              <th>VELOCIDAD DE ROTACION (RPM)</th>
              <th>CAPACIDAD TONELADA POR 24 Hrs</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3X4</td>
              <td>1800</td>
              <td>15</td>
              <td>33</td>
              <td>17</td>
            </tr>
            <tr>
              <td>3X6</td>
              <td>2750</td>
              <td>20</td>
              <td>33</td>
              <td>27</td>
            </tr>
            <tr>
              <td>5X5</td>
              <td>6200</td>
              <td>50</td>
              <td>26</td>
              <td>71</td>
            </tr>
            <tr>
              <td>5X6</td>
              <td>7450</td>
              <td>60</td>
              <td>26</td>
              <td>85</td>
            </tr>
            <tr>
              <td>5X8</td>
              <td>10400</td>
              <td>75</td>
              <td>26</td>
              <td>116</td>
            </tr>
            <tr>
              <td>6X6</td>
              <td>10800</td>
              <td>125</td>
              <td>24-25</td>
              <td>152</td>
            </tr>
            <tr>
              <td>6X8</td>
              <td>14350</td>
              <td>150</td>
              <td>24-25</td>
              <td>202</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
