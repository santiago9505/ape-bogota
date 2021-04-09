import React from "react";

const LastOffer = () => {
  return (
    <div className="bg-gray-200 rounded-sm flex flex-col gap-2 font-sans tracking-tight text-lg py-4 mx-auto mb-4 w-11/12 max-w-md">
      <article className="text-center font-bold text-xl text-blue-450 self-center p-2 py-auto">
        <h1>ÚLTIMAS CONVOCATORIAS</h1>
      </article>
      <article className="flex justify-between px-3 gap-5">
        <p className="bg-green-450 text-center rounded-sm shadow-2xl p-2 text-white pt-3 self-center">
          Del 05 al 11 de marzo del 2021
        </p>
        <p className="text-blue-450 text-center w-96">
          Inscripciones a programas de formación en modalidades presencial y a
          distancia
        </p>
      </article>
    </div>
  );
};

export default LastOffer;
