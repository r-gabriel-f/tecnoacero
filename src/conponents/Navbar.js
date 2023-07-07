import React from "react";
import tc from "../assets/img/tecnoAcero.jpg";
import "../conponents/Navbar.css";
export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg custom-navbar">
      <div class="container-fluid">
        <div className="navbar-img">
          <img src={tc} href id="tc" className="img-small" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-10 mb-lg-0">
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#">
                Institución
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#">
                Servicios
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#">
                Productos
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#">
                Contactos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
