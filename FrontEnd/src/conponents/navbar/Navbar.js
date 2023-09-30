import { React, useState } from "react";

import { Link} from "react-router-dom";
import tc from "../../assets/img/nosotros/tecnoAcero.webp";
import "../navbar/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [linkActivo, setLinkActivo] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });


  const handleInicioClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("inicio");
  };


  const handleserviciosClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("servicios");
  };

  const handleinfraestructuraClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("infraestructura");
  };

  const handleprocesoClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("proceso");
  };


  const handleUbicacionClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("contacto");
  };


  const handlemaquinariaClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("productos");
  };


  const handleextraccionClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("productos");
  };

  const handlerepuestosmaquinariaClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("productos");
  };

  const handlerepuestosextraccionClick = () => {
    setIsMenuOpen(false);
    setLinkActivo("productos");
  };

  return (
    <nav class="navbar navbar-expand-lg custom-navbar fixed-top">
      <div class="container-fluid">
        <div className="navbar-img">
          <img src={tc} alt="tc" id="tc" className="img-small" />
        </div>
        <button class="navbar-toggler" type="button" onClick={toggleMenu}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mx-auto mb-10 mb-lg-0 me-2">
            <li
              class={`nav-item mx-3 ${linkActivo === "inicio" ? "active" : ""}`}
            >
              <Link
                class="nav-link"
                aria-current="page"
                to="/"
                onClick={handleInicioClick}
              >
                Inicio
              </Link>
            </li>

            <li
              class={`nav-item mx-3 ${
                linkActivo === "servicios" ? "active" : ""
              }`}
            >
              <Link
                class="nav-link"
                aria-current="page"
                to="/servicios"
                onClick={handleserviciosClick}
              >
                Clientes
              </Link>
            </li>
            <li
              class={`nav-item mx-3 ${
                linkActivo === "infraestructura" ? "active" : ""
              }`}
            >
              <Link
                class="nav-link"
                aria-current="page"
                to="/infraestructura"
                onClick={handleinfraestructuraClick}
              >
                Infraestructura
              </Link>
            </li>
            <li
              class={`nav-item mx-3 ${
                linkActivo === "proceso" ? "active" : ""
              }`}
            >
              <Link
                class="nav-link"
                aria-current="page"
                to="/proceso"
                onClick={handleprocesoClick}
              >
                Proceso
              </Link>
            </li>

            <li
              class={`nav-item mx-3 dropdown ${
                linkActivo === "productos" ? "active" : ""
              }`}
            >
              <a
                className="nav-link dropdown-toggle"
                href="/a"
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
                    to="/repuestos/maquinaria"
                    onClick={handlerepuestosmaquinariaClick}
                  >
                    Repuestos de Maquinaria para Procesamiento de Mineral
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
                  <Link
                    className="dropdown-item"
                    to="/repuestos/extracción_minera"
                    onClick={handlerepuestosextraccionClick}
                  >
                    Repuestos de Maquinaria Minera para Extracción
                  </Link>
                </li>
              </ul>
            </li>

            <li
              class={`nav-item mx-3 ${
                linkActivo === "contacto" ? "active" : ""
              }`}
            >
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
