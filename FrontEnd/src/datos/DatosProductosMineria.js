
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import locomotorarhino from "../assets/img/productos/locomotorarhino.webp";
import carrito from "../assets/img/productos/carrometalero.webp";
import carrogranby from "../assets/img/productos/carrogranby.webp";
const DatosProductosMineria = () => {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);

  window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();


  const handlelocomotorarhynoClick = () => {
    navigate("/productos/extracción_minera/locomotora_rhyno");
    setIsMenuOpen(false);
  };


  const handlecarrometaleroClick = () => {
    navigate("/productos/extracción_minera/carro_metalero");
    setIsMenuOpen(false);
  };

  const handlecarrogranbyClick = () => {
    navigate("/productos/extracción_minera/carro_granby");
    setIsMenuOpen(false);
  };


  const productsMineria = [
    {
      id: 1,
      name: "Locomotora Rhyno",
      img: locomotorarhino,
      to: "/productos/extracción_minera/locomotora_rhyno",
      direc: handlelocomotorarhynoClick,
    },
    {
      id: 2,
      name: "Carro Metalero",
      img: carrito,
      to: "/productos/extracción_minera/carro_metalero",
      direc: handlecarrometaleroClick,
    },
    {
      id: 3,
      name: "Carro Granby",
      img: carrogranby,
      to: "/productos/extracción_minera/carro_granby",
      direc: handlecarrogranbyClick,
    },
    
  ];

  return productsMineria;
};
export default DatosProductosMineria;