import React from "react";
import "../../conponents/products/EstilosProductos.css";
import molino from "../../assets/img/repuestos/molino.PNG";

export const ApromFeeder = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Aprom Feeder</h2>
      </div>
      <div className="image-partes">
        <img src={molino} alt="molino" className="imagen-partes" />
      </div>

      <div className="container-descripcion-partes">
        <h3>Caracteristicas</h3>
        <div className="scroll-partes">
          <table className="caracteristicas-table-partes">
            <thead>
              <tr>
                <th>Pieza</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Delantales</td>
                <td>Placas o bandejas para transportar el material.</td>
              </tr>
              <tr>
                <td>Cadenas</td>
                <td>Elementos que impulsan el movimiento de los delantales.</td>
              </tr>
              <tr>
                <td>Engranajes y piñones</td>
                <td>Transmite el movimiento del motor a las cadenas.</td>
              </tr>
              <tr>
                <td>Rodillos guía</td>
                <td>Soporta y guía los delantales para un movimiento suave.</td>
              </tr>
              <tr>
                <td>Motor y reductor</td>
                <td>Proporciona potencia y controla velocidad y par.</td>
              </tr>
              <tr>
                <td>Estructura y soportes</td>
                <td>Proporciona la base y la estabilidad del equipo.</td>
              </tr>
              <tr>
                <td>Dispositivos de seguridad</td>
                <td>Interruptores, sensores para garantizar la seguridad.</td>
              </tr>
              <tr>
                <td>Sistema de lubricación</td>
                <td>Mantiene las partes móviles lubricadas.</td>
              </tr>
              <tr>
                <td>Sistema de control</td>
                <td>Regula velocidad, dirección y otros aspectos.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
