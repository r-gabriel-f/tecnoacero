import React from "react";
import "../../conponents/products/EstilosProductos.css";
import ejeypinon from "../../assets/img/molino_a_bola/ejeypinon.jpg";
import cuello from "../../assets/img/molino_a_bola/cuello.jpg";
import descansoparacuello from "../../assets/img/molino_a_bola/descansoparacuello.jpg";
import catalina from "../../assets/img/molino_a_bola/catalina.jpg";
import soleras from "../../assets/img/molino_a_bola/soleras.jpg";
import bolasdeacero from "../../assets/img/molino_a_bola/bolas.jpg";
import polea from "../../assets/img/molino_a_bola/polea.jpg";
import tapa from "../../assets/img/molino_a_bola/tapa.jpg";
import trunion from "../../assets/img/molino_a_bola/TRUNION.jpg";
import trunionretocado from "../../assets/img/molino_a_bola/TRUNION RETOCADO.jpg";
import molino from "../../assets/img/molino a bolas.png";
export const Molino_a_Bolas = () => {
  return (
    <section className="container-productosestilos" transition-style>
      <div className="container-parts-name">
        <h2>Repuestos de Molino a Bolas</h2>
      </div>
      <div className="container-parts">
        <div className="container-parts-detalles">
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Piñon y Eje</h3>
            </div>
            <div className="imagen-pieza">
              <img src={ejeypinon} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Cuello</h3>
            </div>
            <div className="imagen-pieza">
              <img src={cuello} href id="n" className="img-productos-n" />
            </div>
          </div>
          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Descanso Para Cuello</h3>
            </div>
            <div className="imagen-pieza">
              <img
                src={descansoparacuello}
                href
                id="n"
                className="img-productos-n"
              />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Catalina</h3>
            </div>
            <div className="imagen-pieza">
              <img src={catalina} href id="n" className="img-productos-n" />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Soleras</h3>
            </div>
            <div className="imagen-pieza">
              <img src={soleras} href id="n" className="img-productos-n" />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Bolas de Acero</h3>
            </div>
            <div className="imagen-pieza">
              <img src={bolasdeacero} href id="n" className="img-productos-n" />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Polea</h3>
            </div>
            <div className="imagen-pieza">
              <img src={polea} href id="n" className="img-productos-n" />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Tapa</h3>
            </div>
            <div className="imagen-pieza">
              <img src={tapa} href id="n" className="img-productos-n" />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Trunion</h3>
            </div>
            <div className="imagen-pieza">
              <img src={trunion} href id="n" className="img-productos-n" />
            </div>
          </div>

          <div className="piezas">
            <div className="nombre-pieza">
              <h3>Trunion</h3>
            </div>
            <div className="imagen-pieza">
              <img
                src={trunionretocado}
                href
                id="n"
                className="img-productos-n"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="image-partes">
        <img src={molino} alt="molino" className="imagen-partes" />
      </div>

      <div className="container-descripcion-partes">
        <h3>Caracteristicas</h3>
        <table className="caracteristicas-table-partes">
          <thead>
            <tr>
              <th>ITEM</th>
              <th>CTD</th>
              <th>DETALLE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>
                Tapas de Molino en acero SAE 1045. Con perforaciones para
                solera, cuello, anillo y catalina.
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>1</td>
              <td>
                Trunion de entrada, hierro fundido gris ASTM A48 – Grado 25.
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>1</td>
              <td>
                Trunion de salida, hierro fundido gris ASTM A48 – Grado 25.
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>2</td>
              <td>Cuello de molino de acero SAE 1045.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>1</td>
              <td>Catalina en acero SAE 1045.</td>
            </tr>
            <tr>
              <td>6</td>
              <td>1</td>
              <td>Piñon en acero SAE 1045.</td>
            </tr>
            <tr>
              <td>7</td>
              <td>1</td>
              <td>
                Eje de piñon en acero SAE 1045. Tres ajustes para rodamiento uno
                para polea, uno para pinos.
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>1</td>
              <td>Polea de transmisión de hierro fundido gris.</td>
            </tr>
            <tr>
              <td>9</td>
              <td>2</td>
              <td>Anillas en acero SAE 1020.</td>
            </tr>
            <tr>
              <td>10</td>
              <td>3 JUEGOS</td>
              <td>
                Tres apoyos (descansos), tres bases de eje de piñon y polea
                transmitida. Material: hierro fundido gris.
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>2 JUEGOS</td>
              <td>
                Juego consistente de base, descanso y tapa de descanso para
                cuello de molino. Superficie de contacto recubierto con metal
                blanco.
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>1</td>
              <td>
                Cilindro de planchas SEA 1010. Espesor según requerimiento.
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>1 JUEGO</td>
              <td>
                Un juego de soleras para el cilindro. Material: acero de cromo
                molibdeno.
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>1 JUEGO</td>
              <td>
                Un juego de soleras para tapa. Material: acero cromo cromo
                molibdeno.
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>1 juego</td>
              <td>Pernos de sujeción para soleras.</td>
            </tr>
            <tr>
              <td>16</td>
              <td>3 Pz</td>
              <td>
                Rodamiento de rodillos a rotula, según requerimiento de tamaño
                de molinos.
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>3 Pz</td>
              <td>
                Mango y tuerca de fijación para rodamiento, según requerimiento.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
