import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import tc from "../assets/img/tecnoAcero.jpeg";
import "../conponents/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //inicio
  const handleInicioClick = () => {
    navigate("/");
    setIsMenuOpen(false);
  };

  //institucion
  const handleInstitucionClick = () => {
    navigate("/institucion");
    setIsMenuOpen(false);
  };

  //servicios
  const handleserviciosClick = () => {
    navigate("/servicios");
    setIsMenuOpen(false);
  };

  //ubicacion
  const handleUbicacionClick = () => {
    navigate("/ubicacion");
    setIsMenuOpen(false);
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
          style={{ marginTop: "-10px" }}
        >
          <ul class="navbar-nav mx-auto mb-10 mb-lg-0">
            <li class="nav-item mx-3">
              <Link class="nav-link" aria-current="page" to="/" onClick={handleInicioClick}>
                Inicio
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" aria-current="page" to="/institucion" onClick={handleInstitucionClick}>
                Institución
              </Link>
            </li>
            <li class="nav-item mx-3">
              <Link class="nav-link" aria-current="page" to="/servicios" onClick={handleserviciosClick}>
                Servicios
              </Link>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" href="#">
                Productos
              </a>
            </li>
            <li class="nav-item mx-3">
              <a class="nav-link" aria-current="page" to="/ubicacion" onClick={handleUbicacionClick}>
                Uhicacion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
