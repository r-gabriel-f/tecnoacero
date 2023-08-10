import { React} from "react";
import "./Servicios.css";
import azucarera from "../assets/img/servicios/azucarera.jpg";
import cementera from "../assets/img/servicios/cementera.jpg";
import mineria from "../assets/img/servicios/mineria.jpg";
import petrolera from "../assets/img/servicios/petrolera.jpg";
import construccion from "../assets/img/servicios/construccion.png";
import general from "../assets/img/servicios/general.png";

export const Servicios = () => {
  return (
    <section className="container-servicios">
      <div className="nombre-servicios">
        <h2>Clientes</h2>
      </div>
      <div className="container-img-servicios">
        <div className="img-servicio">
          <img src={mineria} href alt="servicio" className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Minera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={cementera} href alt="servicio" className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Cementera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={petrolera} href alt="servicio" className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Petrolera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={azucarera} href alt="servicio" className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias Azucarera</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={construccion} href alt="servicio" className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias de Construcción</h3>
          </div>
        </div>
        <div className="img-servicio">
          <img src={general} href alt="servicio" className="img-servicios" />
          <div className="tipo-servicio">
            <h3>Industrias en General</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
