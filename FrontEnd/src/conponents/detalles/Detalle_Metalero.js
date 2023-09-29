import React from 'react'
import "../../conponents/detalles/EstiloDetalles.css";
import carretero from "../../assets/img/productos/carrometalero.webp";

export const Detalle_Metalero = () => {
  return (
    <section className="container-detallesproductosestilos" transition-style>
      <div className="container-detallesparts-name">
        <h2>Detalles de Carro Metalero</h2>
      </div>
      <div className="image-detalle">
        <img src={carretero} alt="carretero" className="imagen-detalle" />
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
