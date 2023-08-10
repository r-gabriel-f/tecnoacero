import React from "react";
import v from "../assets/img/valores.PNG";
import m from "../assets/img/objetivo.png";
import vi from "../assets/img/ojo.png";

import "../conponents/Institucion.css";
export const Institucion = () => {
  return (
    <section className="container-mision-vision" transition-style>
      <div className="mision-vision">
        <div className="mision">
          <h2>MISION</h2>

          <img src={m} href id="v" className="img-misionv" />

          <p>
            TECNOACERO S.R.L. es una empresa comprometida en satisfacer las
            necesidades de la industria mediante la excelencia y calidad de sus
            productos fabricados por proceso de fundición.
          </p>
          <p>
            TECNOACERO S.R.L. es una empresa constituida para llenar los vacíos
            tecnológicos en proceso de fundición de aceros en el mercado
            nacional.
          </p>
        </div>
        <div className="vision">
          <h2>VISION</h2>

          <img src={vi} href id="vi" className="img-visionv" />

          <p>
            Ser líder en el mercado de fundición de acero y producción de
            equipos y repuestos, llenando los vacíos tecnológicos en procesos de
            fundición de aceros en el mercado nacional. Ofreciendo productos
            competitivos de calidad a las diferentes industrias del país;
            llegando a ser el mayor proveedor de productos hechos de acero
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
