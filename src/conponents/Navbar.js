import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import tc from "../assets/img/tecnoAcero.jpeg";
import "../conponents/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkActivo, setLinkActivo] = useState(""); // Agregamos este estado para guardar el enlace activo

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //inicio
  const handleInicioClick = () => {
    navigate("/");
    setIsMenuOpen(false);
    setLinkActivo("inicio");
  };

  //institucion
  const handleInstitucionClick = () => {
    navigate("/institucion");
    setIsMenuOpen(false);
    setLinkActivo("institucion");
  };

  //servicios
  const handleserviciosClick = () => {
    navigate("/servicios");
    setIsMenuOpen(false);
    setLinkActivo("servicios");

  };
  //infraestructuta
  const handleinfraestructuraClick = () => {
    navigate("/infraestructura");
    setIsMenuOpen(false);
    setLinkActivo("infraestructura");

  };
  //proceso
  const handleprocesoClick = () => {
    navigate("/proceso");
    setIsMenuOpen(false);
    setLinkActivo("proceso");

  };

  //contacto
  const handleUbicacionClick = () => {
    navigate("/contacto");
    setIsMenuOpen(false);
    setLinkActivo("contacto");

  };

  //productos maquinaria

  const handlemaquinariaClick = () => {
    navigate("/productos/maquinaria");
    setIsMenuOpen(false);
    setLinkActivo("productos");

  };

  //producto extraccion minera

  const handleextraccionClick = () => {
    navigate("/productos/extracción_minera");
    setIsMenuOpen(false);
    setLinkActivo("productos");

  };

  return (
    <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
      <div class="container-fluid">
        <div className="navbar-img">
          <img src={tc} href id="tc" className="img-small" />
        </div>
        <button class="navbar-toggler" type="button" onClick={toggleMenu}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto mb-10 mb-lg-0 me-2">
            <li class={`nav-item mx-3 ${linkActivo === "inicio" ? "active" : ""}`}>
              <Link
                class="nav-link"
                aria-current="page"
                to="/"
                onClick={handleInicioClick}
              >
                Inicio
              </Link>
            </li>
            <li class={`nav-item mx-3 ${linkActivo === "institucion" ? "active" : ""}`}>
              <Link
                class="nav-link"
                aria-current="page"
                to="/institucion"
                onClick={handleInstitucionClick}
              >
                Institución
              </Link>
            </li>
            <li class={`nav-item mx-3 ${linkActivo === "servicios" ? "active" : ""}`}>
              <Link
                class="nav-link"
                aria-current="page"
                to="/servicios"
                onClick={handleserviciosClick}
              >
                Clientes
              </Link>
            </li>
            <li class={`nav-item mx-3 ${linkActivo === "infraestructura" ? "active" : ""}`}>
              <Link
                class="nav-link"
                aria-current="page"
                to="/infraestructura"
                onClick={handleinfraestructuraClick}
              >
                Infraestructura
              </Link>
            </li>
            <li class={`nav-item mx-3 ${linkActivo === "proceso" ? "active" : ""}`}>
              <Link
                class="nav-link"
                aria-current="page"
                to="/proceso"
                onClick={handleprocesoClick}
              >
                Proceso
              </Link>
            </li>

            <li class={`nav-item mx-3 dropdown ${linkActivo === "productos" ? "active" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Productos
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link
                    className="dropdown-item"
                    to="/productos/maquinaria"
                    onClick={handlemaquinariaClick}
                  >
                    Maquinaria para Procesamiento de Mineral
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/productos/extracción_minera"
                    onClick={handleextraccionClick}
                  >
                    Maquinaria Minera para Extracción
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item">Otros</Link>
                </li>
              </ul>
            </li>

            <li class={`nav-item mx-3 ${linkActivo === "contacto" ? "active" : ""}`}>
              <Link
                class="nav-link"
                aria-current="page"
                to="/contacto"
                onClick={handleUbicacionClick}
              >
                Contactos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
