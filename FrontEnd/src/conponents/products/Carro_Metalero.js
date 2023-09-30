import React from "react";
import "../../conponents/products/EstilosProductos.css";

import molino from "../../assets/img/repuestos/molino.PNG";

export const Carro_Metalero = () => {
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Carro Metalero</h2>
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
              <td>Estructura principal del vehículo.</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>Proporciona la potencia necesaria para mover el vehículo.</td>
            </tr>
            <tr>
              <td>Transmisión</td>
              <td>Transmite la potencia del motor a las ruedas.</td>
            </tr>
            <tr>
              <td>Neumáticos</td>
              <td>Ruedas especialmente diseñadas para terrenos mineros.</td>
            </tr>
            <tr>
              <td>Suspensión</td>
              <td>Sistema que absorbe impactos y vibraciones.</td>
            </tr>
            <tr>
              <td>Sistema de frenos</td>
              <td>Permite detener o reducir la velocidad del vehículo.</td>
            </tr>
            <tr>
              <td>Cabina</td>
              <td>Espacio para el conductor y en algunos casos, pasajeros.</td>
            </tr>
            <tr>
              <td>Sistema eléctrico</td>
              <td>Incluye cableado, baterías y componentes eléctricos.</td>
            </tr>
            <tr>
              <td>Sistema de dirección</td>
              <td>Controla la dirección de las ruedas.</td>
            </tr>
            <tr>
              <td>Cucharón o pala</td>
              <td>
                Utilizado en vehículos de carga para excavar y transportar
                materiales.
              </td>
            </tr>
            <tr>
              <td>Bastidor del cucharón</td>
              <td>
                Estructura que sostiene el cucharón en vehículos de carga.
              </td>
            </tr>
            <tr>
              <td>Sistema de carga</td>
              <td>Mecanismo para elevar o inclinar el cucharón.</td>
            </tr>
            <tr>
              <td>Sistema de descarga</td>
              <td>Mecanismo para vaciar el contenido del cucharón.</td>
            </tr>
            <tr>
              <td>Sistema de tracción</td>
              <td>Proporciona tracción adicional en terrenos difíciles.</td>
            </tr>
            <tr>
              <td>Sistemas de seguridad</td>
              <td>Incluye sistemas contra incendios, señalización, etc.</td>
            </tr>
            <tr>
              <td>Sistema de control</td>
              <td>Paneles y controles para operar el vehículo.</td>
            </tr>
            <tr>
              <td>Sistema de monitoreo</td>
              <td>
                Tecnología para rastrear el rendimiento y condiciones del
                vehículo.
              </td>
            </tr>
            <tr>
              <td>Sistema de enfriamiento</td>
              <td>
                Mantiene la temperatura óptima del motor y otros componentes.
              </td>
            </tr>
            <tr>
              <td>Sistema de escape</td>
              <td>Dirige los gases de escape fuera del vehículo.</td>
            </tr>
            <tr>
              <td>Sistema hidráulico</td>
              <td>Utilizado en operaciones como levantar el cucharón.</td>
            </tr>
            <tr>
              <td>Componentes de seguridad</td>
              <td>Cinturones de seguridad, barras de protección, etc.</td>
            </tr>
            <tr>
              <td>Componentes de iluminación</td>
              <td>Luces para operar en condiciones de poca luz.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
