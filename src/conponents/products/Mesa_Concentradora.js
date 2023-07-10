import React from "react";
import '../../conponents/products/Mesa_Concentradora.css';
import mc from "../../assets/img/valores.PNG";
import n from "../../assets/img/ojo.png";

export const Mesa_Concentradora = () => {
  return (
    <section className="container-mesaconcentrada">
      <div className="container-principal">
        <h2>Mesa Concentradora</h2>
        <img src={mc} href id="mc" className="img-productos-mc" />
      </div>
      <div className="container-parts">
        <div className="container-parts-name">
          <h2>Partes</h2>
        </div>
        <div className="container-parts-detalles">
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
          <div>
            <h3>name</h3>
            <img src={n} href id="n" className="img-productos-n" />
          </div>
        </div>
      </div>
    </section>
  );
};
