import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import "./App.css";

import { Inicio } from "./conponents/Inicio";
import { ContactoEnd } from "./conponents/ContactoEnd";
import { Institucion } from "./conponents/Institucion";
import { Productos } from "./conponents/Productos";
import { Mesa_Concentradora } from "./conponents/products/Mesa_Concentradora";
import { Chancadora } from "./conponents/products/Chancadora";
import { Celda_de_Flotación } from "./conponents/products/Celda_de_Flotación";
import { Bombas_Lameras} from "./conponents/products/Bombas_Lameras";
import { Molino_a_Bolas } from "./conponents/products/Molino_a_Bolas";
import { Servicios } from "./conponents/Servicios";
import { Mapa } from "./conponents/Mapa";
import Navbar from "./conponents/Navbar";
import { Productos_Minieria } from "./conponents/Productos_Minieria";
import { ApromFeeder } from "./conponents/products/ApromFeeder";
import { Locomotora_Rhyno } from "./conponents/products/Locomotora_Rhyno";
import { Carro_Metalero } from "./conponents/products/Carro_Metalero";
import { Carro_Granby } from "./conponents/products/Carro_Granby";
import EmailForm from "./conponents/EmailForm";
import { Proceso } from "./conponents/Proceso";
import { Infraestructura } from "./conponents/Infraestructura";




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
          <Route path="/productos/maquinaria/mesa_concentradora" element={<Mesa_Concentradora />} />
          <Route path="/productos/maquinaria/chancadora" element={<Chancadora />} />
          <Route path="/productos/maquinaria/celda_de_flotacion" element={<Celda_de_Flotación />} />
          <Route path="/productos/maquinaria/bombas_lameras" element={<Bombas_Lameras />} />
          <Route path="/productos/maquinaria/molino_a_bolas" element={<Molino_a_Bolas />} />
          <Route path="/productos/maquinaria/aprom_feeder" element={<ApromFeeder />} />
          <Route path="/productos/extracción_minera" element={<Productos_Minieria />} />
          <Route path="/productos/extracción_minera/locomotora_rhyno" element={<Locomotora_Rhyno />} />
          <Route path="/productos/extracción_minera/carro_metalero" element={<Carro_Metalero />} />
          <Route path="/productos/extracción_minera/carro_granby" element={<Carro_Granby />} />
          <Route path="/*" element={<Navigate to="/" />} />
          
          
          {/* Resto de las rutas */}
        </Routes>

      <ContactoEnd />
    </Router>
  );
}

export default App;
