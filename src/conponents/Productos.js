import { React, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import "../conponents/Productos.css";

import p from "../assets/img/valores.PNG";
import molino_bolas from "../assets/img/molino a bolas.PNG";
export const Productos = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();

  //mesa concentradora
  const handlemesaconcentradoraClick = () => {
    navigate("/productos/maquinaria/mesa_concentradora");
    setIsMenuOpen(false);
  };

  //molino a bolas

  const handlemolinobolasClick = () => {
    navigate("/productos/maquinaria/molino_a_bolas");
    setIsMenuOpen(false);
  };

  return (
    <sectionm className="container-productos">
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Mesa Concentradora</h2>
        </div>
        <div className="container-img-producto">
          <div className="img-producto">
            <img src={p} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button
                type="button"
                class="btn btn-primary"
                to="/productos/maquinaria/mesa_concentradora"
                onClick={handlemesaconcentradoraClick}
              >
                Ver Detalles
              </button>
            </div>
          </div>
          <div className="descripcion-producto">
            <h3>Descripcion</h3>
            <p>
              Superar las expectativas de nuestros clientes con satisfacer las
              necesidades y los requerimientos de las industrias mediante la
              excelencia y necesidades y los requerimientos de las industrias
              mediante la excelencia y calidad de los productos que elaboramos,
              trabajar con entrega y prefesionalismo para ofrecer la mejor
              calidad, beneficiando a nuestros clientes con la adquisición de
              sus pedidos (acero)
            </p>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Chancadora</h2>
        </div>
        <div className="container-img-producto">
          <div className="descripcion-producto">
            <h3>Descripcion</h3>
            <p>
              Superar las expectativas de nuestros clientes con satisfacer las
              necesidades y los requerimientos de las industrias mediante la
              excelencia y necesidades y los requerimientos de las industrias
              mediante la excelencia y calidad de los productos que elaboramos,
              trabajar con entrega y prefesionalismo para ofrecer la mejor
              calidad, beneficiando a nuestros clientes con la adquisición de
              sus pedidos (acero)
            </p>
          </div>
          <div className="img-producto">
            <img src={p} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button type="button" class="btn btn-primary">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Celdas de Floracion</h2>
        </div>
        <div className="container-img-producto">
          <div className="img-producto">
            <img src={p} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button type="button" class="btn btn-primary">
                Ver Detalles
              </button>
            </div>
          </div>
          <div className="descripcion-producto">
            <h3>Descripcion</h3>
            <p>
              Superar las expectativas de nuestros clientes con satisfacer las
              necesidades y los requerimientos de las industrias mediante la
              excelencia y necesidades y los requerimientos de las industrias
              mediante la excelencia y calidad de los productos que elaboramos,
              trabajar con entrega y prefesionalismo para ofrecer la mejor
              calidad, beneficiando a nuestros clientes con la adquisición de
              sus pedidos (acero)
            </p>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h3>Bombas lameras</h3>
        </div>
        <div className="container-img-producto">
          <div className="descripcion-producto">
            <h3>Descripcion</h3>
            <p>
              Superar las expectativas de nuestros clientes con satisfacer las
              necesidades y los requerimientos de las industrias mediante la
              excelencia y necesidades y los requerimientos de las industrias
              mediante la excelencia y calidad de los productos que elaboramos,
              trabajar con entrega y prefesionalismo para ofrecer la mejor
              calidad, beneficiando a nuestros clientes con la adquisición de
              sus pedidos (acero)
            </p>
          </div>
          <div className="img-producto">
            <img src={p} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button type="button" class="btn btn-primary">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Molino a Bolas</h2>
        </div>
        <div className="container-img-producto">
          <div className="img-producto">
            <img src={molino_bolas} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button
                type="button"
                class="btn btn-primary"
                to="/productos/maquinaria/molino_a_bolas"
                onClick={handlemolinobolasClick}
              >
                Ver Detalles
              </button>
            </div>
          </div>
          <div className="descripcion-producto">
            <h3>CARACTERISTICAS TECNICAS MOLINOS</h3>
            <table>
              <thead>
                <tr>
                  <th>Molino</th>
                  <th>Carga de Bolas (Kg/45%vol)</th>
                  <th>Potencia del Motor (HP)</th>
                  <th>Velocidad de Rotación (RPM)</th>
                  <th>Capacidad (Toneladas por 24 horas)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>3X4</td>
                  <td>1800</td>
                  <td>15</td>
                  <td>33</td>
                  <td>17</td>
                </tr>
                <tr>
                  <td>3X6</td>
                  <td>2750</td>
                  <td>20</td>
                  <td>33</td>
                  <td>27</td>
                </tr>
                <tr>
                  <td>5X5</td>
                  <td>6200</td>
                  <td>50</td>
                  <td>26</td>
                  <td>71</td>
                </tr>
                <tr>
                  <td>5X6</td>
                  <td>7450</td>
                  <td>60</td>
                  <td>26</td>
                  <td>85</td>
                </tr>
                <tr>
                  <td>5X8</td>
                  <td>10400</td>
                  <td>75</td>
                  <td>26</td>
                  <td>116</td>
                </tr>
                <tr>
                  <td>6X6</td>
                  <td>10800</td>
                  <td>125</td>
                  <td>24-25</td>
                  <td>152</td>
                </tr>
                <tr>
                  <td>6X8</td>
                  <td>14350</td>
                  <td>150</td>
                  <td>24-25</td>
                  <td>202</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h3>Aprom Feeder</h3>
        </div>
        <div className="container-img-producto">
          <div className="descripcion-producto">
            <h3>Descripcion</h3>
            <p>
              Superar las expectativas de nuestros clientes con satisfacer las
              necesidades y los requerimientos de las industrias mediante la
              excelencia y necesidades y los requerimientos de las industrias
              mediante la excelencia y calidad de los productos que elaboramos,
              trabajar con entrega y prefesionalismo para ofrecer la mejor
              calidad, beneficiando a nuestros clientes con la adquisición de
              sus pedidos (acero)
            </p>
          </div>
          <div className="img-producto">
            <img src={p} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button type="button" class="btn btn-primary">
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </sectionm>
  );
};
