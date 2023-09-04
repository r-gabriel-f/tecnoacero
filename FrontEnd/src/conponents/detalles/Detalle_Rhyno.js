import React from 'react'
import "../../conponents/detalles/EstiloDetalles.css";
import rhyno from "../../assets/img/productos/locomotorarhino.png";

export const Detalle_Rhyno = () => {
  return (
    <section className="container-detallesproductosestilos" transition-style>
      <div className="container-detallesparts-name">
        <h2>Detalles de Locomotora Rhyno</h2>
      </div>
      <div className="image-detalle">
        <img src={rhyno} alt="rhyno" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
          <thead>
            <tr>
              <th>MODELO</th>
              <th>--</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>CAPACIDAD</td>
              <td></td>
            
            </tr>
            <tr>
              <td>MOTOR</td>
              <td></td>
              
            </tr>
            <tr>
              <td>CONTROL</td>
              <td></td>
              
            </tr>
            <tr>
              <td>RESISTENCIAS</td>
              <td></td>
             
            </tr>
            <tr>
              <td>TRANSMISIÓN TROCHA</td>
              <td></td>
              
            </tr>
            <tr>
              <td>VELOCIDAD MÍNIMA (KM/HR)</td>
              <td></td>
              
            </tr>
            <tr>
              <td>VELOCIDAD MÁXIMA</td>
              <td></td>
              
            </tr>
            <tr>
              <td>JALE OPTIMO</td>
              <td></td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
