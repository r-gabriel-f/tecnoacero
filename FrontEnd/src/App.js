import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { Inicio } from "./conponents/inicio/Inicio";
import { Institucion } from "./conponents/institucion/Institucion";
import { Servicios } from "./conponents/servicios/Servicios";
import { Infraestructura } from "./conponents/infraestructura/Infraestructura";
import { Proceso } from "./conponents/proceso/Proceso";
import { Mapa } from "./conponents/mapa/Mapa";
import { Productos } from "./conponents/productos_mineria/Productos";
import { Detalles_Molino } from "./conponents/detalles/Detalles_Molino";
import { Detalles_Chancadora } from "./conponents/detalles/Detalles_Chancadora";
import { Detalles_Bombas } from "./conponents/detalles/Detalles_Bombas";
import { Detalles_Celdas } from "./conponents/detalles/Detalles_Celdas";
import { Detalles_Mesa } from "./conponents/detalles/Detalles_Mesa";
import { Detalles_Aprom } from "./conponents/detalles/Detalles_Aprom";
import { Productos_Minieria } from "./conponents/productos_mineria/Productos_Minieria";
import { Detalle_Rhyno } from "./conponents/detalles/Detalle_Rhyno";
import { Detalle_Metalero } from "./conponents/detalles/Detalle_Metalero";
import { Detalle_Granby } from "./conponents/detalles/Detalle_Granby";
import { Repuestos } from "./conponents/repuestos_mineria/Repuestos";
import { Mesa_Concentradora } from "./conponents/products/Mesa_Concentradora";
import { Chancadora } from "./conponents/products/Chancadora";
import { Celda_de_Flotación } from "./conponents/products/Celda_de_Flotación";
import { Bombas_Lameras } from "./conponents/products/Bombas_Lameras";
import { Molino_a_Bolas } from "./conponents/products/Molino_a_Bolas";
import { ApromFeeder } from "./conponents/products/ApromFeeder";
import { Repuestos_Mineria } from "./conponents/repuestos_mineria/Repuestos_Mineria";
import { Locomotora_Rhyno } from "./conponents/products/Locomotora_Rhyno";
import { Carro_Metalero } from "./conponents/products/Carro_Metalero";
import { Carro_Granby } from "./conponents/products/Carro_Granby";
import Navbar from "./conponents/navbar/Navbar";
import { ContactoEnd } from "./conponents/contacto_end/ContactoEnd";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/institucion" element={<Institucion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/infraestructura" element={<Infraestructura />} />
        <Route path="/proceso" element={<Proceso />} />
        <Route path="/contacto" element={<Mapa />} />
        <Route path="/productos/maquinaria" element={<Productos />} />
        <Route
          path="/productos/maquinaria/molino_a_bolas"
          element={<Detalles_Molino />}
        />
        <Route
          path="/productos/maquinaria/chancadora"
          element={<Detalles_Chancadora />}
        />
        <Route
          path="/productos/maquinaria/bombas_lameras"
          element={<Detalles_Bombas />}
        />
        <Route
          path="/productos/maquinaria/celda_de_flotacion"
          element={<Detalles_Celdas />}
        />
        <Route
          path="/productos/maquinaria/mesa_concentradora"
          element={<Detalles_Mesa />}
        />
        <Route
          path="/productos/maquinaria/aprom_feeder"
          element={<Detalles_Aprom />}
        />

        <Route
          path="/productos/extracción_minera"
          element={<Productos_Minieria />}
        />
        <Route
          path="/productos/extracción_minera/locomotora_rhyno"
          element={<Detalle_Rhyno />}
        />
        <Route
          path="/productos/extracción_minera/carro_metalero"
          element={<Detalle_Metalero />}
        />
        <Route
          path="/productos/extracción_minera/carro_granby"
          element={<Detalle_Granby />}
        />

        <Route path="/repuestos/maquinaria" element={<Repuestos />} />

        <Route
          path="/repuestos/maquinaria/mesa_concentradora"
          element={<Mesa_Concentradora />}
        />
        <Route
          path="/repuestos/maquinaria/chancadora"
          element={<Chancadora />}
        />
        <Route
          path="/repuestos/maquinaria/celda_de_flotacion"
          element={<Celda_de_Flotación />}
        />
        <Route
          path="/repuestos/maquinaria/bombas_lameras"
          element={<Bombas_Lameras />}
        />
        <Route
          path="/repuestos/maquinaria/molino_a_bolas"
          element={<Molino_a_Bolas />}
        />
        <Route
          path="/repuestos/maquinaria/aprom_feeder"
          element={<ApromFeeder />}
        />

        <Route
          path="/repuestos/extracción_minera"
          element={<Repuestos_Mineria />}
        />

        <Route
          path="/repuestos/extracción_minera/locomotora_rhyno"
          element={<Locomotora_Rhyno />}
        />
        <Route
          path="/repuestos/extracción_minera/carro_metalero"
          element={<Carro_Metalero />}
        />
        <Route
          path="/repuestos/extracción_minera/carro_granby"
          element={<Carro_Granby />}
        />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>

      <ContactoEnd />
    </Router>
  );
}

export default App;
