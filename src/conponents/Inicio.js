import React from "react";
import "../conponents/Inicio.css";
import ReactPlayer from "react-player";
import video from "../assets/video/video.mp4";
export const Inicio = () => {
   return (
    <section className="container-inicio" transition-style>
      <div className="contenido">
        <video src={video} autoPlay loop muted></video>

        <div className="container-info">
          <div className="center-content">
            <h1 className="h1-margin">TECNOACEROs S.R.L.</h1>
            <p>
              Es una empresa industrial cochabambina, presente en el mercado 14
              años, colaborando a la industria boliviana.
            </p>
            <p>
              Ofrecemos equipos completos y piezas de repuestosde acero, la
              materia prima se funde y fabrica en la empresa garantizando la
              calidad de cada producto
            </p>
            <p>
              Poseemos tecnologia que so solo mejora los procesos de produccion,
              tambien es amigable con el medio ambiente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
