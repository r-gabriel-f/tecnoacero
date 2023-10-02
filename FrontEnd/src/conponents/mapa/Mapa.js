import React from "react";
import "../mapa/Mapa.css";
import EmailForm from "../email_from/EmailForm";

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
              <a href="https://w.app/3CMasT" target="_banks">
                <ion-icon
                  name="logo-whatsapp"
                  className="icon-contacto"
                  id="whatsapp"
                ></ion-icon>
                <p>
                  Whatsapp:<br></br>(+591) 72220486
                </p>
              </a>
            </div>

            <div className="ico-name">
              <ion-icon
                name="mail-outline"
                className="icon-contacto"
                id="direccion"
              ></ion-icon>
              <p>
                Email:<br></br>tecnoacero_bolivia@yahoo.com<br></br>
                info@tecnoacero.com.bo
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
              <a href="//">
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
          <EmailForm />
        </div>
      </div>
      <div className="mapa">
        <iframe
          title="Mapa del sitio"
          className="gmap_iframe"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.16601073968!2d-66.21475782583829!3d-17.403818964638695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373cc5e88df79%3A0x7e8fad11503da955!2sTECNOACERO%20S.R.L.!5e0!3m2!1ses!2sbo!4v1696257482211!5m2!1ses!2sbo"
        ></iframe>
      </div>
    </section>
  );
};
