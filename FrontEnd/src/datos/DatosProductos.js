
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import molino_bolas from "../assets/img/productos/molino a bolas.webp";
import apronfeader from "../assets/img/productos/apromfeeder.webp";
import bonbaslameras from "../assets/img/productos/bonbaslameras.webp";
import chancadora from "../assets/img/productos/chancadora.webp";
import mesa from "../assets/img/productos/mesa.webp";
import celdasdeflotacion from "../assets/img/productos/celdasdeflotacion.webp";

const DatosProductos = () => {
    const  [isMenuOpen, setIsMenuOpen] = useState(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  const navigate = useNavigate();
  const handlemesaconcentradoraClick = () => {
    navigate("/productos/maquinaria/mesa_concentradora");
    setIsMenuOpen(false);
  };

  const handlechancadoraClick = () => {
    navigate("/productos/maquinaria/chancadora");
    setIsMenuOpen(false);
  };

  const handleceldasdeflotacionClick = () => {
    navigate("/productos/maquinaria/celda_de_flotacion");
    setIsMenuOpen(false);
  };

  const handlebombaslamerasClick = () => {
    navigate("/productos/maquinaria/bombas_lameras");
    setIsMenuOpen(false);
  };

  const handlemolinobolasClick = () => {
    navigate("/productos/maquinaria/molino_a_bolas");
    setIsMenuOpen(false);
  };

  const handleapromfeederClick = () => {
    navigate("/productos/maquinaria/aprom_feeder");
    setIsMenuOpen(false);
  };

  const products = [
    {
      id: 1,
      name: "Molino a Bolas",
      img: molino_bolas,
      to: "/productos/maquinaria/molino_a_bolas",
      direc: handlemolinobolasClick,
    },
    {
      id: 2,
      name: "Chancadora",
      img: chancadora,
      to: "/productos/maquinaria/chancadora",
      direc: handlechancadoraClick,
    },
    {
      id: 3,
      name: "Bombas lameras",
      img: bonbaslameras,
      to: "/productos/maquinaria/bombas_lameras",
      direc: handlebombaslamerasClick,
    },
    {
      id: 4,
      name: "Celdas de Flotación",
      img: celdasdeflotacion,
      to: "/productos/maquinaria/celda_de_flotacion",
      direc: handleceldasdeflotacionClick,
    },
    {
      id: 5,
      name: "Mesa Concentradora",
      img: mesa,
      to: "/productos/maquinaria/mesa_concentradora",
      direc: handlemesaconcentradoraClick,
    },
    {
      id: 6,
      name: "Aprom Feeder",
      img: apronfeader,
      to: "/productos/maquinaria/aprom_feeder",
      direc: handleapromfeederClick,
    },
  ];

  return products;
};

export default DatosProductos;
