import React from "react";
import "../conponents/Mapa.css";
import EmailForm from "./EmailForm";
export const Mapa = () => {
  return (
    <section className="container-mapa">
      <div className="formulario">
        <div className="formulario-iconos-contacto">
          <h2>Contactos</h2>
          <div className="ico-name">
            <ion-icon name="logo-facebook" className="icon-contacto" id="facebook"></ion-icon>
            <p>Facebook:<br></br>Tecnoacero SRL</p>
          </div>

          <div className="ico-name">
            <ion-icon name="call-outline" className="icon-contacto" id="telefono"></ion-icon>
            <p>Telefono:<br></br>(591-4) 4434888</p>
          </div>
          <div className="ico-name">
            <ion-icon name="logo-whatsapp" className="icon-contacto" id="whatsapp"></ion-icon>
            <p>Whatsapp:<br></br>(+591) 10101010</p>
          </div>
          <div className="ico-name">
            <ion-icon name="logo-linkedin" className="icon-contacto" id="linkedin"></ion-icon>
            <p>Linkedin:<br></br>TECNOACERO S.R.L</p>
          </div>
          
        </div>
        <div className="formulario-emaild">
          <EmailForm></EmailForm>
        </div>
      </div>
      <div className="mapa">
        <iframe
          className="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?amp;hl=en&amp;q=TECNOACERO S.R.L.&amp;t=p&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </section>
  );
};
