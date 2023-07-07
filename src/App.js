import logo from './logo.svg';
import './App.css';
import { Navbar } from './conponents/Navbar';
import { Inicio } from './conponents/Inicio';
import { ContactoEnd } from './conponents/ContactoEnd';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Inicio></Inicio>
      <ContactoEnd></ContactoEnd>
    </div>
  );
}

export default App;
