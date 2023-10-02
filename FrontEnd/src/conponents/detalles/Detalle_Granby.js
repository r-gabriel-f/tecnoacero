import React from 'react'
import "../../conponents/detalles/EstiloDetalles.css";
import granby from "../../assets/img/productos/carrogranby.webp";

export const Detalle_Granby = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <section className="container-detallesproductosestilos">
      <div className="container-detallesparts-name">
        <h2>Detalles de Carro Granby</h2>
      </div>
      <div className="image-detalle">
        <img src={granby} alt="granby" className="imagen-detalle" />
      </div>

      <div className="container-descripcion-detallespartes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table">
        <thead>
            <tr>
              <th>CARRO</th>
              <th>3-30</th>
              <th>3-40</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <td>CATEGORIA</td>
              <td></td>
              <td></td>
           
            </tr>
            <tr>
              <td>MODELO</td>
              <td></td>
              <td></td>
          
            </tr>
            <tr>
              <td>PESO</td>
              <td></td>
              <td></td>
              
            </tr>
            <tr>
              <td>ALT/S RIEL</td>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td>TROCHA (mm)</td>
              <td></td>
              <td></td>
             
            </tr>
            <tr>
              <td>CAPACIDAD DE CARGA</td>
              <td></td>
              <td></td>
              
            </tr>
        
          </tbody>
        </table>
      </div>
    </section>
  )
}
