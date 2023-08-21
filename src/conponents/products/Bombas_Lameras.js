import React from "react";
import "../../conponents/products/EstilosProductos.css";
import n from "../../assets/img/ojo.png";
import cabeza from "../../assets/img/bombas lameras/CABEZAL.jpg";
import camisa from "../../assets/img/bombas lameras/camisa.jpg";
import discos from "../../assets/img/bombas lameras/DISCOS.jpg";
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
      <div className="container-descripcion-partes">
        <h3>Descripcion</h3>
        <p>
          Superar las expectativas de nuestros clientes con satisfacer las
          necesidades y los requerimientos de las industrias mediante la
          excelencia y necesidades y los requerimientos de las industrias
          mediante la excelencia y calidad de los productos que elaboramos,
          trabajar con entrega y prefesionalismo para ofrecer la mejor calidad,
          beneficiando a nuestros clientes con la adquisición de sus pedidos
          (acero)
        </p>
      </div>
    </section>
  );
};
