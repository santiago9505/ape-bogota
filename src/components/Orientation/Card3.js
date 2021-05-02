import React from "react";
import LogoSena from "../../assets/static/logo-sena-blanco.png";

const Card3 = () => {
  return (
    <article className="flex flex-col justify-between font-sena border-2 p-4 bg-principal-200 rounded-xl border-black font-semibold text-xxxs h-40 w-4/6 text-xs text-center mx-auto my-6 sm:h-60">
      <div className="flex justify-between font-sena text-left text-2xl text-principal-100 font-bold">
        <h1 className="w-72">TALLER DE PREPARACIÓN A LA VIDA LABORAL</h1>
        <figure>
          <img className="w-20" src={LogoSena} alt="logo-sena" />
        </figure>
      </div>
      <div>
        <figure>
          <img src="" alt="logo-teams" />
        </figure>

        <a href="">Inscripciones</a>
      </div>
    </article>
  );
};

export default Card3;
