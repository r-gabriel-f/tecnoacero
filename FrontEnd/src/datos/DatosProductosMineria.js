import { useNavigate } from "react-router-dom";
import locomotorarhino from "../assets/img/productos/locomotorarhino.webp";
import carrito from "../assets/img/productos/carrometalero.webp";
import carrogranby from "../assets/img/productos/carrogranby.webp";
const DatosProductosMineria = () => {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const handlelocomotorarhynoClick = () => {
    navigate("/productos/extracción_minera/locomotora_rhyno");

  };

  const handlecarrometaleroClick = () => {
    navigate("/productos/extracción_minera/carro_metalero");

  };

  const handlecarrogranbyClick = () => {
    navigate("/productos/extracción_minera/carro_granby");

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
