import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import { Inicio } from "./conponents/Inicio";
import { ContactoEnd } from "./conponents/ContactoEnd";
import { Institucion } from "./conponents/Institucion";
import { Productos } from "./conponents/Productos";
import { Mesa_Concentradora } from "./conponents/products/Mesa_Concentradora";
import { Chancadora } from "./conponents/products/Chancadora";
import { Celda_de_Flotación } from "./conponents/products/Celda_de_Flotación";
import { Molino_a_Bolas } from "./conponents/products/Molino_a_Bolas";
import { Servicios } from "./conponents/Servicios";
import { Mapa } from "./conponents/Mapa";
import Navbar from "./conponents/Navbar";
import { Productos_Minieria } from "./conponents/Productos_Minieria";

function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/institucion" element={<Institucion />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicacion" element={<Mapa />} />
          <Route path="/productos/maquinaria" element={<Productos />} />
          <Route path="/productos/maquinaria/mesa_concentradora" element={<Mesa_Concentradora />} />
          <Route path="/productos/maquinaria/molino_a_bolas" element={<Molino_a_Bolas />} />
          <Route path="/productos/extracción_minera" element={<Productos_Minieria />} />

          
          {/* Resto de las rutas */}
        </Routes>
      </div>
      <ContactoEnd />
    </Router>
  );
}

export default App;
