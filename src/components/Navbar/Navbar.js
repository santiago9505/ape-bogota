import React, { useState, useContext } from "react";

//assets
import Logo from "../../assets/static/logo-ape-blanco.svg";
import MenuIcon from "../../assets/static/menu-icon.png";
import AudioStart from "../../audio/audio_accesible.mp3";

const Navbar = () => {
  return (
    <nav className="bg-principal-100 px-10 py-6 text-white flex justify-between sm:bg-red-500 md:bg-green-600 lg:bg-pink-500 xl:bg-yellow-500 2xl:bg-purpple-500 3xl:bg-gray-500">
      <article className="">
        <img className="w-72" src={Logo} alt="logo" />
      </article>
      <div>
        <audio className="h-20">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>

      <a href="" className="flex items-center">
        <img className="w-8" src={MenuIcon} alt="" />
      </a>
      <ul className="flex flex-col gap-8 absolute text-right p-8 h-2/6 text-2xl right-0 top-28 bg-principal-100">
        <li>
          <a href="">Empleo</a>
        </li>
        <li>
          <a href="">Formación</a>
        </li>
        <li>
          <a href="">Emprendimiento</a>
        </li>
        <li>
          <a href="">Contáctanos</a>
        </li>
        <li>
          <a href="">Otros Servicios</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
