import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./conponents/Navbar";
import { Inicio } from "./conponents/Inicio";
import { ContactoEnd } from "./conponents/ContactoEnd";
import { Institucion } from "./conponents/Institucion";
import { Productos } from "./conponents/Productos";
import { Mesa_Concentradora } from "./conponents/products/Mesa_Concentradora";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Mesa_Concentradora></Mesa_Concentradora>
      <ContactoEnd></ContactoEnd>
    </div>
  );
}

export default App;
