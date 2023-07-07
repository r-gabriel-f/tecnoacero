import React from "react";
import "../conponents/ContactosEnd.css";
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
              <ion-icon name="mail-outline" className="icon"></ion-icon>
              <p>Email</p>
            </div>
            <div>
              <ion-icon name="logo-facebook" className="icon"></ion-icon>
              <p>facebook</p>
            </div>
            <div>
              <ion-icon name="logo-whatsapp" className="icon"></ion-icon>
              <p>Whatsapp</p>
            </div>
            <div>
              <ion-icon name="logo-linkedin" className="icon"></ion-icon>
              <p>Linkedin</p>
            </div>
            <div>
              <ion-icon name="logo-instagram" className="icon"></ion-icon>
              <p>Instagram</p>
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
      </div>
    </section>
  );
};
