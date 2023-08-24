import React from "react";
import "../../conponents/products/EstilosProductos.css";
import n from "../../assets/img/ojo.png";
import cabeza from "../../assets/img/bombas lameras/CABEZAL.jpg";
import camisa from "../../assets/img/bombas lameras/camisa.jpg";
import discos from "../../assets/img/bombas lameras/DISCOS.jpg";
import molino from "../../assets/img/repuestos/molino.PNG";

export const Bombas_Lameras = () => {
  return (
    <section className="container-productosestilos" transition-style>
      <div className="container-parts-name">
        <h2>Repuestos de Bombas Lameras</h2>
      </div>
      {/*  <div className="container-parts">
        <div className="container-parts-detalles">
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Cabezal</h3>
            </div>
            <div className="imagen-pieza">
              <img src={cabeza} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Camisa</h3>
            </div>
            <div className="imagen-pieza">
              <img src={camisa} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Discos</h3>
            </div>
            <div className="imagen-pieza">
              <img src={discos} href id="n" className="img-productos-n" />
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
              <td>Cuerpo de la bomba</td>
              <td>
                La carcasa externa que contiene y protege los componentes
                internos.
              </td>
            </tr>
            <tr>
              <td>Impulsor</td>
              <td>
                El componente giratorio que impulsa el fluido y crea la presión.
              </td>
            </tr>
            <tr>
              <td>Camisa del impulsor</td>
              <td>
                Recubrimiento protector alrededor del impulsor para aumentar su
                durabilidad.
              </td>
            </tr>
            <tr>
              <td>Carcasa de succión</td>
              <td>Parte de la carcasa de la bomba donde entra el fluido.</td>
            </tr>
            <tr>
              <td>Carcasa de descarga</td>
              <td>
                Parte de la carcasa de la bomba por donde sale el fluido
                presurizado.
              </td>
            </tr>
            <tr>
              <td>Eje</td>
              <td>Eje central que conecta el motor al impulsor.</td>
            </tr>
            <tr>
              <td>Sello mecánico</td>
              <td>Componente que evita fugas de fluido a lo largo del eje.</td>
            </tr>
            <tr>
              <td>Sellos de eje</td>
              <td>
                Sellos adicionales para proteger el eje de la contaminación.
              </td>
            </tr>
            <tr>
              <td>Placa de desgaste</td>
              <td>
                Superficie de desgaste en la carcasa y la camisa del impulsor.
              </td>
            </tr>
            <tr>
              <td>Revestimientos</td>
              <td>
                Revestimientos intercambiables para proteger las partes
                internas.
              </td>
            </tr>
            <tr>
              <td>Placa de succión</td>
              <td>
                Superficie donde entra el fluido en la carcasa de succión.
              </td>
            </tr>
            <tr>
              <td>Voluta</td>
              <td>
                Diseño interno de la carcasa que canaliza el flujo hacia la
                descarga.
              </td>
            </tr>
            <tr>
              <td>Sistema de enfriamiento</td>
              <td>
                Componentes para mantener la temperatura de la bomba bajo
                control.
              </td>
            </tr>
            <tr>
              <td>Motor eléctrico</td>
              <td>Motor que impulsa el eje y el impulsor.</td>
            </tr>
            <tr>
              <td>Base de soporte</td>
              <td>Estructura que sostiene la bomba y el motor.</td>
            </tr>
            <tr>
              <td>Soportes y pernos</td>
              <td>Componentes para fijar la bomba y el motor a la base.</td>
            </tr>
            <tr>
              <td>Tubos y conexiones</td>
              <td>Componentes que permiten la entrada y salida de fluido.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
