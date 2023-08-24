import React from "react";
import "../../conponents/products/EstilosProductos.css";
import n from "../../assets/img/ojo.png";
import molino from "../../assets/img/repuestos/molino.PNG";

export const Chancadora = () => {
  return (
    <section className="container-productosestilos">
      <div className="container-parts-name">
        <h2>Repuestos de Chancadora</h2>
      </div>
     {/* <div className="container-parts">
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
              <td>Mandíbulas</td>
              <td>
                Placas de acero que forman las mandíbulas y trituran el
                material.
              </td>
            </tr>
            <tr>
              <td>Placa de articulación</td>
              <td>
                Conecta la mandíbula móvil al cuerpo de la chancadora y permite
                su movimiento.
              </td>
            </tr>
            <tr>
              <td>Volante</td>
              <td>
                Rueda pesada que ayuda a mantener el movimiento constante de la
                chancadora.
              </td>
            </tr>
            <tr>
              <td>Eje excéntrico</td>
              <td>
                Eje que gira y proporciona el movimiento de las mandíbulas.
              </td>
            </tr>
            <tr>
              <td>Cojinetes</td>
              <td>
                Rodamientos que soportan el movimiento del eje excéntrico.
              </td>
            </tr>
            <tr>
              <td>Sistema de ajuste</td>
              <td>
                Mecanismo que permite ajustar la abertura entre las mandíbulas
                para controlar el tamaño de salida del material triturado.
              </td>
            </tr>
            <tr>
              <td>Cuña de ajuste</td>
              <td>
                Pieza que se utiliza para ajustar la abertura de las mandíbulas
                y fijarlas en la posición deseada.
              </td>
            </tr>
            <tr>
              <td>Placa protectora</td>
              <td>
                Protege el interior de la chancadora de posibles objetos no
                triturables.
              </td>
            </tr>
            <tr>
              <td>Motor</td>
              <td>
                Proporciona la energía para el movimiento de las mandíbulas y el
                proceso de trituración.
              </td>
            </tr>
            <tr>
              <td>Correas y poleas</td>
              <td>
                Transmite la potencia desde el motor al eje excéntrico y otros
                componentes móviles.
              </td>
            </tr>
            <tr>
              <td>Bastidor</td>
              <td>
                Estructura que sostiene todas las piezas de la chancadora y
                proporciona estabilidad.
              </td>
            </tr>
            <tr>
              <td>Sistema de lubricación</td>
              <td>
                Mantiene lubricadas las partes móviles para reducir el desgaste
                y la fricción.
              </td>
            </tr>
            <tr>
              <td>Sistema de seguridad</td>
              <td>
                Dispositivos como sensores y protectores que evitan el
                funcionamiento peligroso de la máquina.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
