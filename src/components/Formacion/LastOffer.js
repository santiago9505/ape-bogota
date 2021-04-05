import React from "react";

const LastOffer = () => {
  return (
    <div className="bg-gray-200 rounded-sm flex flex-col gap-2 font-sena content-center text-lg py-4 mx-6 mb-4">
      <article className="text-center font-bold  text-blue-450 self-center p-2 py-auto">
        <h1>ÚLTIMAS CONVOCATORIAS</h1>
      </article>
      <article className="flex justify-between px-4 gap-5">
        <p className="bg-green-450 rounded-sm shadow-2xl p-2 text-white pt-3 self-center">
          DEL 05 AL 11 DE MARZO DE 2021
        </p>
        <p className="text-blue-450 text-center">
          Inscripciones a programas de formación en modalidades presencial y a
          distancia
        </p>
      </article>
    </div>
  );
};

export default LastOffer;
