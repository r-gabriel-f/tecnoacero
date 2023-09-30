import React from "react";
import "../../conponents/products/EstilosProductos.css";
import molino from "../../assets/img/repuestos/molino.PNG";

export const Carro_Granby = () => {
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Carro Granby</h2>
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
              <td>Estructura principal del carro</td>
            </tr>
            <tr>
              <td>Neumáticos/Ruedas</td>
              <td>Permite el desplazamiento a lo largo de las vías</td>
            </tr>
            <tr>
              <td>Ejes</td>
              <td>Conecta las ruedas al chasis</td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>Fuente de energía (eléctrico/diésel)</td>
            </tr>
            <tr>
              <td>Sistema de Frenos</td>
              <td>Permite detener el carro de manera segura</td>
            </tr>
            <tr>
              <td>Sistema de Dirección</td>
              <td>Facilita el movimiento y giro del carro</td>
            </tr>
            <tr>
              <td>Sistema de Descarga</td>
              <td>Permite liberar la carga en áreas designadas</td>
            </tr>
            <tr>
              <td>Sistema de Suspensión</td>
              <td>Absorbe impactos y vibraciones en terrenos irregulares</td>
            </tr>
            <tr>
              <td>Sistema Eléctrico</td>
              <td>Componentes eléctricos para operación y control</td>
            </tr>
            <tr>
              <td>Caja de Carga</td>
              <td>Almacena el material o carga transportada</td>
            </tr>
            <tr>
              <td>Sistema de Control</td>
              <td>Permite dirigir y monitorear el funcionamiento</td>
            </tr>
            <tr>
              <td>Sistema de Seguridad</td>
              <td>Incluye dispositivos de detección de gases y extintores</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
