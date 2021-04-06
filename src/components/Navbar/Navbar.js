import React, { useState } from "react";

//assets
import Logo from "../../assets/static/logo-ape-blanco.svg";
import MenuIcon from "../../assets/static/menu-icon.png";
import MenuIcon2 from "../../assets/static/menu-icon2.png";
import AudioStart from "../../audio/audio_accesible.mp3";
import EmployIcon from "../../assets/static/employ-icon.png";
import EducationIcon from "../../assets/static/education-icon.png";
import OrientationIcon from "../../assets/static/orientation-icon.png";
import EmprendimientoIcon from "../../assets/static/emprendimiento-icon.png";
import MoreIcon from "../../assets/static/more-icon.png";
import ContactIcon from "../../assets/static/contact-icon.png";
import ProfileIcon from "../../assets/static/profile-icon.png";

const Navbar = () => {
  const navbarStyle =
    "absolute flex flex-col w-8/12 max-w-sm gap-4 text-start border-2 text-xl py-4 px-4 right-0.5 top-24 rounded-md bg-principal-100 leading-10";
  const [theme, setTheme] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };
  return (
    <nav className="sticky top-0 bg-principal-100 border-b-4 border-principal-300 font-sena px-10 py-6 text-white flex justify-between items-center sm:bg-red-500 md:bg-green-600 lg:bg-pink-500 xl:bg-yellow-500 2xl:bg-purpple-500 3xl:bg-gray-500">
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
        <li className="flex gap-4 items-center">
          <a href="#empleo">
            <img className="w-8 h-8 pb-1" src={EmployIcon} alt="" />
          </a>
          <a href="#empleo">Empleo</a>
        </li>
        <li className="flex gap-4 items-center">
          <a href="#formacion">
            <img className="w-8 h-8 pb-1" src={EducationIcon} alt="" />
          </a>

          <a href="#formacion">Formación</a>
        </li>
        <li className="flex gap-4 items-center">
          <a href="#orientacion">
            <img className="w-8 h-8 pb-1" src={OrientationIcon} alt="" />
          </a>
          <a href="#orientacion">Orientación</a>
        </li>
        <li className="flex gap-4 items-center">
          <a href="#emprendimiento">
            <img className="w-8 h-8 pb-1" src={EmprendimientoIcon} alt="" />
          </a>
          <a href="#emprendimiento">Emprendimiento</a>
        </li>
        <li className="flex gap-4 items-center">
          <a href="#contactanos">
            <img className="w-8 h-8 pb-1" src={ContactIcon} alt="" />
          </a>

          <a href="#contactanos">Contáctanos</a>
        </li>
        <li className="flex gap-4 items-center">
          <a href="#otros">
            <img className="w-8 h-3 pb-1" src={MoreIcon} alt="" />
          </a>

          <a href="#otros">Otros Servicios</a>
        </li>
        <li className="flex gap-4 items-center">
          <a href="#funcionarios">
            <img className="w-8 h-8" src={ProfileIcon} alt="" />
          </a>
          <a href="#funcionarios">Funcionarios</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
