import React from 'react'
import "../../conponents/detalles/EstiloDetalles.css";
import aprom from "../../assets/img/productos/apromfeeder.webp";

export const Detalles_Aprom = () => {
  return (
    <section className="container-detallesproductosestilos" transition-style>
      <div className="container-detallesparts-name">
        <h2>Detalles de Aprom Feeder</h2>
      </div>
      <div className="image-detalle">
        <img src={aprom} alt="aprom" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
          <thead>
            <tr>
              <th>MODELO</th>
              <th>-</th>
               </tr>
          </thead>
          <tbody>
            <tr>
              <td>TAMAÑO</td>
              <td></td>
              
            </tr>
            <tr>
              <td>CAUDAL MAXIMO</td>
              <td></td>
              
            </tr>
            <tr>
              <td>ALTURA MANOMÉTRICA MÁXIMA</td>
              <td></td>
             
            </tr>
            <tr>
              <td>TAMAÑO MÁXIMO DE SÓLIDOS</td>
              <td></td>
             
            </tr>
            <tr>
              <td>TOLERANCIA A ABRASIÓN</td>
              <td></td>
              
            </tr>
            <tr>
              <td>ENTRADA</td>
              <td></td>
              
            </tr>
            <tr>
              <td>SALIDA</td>
              <td></td>
             
            </tr>
            <tr>
              <td>MOTOR</td>
              <td></td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}
