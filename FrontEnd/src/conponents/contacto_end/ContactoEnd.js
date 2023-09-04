import React from "react";
import "../contacto_end/ContactosEnd.css";

export const ContactoEnd = () => {
  return (
    <section className="conponent-contactosend">
      <div className="conponent-contatosend-info">
       <div className="h2-margin-contactos">
          <h2>Contactos</h2>
        </div>
         <div className="conponent-centericonos">
         <div className="conponent-contaciconos">
            <div>
              <a
                href="mailto:tecnoacero_bolivia@yahoo.com"
                target="_banks"
              >
                <ion-icon name="mail-outline" className="icon"></ion-icon>
              <p>Email</p>
              </a>
            </div>
            <div>
              <a
                href="https://www.facebook.com/tecnoacerobolivia"
                target="_banks"
              >
                <ion-icon name="logo-facebook" className="icon"></ion-icon>
                <p>facebook</p>
              </a>
            </div>
            <div>
            <a
                href="https://w.app/3CMasT"
                target="_banks"
              >
                <ion-icon name="logo-whatsapp" className="icon"></ion-icon>
              <p>Whatsapp</p>
              </a>
              
            </div>
            <div>
              <a
                href="https://bo.linkedin.com/in/tecnoacerobolivia"
                target="_banks"
              >
                <ion-icon name="logo-linkedin" className="icon"></ion-icon>
                <p>Linkedin</p>
              </a>
            </div>
          </div>
        </div>
        <div className="container-derechos">
          <footer className="Derechos">
            <p>
              &copy; 2023 Tecnoacero S.R.L. <br />
              Todos los derechos reservados.
            </p>
          </footer>
        </div>
      </div>
    </section>
  );
};
