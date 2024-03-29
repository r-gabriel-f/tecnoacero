import React from "react";
import v from "../../assets/img/nosotros/valores.webp";
import m from "../../assets/img/nosotros/objetivo.webp";
import vi from "../../assets/img/nosotros/ojo.webp";
import "../institucion/Institucion.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Institucion = () => {
  return (
    <section className="container-mision-vision">
      <div className="mision-vision">
        <div className="mision">
          <h2>MISION</h2>

          <LazyLoadImage src={m} alt="i" id="v" className="img-misionv" />

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

          <LazyLoadImage src={vi} alt="i" id="vi" className="img-visionv" />

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
          <LazyLoadImage src={v} alt="i" id="v" className="img-valores" />
        </div>
      </div>
    </section>
  );
};
