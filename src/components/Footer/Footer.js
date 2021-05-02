import React from "react";
import Instagram from "../../assets/static/instagram.svg";
import Twitter from "../../assets/static/twitter.svg";
import LinkedIn from "../../assets/static/linkedin.svg";
import Location from "../../assets/static/location.svg";
import Email from "../../assets/static/email.svg";

const Footer = () => {
  return (
    <div>
      <article className="border-b-4 border-principal-200 bg-gray-100 w-full flex flex-col h-full text-lg font-sena items-center text-center justify-center py-6">
        <h2 className="font-extrabold">
          ¿TIENES ALGUNA DUDA O SOLICITUD?
          <br />
          CONTÁCTANOS DILIGENCIANDO EL SIGUIENTE FORMULARIO
        </h2>
        <a
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcPCyy4vk02R0VBskxas5_uaYzbSud1LmU6-S958qnFUMVZEQ0paT0JLVzFGOE5JNEJYVzNEWDQyUS4u"
          className="underline bg-principal-100 text-lg rounded-3xl text-white w-48 align-center p-1 mt-2 hover:bg-blue-700"
        >
          Diligencia tus datos
        </a>
      </article>
      <footer className="w-full border-t-4 border-principal-200 flex flex-col items-center gap-4 text-center font-semibold text-white text-lg font-sena bg-principal-300 py-4 lg:border-t-8 lg:p-8 lg:leading-6 lg:grid lg:grid-cols-9 lg:justify-items-center">
        <article className="w-64 lg:w-72 lg:col-span-3">
          <h2>© Agencia Pública de Empleo - SENA, Regional Distrito Capital</h2>
        </article>
        <article className="flex flex-col justify-center lg:col-span-2">
          <img className="w-8 mx-auto" src={Location} alt="Ubicación" />
          <p>Ubicación</p>
          <p>Calle 65 # 11 - 70</p>
        </article>
        <article className="lg:col-span-2">
          <img className="w-8 mx-auto" src={Email} alt="Correo" />
          <p>Correo Electrónico</p>
          <p>spedccalle65@sena.edu.co</p>
        </article>
        <article className="flex gap-4 lg:col-span-2 lg:gap-6">
          <a href="">
            <img className="w-8" src={Instagram} alt="instagram" />
          </a>
          <a href="">
            <img className="w-8" src={LinkedIn} alt="linkedin" />
          </a>
          <a href="">
            {" "}
            <img className="w-8" src={Twitter} alt="twitter" />
          </a>
        </article>
      </footer>
    </div>
  );
};

export default Footer;
