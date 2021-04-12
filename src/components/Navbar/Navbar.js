import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    "absolute flex flex-col w-8/12 max-w-sm gap-4 text-start border-2 text-xl py-4 px-4 right-0.5 top-24 rounded-md bg-principal-100 leading-10 sm:gap-5 sm:top-28";
  const [theme, setTheme] = useState(false);
  const [image, setImage] = useState(false);
  const [ghyph2, setGhyph2] = useState(false);
  const [ghyph3, setGhyph3] = useState(false);
  const [ghyph4, setGhyph4] = useState(false);
  const [ghyph5, setGhyph5] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setTheme(!theme);
  };

  const handleHover1 = (e) => {
    setImage(!image);
  };

  const handleHover2 = (e) => {
    setGhyph2(!ghyph2);
  };

  const handleHover3 = (e) => {
    setGhyph3(!ghyph3);
  };

  const handleHover4 = (e) => {
    setGhyph4(!ghyph4);
  };

  const handleHover5 = (e) => {
    setGhyph5(!ghyph5);
  };

  return (
    <nav className="absolute sticky top-0 bg-principal-100 border-b-8 border-principal-300 font-sena px-10 py-6 text-white flex justify-between items-center sm:bg-principal-200 md:bg-green-600 lg:bg-pink-500 xl:bg-principal-100 2xl:bg-purpple-500 3xl:bg-gray-500">
      <article className="flex w-52">
        <img className="w-full" src={Logo} alt="logo" />
      </article>
      <audio
        className="h-4 hidden flex w-20 sm:h-6 md:w-60"
        alt="audio_presiona_espacio"
        controls
      >
        <source src={AudioStart} type="audio/mp3" />
      </audio>
      <Link to="" className="flex items-center w-8" onClick={handleClick}>
        <img src={theme ? MenuIcon2 : MenuIcon} className="w-full" alt="" />
      </Link>
      <ul className={theme ? navbarStyle : "hidden " + navbarStyle}>
        <li className="flex gap-4 items-center">
          <a
            onMouseEnter={handleHover1}
            onMouseLeave={handleHover1}
            href="#empleo"
          >
            <img
              className={
                image
                  ? "absolute top-14 right-40 w-60 block sm:w-80 sm:right-90"
                  : "hidden"
              }
              src="https://media.giphy.com/media/PbmAiZCa2sCzaLZttd/giphy.gif"
              alt=""
            />
            <img className="w-8 h-8 pb-1" src={EmployIcon} alt="" />
          </a>
          <a href="#empleo">Empleo</a>
        </li>
        <li className="flex gap-4 items-center">
          <a
            onMouseEnter={handleHover2}
            onMouseLeave={handleHover2}
            href="#formacion"
          >
            <img
              className={
                ghyph2
                  ? "absolute top-28 right-40 w-60 block sm:w-80 sm:right-90"
                  : "hidden"
              }
              src="https://media.giphy.com/media/T6QoFn5bn0SS9RAjjT/giphy.gif"
              alt=""
            />
            <img className="w-8 h-8 pb-1" src={EducationIcon} alt="" />
          </a>

          <a href="#formacion">Formación</a>
        </li>
        <li className="flex gap-4 items-center">
          <a
            onMouseEnter={handleHover3}
            onMouseLeave={handleHover3}
            href="#orientacion"
          >
            <img
              className={
                ghyph3
                  ? "absolute top-40 right-40 w-60 block sm:w-80 sm:right-90"
                  : "hidden"
              }
              src="https://media.giphy.com/media/3sroI8NT5rAL1oorYX/giphy.gif"
              alt=""
            />
            <img className="w-8 h-8 pb-1" src={OrientationIcon} alt="" />
          </a>
          <a href="#orientacion">Orientación</a>
        </li>
        <li className="flex gap-4 items-center">
          <a
            onMouseEnter={handleHover4}
            onMouseLeave={handleHover4}
            href="http://www.fondoemprender.com/SitePages/Home.aspx"
          >
            <img
              className={
                ghyph4
                  ? "absolute top-56 right-40 w-60 block sm:w-80 sm:right-90"
                  : "hidden"
              }
              src="https://media.giphy.com/media/cCvmaO400uX2cIVz5R/giphy.gif"
              alt=""
            />
            <img className="w-8 h-8 pb-1" src={EmprendimientoIcon} alt="" />
          </a>
          <a href="http://www.fondoemprender.com/SitePages/Home.aspx">
            Emprendimiento
          </a>
        </li>
        <li className="flex gap-4 items-center">
          <a
            onMouseEnter={handleHover5}
            onMouseLeave={handleHover5}
            href="#contactanos"
          >
            <img
              className={
                ghyph5
                  ? "absolute top-72 right-40 w-60 block sm:w-80 sm:right-90"
                  : "hidden"
              }
              src="https://media.giphy.com/media/bAFQns8md2BSxMLkeJ/giphy.gif"
              alt=""
            />
            <img className="w-8 h-8 pb-1" src={ContactIcon} alt="" />
          </a>

          <a href="#contactanos">Contáctanos</a>
        </li>
        <li className="flex gap-4 items-center">
          <Link to="#otros">
            <img className="w-8 h-3 pb-1" src={MoreIcon} alt="" />
          </Link>

          <Link to="#otros">Otros Servicios</Link>
        </li>
        <li className="flex gap-4 items-center">
          <Link to="/login">
            <img className="w-8 h-8" src={ProfileIcon} alt="" />
          </Link>
          <Link to="/login">Funcionarios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
