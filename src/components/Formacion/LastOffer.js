import React from "react";

const LastOffer = () => {
  return (
    <div className="bg-gray-200 rounded-sm flex flex-col gap-2 font-sans tracking-tight mx-auto text-lg py-4 mb-4 w-11/12 max-w-md lg:grid lg:grid-cols-2 lg:max-w-none lg:text-xl 2xl:text-2xl 2xl:justify-center">
      <article className="text-center font-bold text-xl text-blue-450 self-center p-2 py-auto lg:text-2xl 2xl:text-3xl">
        <h1>ÚLTIMAS CONVOCATORIAS</h1>
      </article>
      <article className="flex justify-between px-3 gap-5 lg:justify-evenly">
        <p className="bg-green-450 text-center rounded-sm shadow-2xl p-2 text-white pt-3 self-center lg:w-48 lg:font-semibold lg:pt-2 2xl:w-72">
          DEL 21 DE FEBRERO AL 02 DE MARZO DEL 2022
        </p>
        <p className="text-blue-450 text-center w-96 lg:w-72 2xl:w-88">
          Inscripciones a programas de formación en modalidad virtual
        </p>
      </article>
    </div>
  );
};

export default LastOffer;
