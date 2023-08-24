import React from "react";
import "../conponents/Mapa.css";
import EmailForm from "./EmailForm";
export const Mapa = () => {
  return (
    <section className="container-mapa">
      <div className="formulario">
        <div className="formulario-iconos-contacto">
          <h2>Contactos</h2>
          <div className="contenido">
            <div className="ico-name">
              <ion-icon
                name="call"
                className="icon-contacto"
                id="telefono"
              ></ion-icon>

              <p>
                Telefono:<br></br>(591-4) 4434888
              </p>
            </div>
            <div className="ico-name">
              <a
                href="https://www.facebook.com/tecnoacerobolivia"
                target="_banks"
              >
                <ion-icon
                  name="logo-facebook"
                  className="icon-contacto"
                  id="facebook"
                ></ion-icon>
                <p>
                  Facebook:<br></br>Tecnoacero SRL
                </p>
              </a>
            </div>

            <div className="ico-name">
              <ion-icon
                name="logo-whatsapp"
                className="icon-contacto"
                id="whatsapp"
              ></ion-icon>
              <p>
                Whatsapp:<br></br>(+591) 72220486
              </p>
            </div>
            <div className="ico-name">
              <ion-icon
                name="mail-outline"
                className="icon-contacto"
                id="email"
              ></ion-icon>
              <p>
                Email:<br></br>tecnoacero_bolivia@yahoo.com
              </p>
            </div>
            <div className="ico-name">
              <a
                href="https://bo.linkedin.com/in/tecnoacerobolivia"
                target="_banks"
              >
                <ion-icon
                  name="logo-linkedin"
                  className="icon-contacto"
                  id="linkedin"
                ></ion-icon>
                <p>
                  Linkedin:<br></br>TECNOACERO S.R.L
                </p>
              </a>
            </div>
            <div className="ico-name">
              <a>
                <ion-icon
                  name="compass-outline"
                  className="icon-contacto"
                  id="direccion"
                ></ion-icon>

                <p>
                  Dirección:<br></br>C. Antenor de la Via Garcia y<br></br>Henry
                  Hurd Rusby
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="formulario-emaild">
          <EmailForm></EmailForm>
        </div>
      </div>
      <div className="mapa">
        <iframe
          title="Mapa del sitio"
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
