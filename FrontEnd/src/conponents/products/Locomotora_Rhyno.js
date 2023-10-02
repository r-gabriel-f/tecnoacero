import React from "react";
import "../../conponents/products/EstilosProductos.css";
import molino from "../../assets/img/repuestos/molino.PNG";

export const Locomotora_Rhyno = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Locomotora Rhyno</h2>
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
              <td>Chasis</td>
              <td>Estructura principal de la locomotora.</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>Proporciona la potencia para el movimiento.</td>
            </tr>
            <tr>
              <td>Transmisión</td>
              <td>Transmite la potencia del motor a las ruedas.</td>
            </tr>
            <tr>
              <td>Ruedas</td>
              <td>Proporcionan tracción y movimiento sobre los rieles.</td>
            </tr>
            <tr>
              <td>Cabina</td>
              <td>Área donde el conductor opera y controla la locomotora.</td>
            </tr>
            <tr>
              <td>Controles</td>
              <td>Palancas, interruptores y sistemas para controlarla.</td>
            </tr>
            <tr>
              <td>Sistema de frenado</td>
              <td>Mecanismos para detener la locomotora y los carros.</td>
            </tr>
            <tr>
              <td>Luces y señales</td>
              <td>Iluminación y señalización para la operación segura.</td>
            </tr>
            <tr>
              <td>Sistema eléctrico</td>
              <td>Cables, baterías y componentes eléctricos diversos.</td>
            </tr>
            <tr>
              <td>Sistema de comunicación</td>
              <td>Equipo para la comunicación entre la locomotora y base.</td>
            </tr>
            <tr>
              <td>Carrocería</td>
              <td>Protege los componentes internos de la locomotora.</td>
            </tr>
            <tr>
              <td>Bogies o trucks</td>
              <td>Ejes y ruedas que permiten que la locomotora gire.</td>
            </tr>
            <tr>
              <td>Acoplamiento</td>
              <td>Mecanismo para unir y separar la locomotora de carros.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
