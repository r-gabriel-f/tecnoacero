import React from "react";
import "../../conponents/detalles/EstiloDetalles.css";
import chancadora from "../../assets/img/productos/chancadora.webp";
export const Detalles_Chancadora = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-detallesproductosestilos">
      <div className="container-detallesparts-name">
        <h2>Detalles de Chancadora</h2>
      </div>
      <div className="image-detalle">
        <img src={chancadora} alt="chancadora" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
          <thead>
            <tr>
              <th>Característica</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tipo</td>
              <td>Chancadora de quijada</td>
            </tr>
            <tr>
              <td>Capacidad de producción</td>
              <td>Varía según el modelo; en toneladas por hora</td>
            </tr>
            <tr>
              <td>Tamaño máximo de alimentación</td>
              <td>Depende del modelo; en pulgadas o milímetros</td>
            </tr>
            <tr>
              <td>Ajuste de la abertura</td>
              <td>Controla el tamaño del producto triturado</td>
            </tr>
            <tr>
              <td>Potencia del motor</td>
              <td>En kW o HP, según el sistema de medición</td>
            </tr>
            <tr>
              <td>Tipo de motor</td>
              <td>Eléctrico, diésel u otro</td>
            </tr>
            <tr>
              <td>Sistema de trituración</td>
              <td>Mandíbulas móviles que comprimen el material</td>
            </tr>
            <tr>
              <td>Material de las mandíbulas</td>
              <td>Acero resistente al desgaste</td>
            </tr>
            <tr>
              <td>Sistema de lubricación</td>
              <td>Garantiza un funcionamiento suave</td>
            </tr>
            <tr>
              <td>Sistema de protección</td>
              <td>Contra sobrecargas u otros sistemas de seguridad</td>
            </tr>
            <tr>
              <td>Estructura y diseño</td>
              <td>Robusto y diseñado para cargas pesadas</td>
            </tr>
            <tr>
              <td>Aplicaciones</td>
              <td>Minería, canteras, procesamiento de minerales</td>
            </tr>
            <tr>
              <td>Mantenimiento</td>
              <td>Requiere mantenimiento regular para rendimiento óptimo</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
