import React from "react";
import Instagram from "../../assets/static/instagram.svg";
import Twitter from "../../assets/static/twitter.svg";
import LinkedIn from "../../assets/static/linkedin.svg";
import Location from "../../assets/static/location.svg";
import Email from "../../assets/static/email.svg";

const Footer = () => {
  return (
    <div>
      <article className="bg-gray-100 w-full flex flex-col h-full text-xs font-sena items-center text-center justify-center py-6">
        <h2 className="font-extrabold">
          ¿TIENES ALGUNA DUDA O SOLICITUD?
          <br />
          CONTÁCTANOS DILIGENCIANDO EL SIGUIENTE FORMULARIO
        </h2>
        <button className="underline bg-principal-100 text-sm rounded-3xl text-white w-40 align-center p-1 mt-2">
          Diligencia tus datos
        </button>
      </article>
      <footer className="w-full flex flex-col items-center gap-2 text-center text-white text-xs font-sena bg-principal-300 py-4">
        <article className="w-44">
          <h2>©Agencia Pública de Empleo - SENA, Regional Distrito Capital</h2>
        </article>
        <article className="flex flex-col justify-center">
          <img className="w-6 mx-auto" src={Location} alt="Ubicación" />
          <p>Ubicación</p>
          <p>Calle 65 # 11 - 70</p>
        </article>
        <article>
          <img className="w-6 mx-auto" src={Email} alt="Correo" />
          <p>Correo Electrónico</p>
          <p>spedccalle65@sena.edu.co</p>
        </article>
        <article className="flex gap-4">
          <img className="w-5" src={Instagram} alt="instagram" />
          <img className="w-5" src={LinkedIn} alt="linkedin" />
          <img className="w-5" src={Twitter} alt="twitter" />
        </article>
      </footer>
    </div>
  );
};

export default Footer;
