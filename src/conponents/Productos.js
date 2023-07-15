import { React, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../conponents/Productos.css";

import molino_bolas from "../assets/img/molino a bolas.jpg";
import apronfeader from "../assets/img/apromfeeder.jpg";
import bonbaslameras from "../assets/img/bonbaslameras.jpg";
import chancadora from "../assets/img/chancadora.jpg";
import mesa from "../assets/img/mesa.jpg";
import celdasdeflotacion from "../assets/img/celdasdeflotacion.jpg";

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

  //chancadora
  const handlechancadoraClick = () => {
    navigate("/productos/maquinaria/chancadora");
    setIsMenuOpen(false);
  };
  //celdas de flotacion
  const handleceldasdeflotacionClick = () => {
    navigate("/productos/maquinaria/celda_de_flotacion");
    setIsMenuOpen(false);
  };
  //bombas lameras
  const handlebombaslamerasClick = () => {
    navigate("/productos/maquinaria/bombas_lameras");
    setIsMenuOpen(false);
  };

  //molino a bolas

  const handlemolinobolasClick = () => {
    navigate("/productos/maquinaria/molino_a_bolas");
    setIsMenuOpen(false);
  };
  //aprom freeder
  const handleapromfeederClick = () => {
    navigate("/productos/maquinaria/aprom_feeder");
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
            <img src={mesa} href id="p" className="img-productos" />
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
            <table>
              <thead>
                <tr>
                  <th>Categoría</th>
                  <th>--------</th>
                  <th>--------</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TAMAÑO PARTICULA</td>

                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>MOTOR ELECTRICO</td>

                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>PESO(DESPACHO)</td>

                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>VOLUMEN (DESPACHADO)</td>

                  <td>1</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>CATEGORIA</td>

                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
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
              También llamada trituradora de quijada, es una máquina de
              trituración de primer nivel (trituración gruesa y media), tritura
              minerales y demás materiales sólidos.
            </p>
            <p>Caracteristicas:</p>
            <ul>
              <li>Alto rendimiento para triturar</li>
              <li>Uniformidad en la granulometría</li>
              <li>Estructura sencilla</li>
              <li>Fácil reparación y mantenimiento</li>
              <li>Fácil de controlar y operar</li>
              <li>Reducidos costos de operación</li>
              <li>Puertos de alimentación y descarga ajustables</li>
              <li>Bajo nivel de ruido y menos polvo</li>
            </ul>
          </div>
          <div className="img-producto">
            <img src={chancadora} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button
                type="button"
                class="btn btn-primary"
                to="/productos/maquinaria/chancadora"
                onClick={handlechancadoraClick}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="productos">
        <div className="nomnbre-producto">
          <h2>Celdas de Flotación</h2>
        </div>
        <div className="container-img-producto">
          <div className="img-producto">
            <img
              src={celdasdeflotacion}
              href
              id="p"
              className="img-productos"
            />
            <div className="botones-detalles">
              <button
                type="button"
                class="btn btn-primary"
                to="/productos/maquinaria/celda_de_flotacion"
                onClick={handleceldasdeflotacionClick}
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
          <h3>Bombas lameras</h3>
        </div>
        <div className="container-img-producto">
          <div className="descripcion-producto">
            <h3>Descripcion</h3>
            <table>
              <thead>
                <tr>
                  <th>Bombas</th>
                  <th>Tamaño</th>
                  <th>Caudal Máximo</th>
                  <th>Presión</th>
                  <th>Temperatura</th>
                  <th>TDH</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>WIFLEY</td>
                  <td>6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>WIFLEY</td>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>SYMONACO</td>
                  <td>6</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>GALIGUER</td>
                  <td>2 1/2 X 2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>DENVER SRL</td>
                  <td>5X4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>VOGEL</td>
                  <td>5X4</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="img-producto">
            <img src={bonbaslameras} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button
                type="button"
                class="btn btn-primary"
                to="/productos/maquinaria/bombas_lameras"
                onClick={handlebombaslamerasClick}
              >
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
            <table>
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>--------</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>TAMAÑO </td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>CAUDAL MAXIMO</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>ALTURA MANOMÉTRICA MÁXIMA</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>TAMAÑO MÁXIMO DE SÓLIDOS</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>TOLERANCIA A ABRASIÓN</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>ENTRADA</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>SALIDA</td>

                  <td>1</td>
                </tr>
                <tr>
                  <td>MOTOR</td>

                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="img-producto">
            <img src={apronfeader} href id="p" className="img-productos" />
            <div className="botones-detalles">
              <button
                type="button"
                class="btn btn-primary"
                to="/productos/maquinaria/aprom_feeder"
                onClick={handleapromfeederClick}
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>
      </div>
    </sectionm>
  );
};
