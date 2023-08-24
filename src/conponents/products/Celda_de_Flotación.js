import React from "react";
import "../../conponents/products/EstilosProductos.css";
import n from "../../assets/img/ojo.png";
import molino from "../../assets/img/repuestos/molino.PNG";

export const Celda_de_Flotación = () => {
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Celda de Flotación</h2>
      </div>
      {/*  <div className="container-parts">
        <div className="container-parts-detalles">
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>name</h3>
            </div>
            <div className="imagen-pieza">
              <img src={n} href id="n" className="img-productos-n" />
            </div>
          </div>
        </div>
  </div>*/}
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
              <td>Tanque de flotación</td>
              <td>Recipiente principal donde ocurre el proceso de flotación</td>
            </tr>
            <tr>
              <td>Rotor</td>
              <td>Impulsor que crea burbujas y agita la pulpa</td>
            </tr>
            <tr>
              <td>Estator</td>
              <td>Estructura que rodea al rotor y dirige el flujo</td>
            </tr>
            <tr>
              <td>Inyectores de aire</td>
              <td>Dispositivos para introducir aire en la pulpa</td>
            </tr>
            <tr>
              <td>Sistema de agitación</td>
              <td>Mecanismos que mantienen la pulpa en movimiento</td>
            </tr>
            <tr>
              <td>Placas deflectores</td>
              <td>Dirigen el flujo de pulpa y burbujas</td>
            </tr>
            <tr>
              <td>Pulpa de alimentación</td>
              <td>Mezcla de agua, reactivos y mineral</td>
            </tr>
            <tr>
              <td>Controladores</td>
              <td>Instrumentación para supervisar y controlar</td>
            </tr>
            <tr>
              <td>Canal de concentrado</td>
              <td>Descarga de mineral valioso separado</td>
            </tr>
            <tr>
              <td>Canal de relaves</td>
              <td>Elimina los materiales no deseados</td>
            </tr>
            <tr>
              <td>Distribuidores de pulpa</td>
              <td>Aseguran distribución uniforme de la pulpa</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
