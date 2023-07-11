import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./conponents/Navbar";
import { Inicio } from "./conponents/Inicio";
import { ContactoEnd } from "./conponents/ContactoEnd";
import { Institucion } from "./conponents/Institucion";
import { Productos } from "./conponents/Productos";
import { Mesa_Concentradora } from "./conponents/products/Mesa_Concentradora";
import { Chancadora } from "./conponents/products/Chancadora";
import { Celda_de_Flotación } from "./conponents/products/Celda_de_Flotación";
import { Molino_a_Bolas } from "./conponents/products/Molino_a_Bolas";
import { Servicios } from "./conponents/Servicios";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Servicios></Servicios>
      <ContactoEnd></ContactoEnd>
    </div>
  );
}

export default App;
