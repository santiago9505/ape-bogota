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
import ProfileIcon from "../../assets/static/profile-icon.svg";

const Navbar = () => {
  const navbarStyle =
    "absolute flex flex-col w-8/12 max-w-sm gap-4 text-start border-2 text-xl py-4 px-4 right-0.5 top-24 rounded-md bg-principal-100 leading-10 sm:gap-5 sm:top-24 md:text-2xl md:gap-7 lg:static lg:flex lg:justify-end lg:flex-row lg:max-w-none lg:w-full lg:text-xl lg:gap-6 lg:border-none lg:py-0 lg:items-end xl:gap-8 2xl:text-2xl 2xl:gap-10 3xl:gap-14 3xl:text-3xl";
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
    <nav className="absolute sticky top-0 bg-principal-100 border-b-8 border-principal-300 font-sena px-10 py-4 text-white flex justify-between items-center md:static lg:items-center 3xl:py-8">
      <div className="w-full items-center flex sm:gap-8 lg:w-96 lg:flex-col lg:items-center lg:gap-2">
        <article className="flex w-52 3xl:w-80">
          <img className="w-full" src={Logo} alt="logo" />
        </article>
        <audio
          className="h-4 flex w-20 hidden sm:flex sm:w-3/6 md:w-3/6 md:max-w-md lg:w-full 3xl:h-7"
          alt="audio_presiona_espacio"
          controls
        >
          <source src={AudioStart} type="audio/mp3" />
        </audio>
      </div>

      <Link
        to=""
        className="flex items-center w-8 lg:hidden"
        onClick={handleClick}
      >
        <img src={theme ? MenuIcon2 : MenuIcon} className="w-full" alt="" />
      </Link>
      <ul className={theme ? navbarStyle : "hidden " + navbarStyle}>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col">
          <a
            onMouseEnter={handleHover1}
            onMouseLeave={handleHover1}
            href="#empleo"
          >
            <img
              className={
                image
                  ? "absolute rounded-xl border-4 border-principal-300 top-14 right-40 w-60 block sm:w-80 sm:right-90 md:w-88 md:right-96"
                  : "hidden"
              }
              src="https://media.giphy.com/media/PbmAiZCa2sCzaLZttd/giphy.gif"
              alt=""
            />
            <img
              className="w-8 h-8 pb-1 lg:hidden"
              src={EmployIcon}
              alt="empleo"
            />
          </a>
          <a className="hover:text-principal-300" href="#empleo">
            Empleo
          </a>
        </li>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col">
          <a
            onMouseEnter={handleHover2}
            onMouseLeave={handleHover2}
            href="#formacion"
          >
            <img
              className={
                ghyph2
                  ? "absolute rounded-xl border-4 border-principal-300 top-28 right-40 w-60 block sm:w-80 sm:right-90 md:w-88 md:right-96"
                  : "hidden"
              }
              src="https://media.giphy.com/media/T6QoFn5bn0SS9RAjjT/giphy.gif"
              alt=""
            />
            <img
              className="w-8 h-8 pb-1 lg:hidden"
              src={EducationIcon}
              alt=""
            />
          </a>

          <a className="hover:text-principal-300" href="#formacion">
            Formación
          </a>
        </li>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col">
          <a
            onMouseEnter={handleHover3}
            onMouseLeave={handleHover3}
            href="#orientacion"
          >
            <img
              className={
                ghyph3
                  ? "absolute rounded-xl border-4 border-principal-300 top-40 right-40 w-60 block sm:w-80 sm:right-90 md:w-88 md:right-96"
                  : "hidden"
              }
              src="https://media.giphy.com/media/3sroI8NT5rAL1oorYX/giphy.gif"
              alt=""
            />
            <img
              className="w-8 h-8 pb-1 lg:hidden"
              src={OrientationIcon}
              alt=""
            />
          </a>
          <a className="hover:text-principal-300" href="#orientacion">
            Orientación
          </a>
        </li>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col">
          <a
            onMouseEnter={handleHover4}
            onMouseLeave={handleHover4}
            href="http://www.fondoemprender.com/SitePages/Home.aspx"
          >
            <img
              className={
                ghyph4
                  ? "absolute rounded-xl border-4 border-principal-300 top-56 right-40 w-60 block sm:w-80 sm:right-90 md:w-88 md:right-96"
                  : "hidden"
              }
              src="https://media.giphy.com/media/cCvmaO400uX2cIVz5R/giphy.gif"
              alt=""
            />
            <img
              className="w-8 h-8 pb-1 lg:hidden"
              src={EmprendimientoIcon}
              alt=""
            />
          </a>
          <a
            className="hover:text-principal-300"
            href="http://www.fondoemprender.com/SitePages/Home.aspx"
          >
            Emprendimiento
          </a>
        </li>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col">
          <a
            onMouseEnter={handleHover5}
            onMouseLeave={handleHover5}
            href="#contactanos"
          >
            <img
              className={
                ghyph5
                  ? "absolute rounded-xl border-4 border-principal-300 top-72 right-40 w-60 block sm:w-80 sm:right-90 md:w-88 md:right-96"
                  : "hidden"
              }
              src="https://media.giphy.com/media/bAFQns8md2BSxMLkeJ/giphy.gif"
              alt=""
            />
            <img
              className="w-8 h-8 pb-1 lg:hidden"
              src={ContactIcon}
              alt="contáctanos"
            />
          </a>

          <a className="hover:text-principal-300" href="#contactanos">
            Contáctanos
          </a>
        </li>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col lg:hidden">
          <Link to="#otros">
            <img className="w-8 h-3 pb-1 lg:hidden" src={MoreIcon} alt="más" />
          </Link>

          <Link className="hover:text-principal-300" to="#otros">
            Otros Servicios
          </Link>
        </li>
        <li className="flex gap-4 items-center lg:gap-0 lg:flex-col">
          <Link to="/login">
            <img
              className="w-8 hover:opacity-50 h-8 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 3xl:w-14 3xl:h-14"
              src={ProfileIcon}
              alt="funcionarios"
            />
          </Link>
          <Link className="lg:hidden hover:text-principal-300" to="/login">
            Funcionarios
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
