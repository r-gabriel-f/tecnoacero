import React from "react";
import v from "../assets/img/valores.PNG";
import m from "../assets/img/objetivo.png";
import vi from "../assets/img/ojo.png";

import "../conponents/Institucion.css";
export const Institucion = () => {
  return (
    <section className="container-mision-vision">
      <div className="mision-vision">
        <div className="mision">
          <h2>MISION</h2>

          <img src={m} href id="v" className="img-misionv" />

          <p>
            Satisfacer las necesidades y los requerimientos de las industrias
            mediante la excelencia y calidad de los productos que elaboramos,
            trabajar con entrega y profecionalismo para ofrecer la mejor
            calidad, beneficios a nuestros clientes con la adquisición de sus
            pedidos (acero).
          </p>
          <p>
            Superar las expectativas de nuestros clientes con satisfacer las
            necesidades y los requerimientos de las industrias mediante la
            excelencia y necesidades y los requerimientos de las industrias
            mediante la excelencia y calidad de los productos que elaboramos,
            trabajar con entrega y prefesionalismo para ofrecer la mejor
            calidad, beneficiando a nuestros clientes con la adquisición de sus
            pedidos (acero)
          </p>
        </div>
        <div className="vision">
          <h2>VISION</h2>

          <img src={vi} href id="vi" className="img-visionv" />

          <p>
            Ser líder en el mercado de fundición de acerp y producción de
            equipos y repuestos, llenando los vacíos tecnológicos en procesos de
            fundición de aceros en el mercado nacional. Ofreciendo productos
            competitivos de calidad a las diferentes industrias del pais;
            llegando a ser el mayor proveedor de productos hechos de acerp
            fundido
          </p>
        </div>
      </div>

      <div className="container-valores">
        <h2>VALORES</h2>
        <div className="valores">
          <img src={v} href id="v" className="img-valores" />
        </div>
      </div>
    </section>
  );
};
