import React from "react";
import "../../conponents/products/EstilosProductos.css";
import molino from "../../assets/img/repuestos/molino.PNG";

export const Mesa_Concentradora = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Mesa Concentradora</h2>
      </div>
      
      <div className="image-partes">
        <img src={molino} alt="molino" className="imagen-partes" />
      </div>

      <div className="container-descripcion-partes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table-partes">
          <thead>
            <tr>
              <th>Pieza</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Superficie de la Mesa</td>
              <td>
                Área donde se colocan los materiales a concentrar, con riffles
                para capturar partículas.
              </td>
            </tr>
            <tr>
              <td>Riffles</td>
              <td>
                Ranuras transversales en la superficie que separan las
                partículas según su peso.
              </td>
            </tr>
            <tr>
              <td>Canalones de Concentrados</td>
              <td>
                Canaletas a lo largo del borde que recogen los materiales
                concentrados y valiosos.
              </td>
            </tr>
            <tr>
              <td>Canalones de Colas</td>
              <td>
                Canaletas en el extremo opuesto para desechar materiales menos
                valiosos.
              </td>
            </tr>
            <tr>
              <td>Mecanismo de Agitación</td>
              <td>
                Dispositivo que mueve los materiales en la superficie para
                facilitar la separación.
              </td>
            </tr>
            <tr>
              <td>Motor y Transmisión</td>
              <td>
                Proporciona la energía para la agitación y distribuye la energía
                al mecanismo de agitación.
              </td>
            </tr>
            <tr>
              <td>Soportes y Estructura</td>
              <td>
                Sostén robusto que sostiene la mesa y permite ajustar su
                inclinación.
              </td>
            </tr>
            <tr>
              <td>Motor Vibratorio</td>
              <td>
                Puede proporcionar vibraciones adicionales para ayudar en la
                agitación.
              </td>
            </tr>
            <tr>
              <td>Sistema de Lavado de Agua</td>
              <td>
                Ayuda a separar los materiales más livianos de los más pesados
                mediante agua.
              </td>
            </tr>
            <tr>
              <td>Sistema de Alimentación</td>
              <td>
                Dirige los materiales hacia la superficie de la mesa de manera
                uniforme.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
