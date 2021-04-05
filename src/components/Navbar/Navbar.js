import React, { useState } from "react";

//assets
import Logo from "../../assets/static/logo-ape-blanco.svg";
import MenuIcon from "../../assets/static/menu-icon.png";
import MenuIcon2 from "../../assets/static/menu-icon2.png";
import AudioStart from "../../audio/audio_accesible.mp3";

const Navbar = () => {
  const navbarStyle =
    "absolute flex flex-col w-7/12 gap-1 text-start border-2 text-xl py-4 px-2 right-0.5 top-24 rounded-md bg-principal-100 leading-10";
  const [theme, setTheme] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };
  return (
    <nav className="top-0 bg-principal-100 border-b-4 border-principal-300 font-sena px-10 py-6 text-white flex justify-between items-center sm:bg-red-500 md:bg-green-600 lg:bg-pink-500 xl:bg-yellow-500 2xl:bg-purpple-500 3xl:bg-gray-500">
      <article className="flex w-40 sm:w-44 md:w-2/12 md:max-w-xs">
        <img className="w-full" src={Logo} alt="logo" />
      </article>
      <audio
        className="h-4 hidden flex w-20 sm:h-6 md:w-60"
        alt="audio_presiona_espacio"
        controls
      >
        <source src={AudioStart} type="audio/mp3" />
      </audio>
      <a href="" className="flex items-center w-8" onClick={handleClick}>
        <img src={theme ? MenuIcon2 : MenuIcon} className="w-full" alt="" />
      </a>
      <ul className={theme ? navbarStyle : "hidden " + navbarStyle}>
        <li>
          <a href="#empleo">Empleo</a>
        </li>
        <li>
          <a href="#formacion">Formación</a>
        </li>
        <li>
          <a href="#orientacion">Orientación</a>
        </li>
        <li>
          <a href="#emprendimiento">Emprendimiento</a>
        </li>
        <li>
          <a href="#contactanos">Contáctanos</a>
        </li>
        <li>
          <a href="otros">Otros Servicios</a>
        </li>
        <li>
          <a href="otros">Funcionarios</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
