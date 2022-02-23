import React from "react";
import LogoSena from "../../assets/static/logo-sena-blanco.png";
import Teams from "../../assets/static/teams-icon.png";

const Card3 = ({ name, description, link }) => {
  return (
    <button
      href=""
      className="flex flex-wrap carousel__item3 rounded-2xl border-1 border-gray-300 content-between justify-center font-sena h-96 w-80 sm:w-96 sm:h-80 sm:border-2 lg:w-105 3xl:w-115 3xl:h-96"
    >
      <div className="bg-gray-222 flex flex-wrap rounded-t-2xl justify-center font-medium font-sans content-center w-full h-10 3xl:text-xl">
        <p></p>
      </div>
      <div className="flex flex-col justify-center content-center text-left mx-4 font-extrabold text-principal-100 w-full h-10 gap-1 md:text-2xl 3xl:text-3xl">
        <p>{name}</p>
      </div>

      <div className="text-left px-4 text-lg 3xl:text-2xl">
        <p>{description}</p>
      </div>
      <div className="w-full flex justify-between mx-4 items-end">
        <figure className="w-16">
          <img src={Teams} alt="" />
        </figure>
        <a
          href={link}
          className="h-7 py-1 px-10 bg-blue-450 rounded-2xl hover:bg-principal-100 rounded-sm font-sans text-sm font-medium text-white h-5 3xl:text-lg"
        >
          INSCRIPCIONES
        </a>
      </div>
      <div className="bg-gray-222 flex flex-wrap rounded-b-2xl font-medium font-sans justify-center content-center w-full h-10">
        <p></p>
      </div>
    </button>
    // <article className="flex flex-col justify-between font-sena p-4 bg-principal-200 rounded-xl border-black font-semibold text-xxxs h-40 w-4/6 text-xs text-center mx-auto my-6 sm:h-60">
    //   <div className="font-sena text-left text-2xl text-principal-100 font-bold">
    //     <h1 className="">TALLER DE PREPARACIÓN A LA VIDA LABORAL</h1>
    //   </div>
    //   <div className="flex justify-between mx-4">
    //     <figure className="w-14">
    //       <img src={Teams} alt="logo-teams" />
    //     </figure>
    //     <button className="bg-principal-300 border-1 border-black font-sena text-base py-2 px-8 h-10 text-white font-extrabold rounded-full hover:bg-orange-450">
    //       <a href="">Inscripciones</a>
    //     </button>
    //   </div>
    // </article>
  );
};

export default Card3;
