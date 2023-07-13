import React from 'react'
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
export const Molino_a_Bolas = () => {
  return (
    <section className="container-productosestilos">
      <div className="container-parts">
        <div className="container-parts-name">
          <h2>Repuestos de Molino a Bolas</h2>
        </div>
        <div className="container-parts-detalles">
          <div>
            <h3>Piñon y Eje</h3>
            <img src={ejeypinon} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Cuello</h3>
            <img src={cuello} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Descanso Para Cuello</h3>
            <img src={descansoparacuello} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Catalina</h3>
            <img src={catalina} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Soleras</h3>
            <img src={soleras} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Bolas de Acero</h3>
            <img src={bolasdeacero} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Polea</h3>
            <img src={polea} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Tapa</h3>
            <img src={tapa} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Trunion</h3>
            <img src={trunion} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>Trunion</h3>
            <img src={trunionretocado} href id="n" className="img-productos-n" />
          </div>
          
        </div>
      </div>
    </section>
  )
}
