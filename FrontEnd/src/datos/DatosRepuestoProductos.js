import { useNavigate } from "react-router-dom";
import molino_bolas from "../assets/img/productos/molino a bolas.webp";
import apronfeader from "../assets/img/productos/apromfeeder.webp";
import bonbaslameras from "../assets/img/productos/bonbaslameras.webp";
import chancadora from "../assets/img/productos/chancadora.webp";
import mesa from "../assets/img/productos/mesa.webp";
import celdasdeflotacion from "../assets/img/productos/celdasdeflotacion.webp";
const DatosRepuestoProductos = () => {
  const navigate = useNavigate();
  window.scrollTo({ top: 0, behavior: "smooth" });
  const handlemesaconcentradoraClick = () => {
    navigate("/repuestos/maquinaria/mesa_concentradora");

  };

  const handlechancadoraClick = () => {
    navigate("/repuestos/maquinaria/chancadora");

  };

  const handleceldasdeflotacionClick = () => {
    navigate("/repuestos/maquinaria/celda_de_flotacion");

  };

  const handlebombaslamerasClick = () => {
    navigate("/repuestos/maquinaria/bombas_lameras");

  };

  const handlemolinobolasClick = () => {
    navigate("/repuestos/maquinaria/molino_a_bolas");

  };

  const handleapromfeederClick = () => {
    navigate("/repuestos/maquinaria/aprom_feeder");

  };

  const products = [
    {
      id: 1,
      name: "Molino a Bolas",
      img: molino_bolas,
      to: "/repuestos/maquinaria/molino_a_bolas",
      direc: handlemolinobolasClick,
    },
    {
      id: 2,
      name: "Chancadora",
      img: chancadora,
      to: "/repuestos/maquinaria/chancadora",
      direc: handlechancadoraClick,
    },
    {
      id: 3,
      name: "Bombas lameras",
      img: bonbaslameras,
      to: "/repuestos/maquinaria/bombas_lameras",
      direc: handlebombaslamerasClick,
    },
    {
      id: 4,
      name: "Celdas de Flotación",
      img: celdasdeflotacion,
      to: "/repuestos/maquinaria/celda_de_flotacion",
      direc: handleceldasdeflotacionClick,
    },
    {
      id: 5,
      name: "Mesa Concentradora",
      img: mesa,
      to: "/repuestos/maquinaria/mesa_concentradora",
      direc: handlemesaconcentradoraClick,
    },
    {
      id: 6,
      name: "Aprom Feeder",
      img: apronfeader,
      to: "/repuestos/maquinaria/aprom_feeder",
      direc: handleapromfeederClick,
    },
  ];

  return products;
};
export default DatosRepuestoProductos;
