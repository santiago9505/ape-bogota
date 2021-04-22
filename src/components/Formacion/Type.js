import React from "react";

//assets
import Tecnicos from "../../assets/static/img-tecnicos.jpg";
import Tecnologos from "../../assets/static/img-tecnologos.jpg";
import Especializaciones from "../../assets/static/img-especializaciones.jpg";
import Complementaria from "../../assets/static/img-complementaria.jpg";

const Type = () => {
  return (
    <section className="flex flex-col bg-blue-550 leading-snug text-white font-sena font-normal text-lg">
      <div className="lg:grid lg:grid-cols-2">
        <article className="w-full h-auto">
          <img src={Tecnicos} alt="Técnicos" />
        </article>
        <div className="px-4 flex flex-col gap-2 tracking-tight py-8">
          <h1 className="text-4xl">Técnicos</h1>
          <h2 className="">
            Duración:
            <p>
              Un año (Seis meses de etapa lectiva y seis meses de etapa
              práctica.
            </p>
          </h2>
          <h2 className="">
            Inscripciones:
            <p>Cada tres meses a través de http://www.senasofiaplus.edu.co/</p>
          </h2>
          <p>
            Programas técnicos, con duración de un año; seis meses de etapa
            lectiva, y seís meses de etapa práctica, convocatorias para
            inscripciones cada tres meses a través de Sena Sofía Plus, nivel
            educativo requerido, noveno grado aprobado
          </p>
          <button className="border-2 w-36 h-10 mx-auto rounded-lg p-2 my-2 hover:bg-white hover:text-black">
            Conoce más
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <article className="w-full h-auto">
          <img src={Tecnologos} alt="Tecnólogos" />
        </article>
        <div className="px-4 flex flex-col gap-2 py-8 lg:w-full">
          <h1 className="text-4xl">Tecnólogos</h1>
          <h2 className="">
            Duración:
            <p>
              Dos años (Un año y seis meses de etapa lectiva y seis meses de
              etapa práctica.)
            </p>
          </h2>
          <h2 className="">
            Inscripciones:
            <p>Cada tres meses a través de http://www.senasofiaplus.edu.co/</p>
          </h2>
          <p>
            Programas Tecnológicos, con duración de un año; seis meses de etapa
            lectiva, y seís meses de etapa práctica, convocatorias para
            inscripciones cada tres meses a través de Sena Sofía Plus, nivel
            educativo requerido, bachiller académico con prueba de estado ICFES.
          </p>
          <button className="border-2 w-36 h-10  p-2 mx-auto rounded-lg my-2 hover:bg-white hover:text-black">
            Conoce más
          </button>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2">
        <article className="w-full h-auto">
          <img src={Especializaciones} alt="Especializaciones" />
        </article>
        <div className="px-4 flex flex-col gap-2 py-8">
          <h1 className="text-4xl">Especializaciones Tecnológicas</h1>
          <h2 className="">
            Duración:
            <p>Dos años</p>
          </h2>
          <h2 className="">
            Inscripciones:
            <p>Cada tres meses a través de http://www.senasofiaplus.edu.co/</p>
          </h2>
          <p>
            Especializaciones Tecnológicas, con duración de dos años;
            convocatoria para inscripciones cada tres meses a través de Sena
            Sofía Plus
          </p>
          <button className="border-2 w-36 h-10  p-2 mx-auto rounded-lg my-2 hover:bg-white hover:text-black">
            Conoce más
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse">
        <article className="w-full h-auto">
          <img src={Complementaria} alt="Complementaria" />
        </article>
        <div className="px-4 flex flex-col gap-2 py-8">
          <h1 className="text-4xl">Formación Complementaria</h1>
          <h2 className="">
            Duración:
            <p>Entre 40 y 200 horas</p>
          </h2>
          <h2 className="">
            Inscripciones:
            <p>
              De acuerdo a disponibilidad del SENA a través de
              http://oferta.senasofiaplus.edu.co/
            </p>
          </h2>
          <p>
            Formación complementaria, Inscripciones a través de Sena Sofía Plus
            en diferentes áreas de conocimiento, programas de inglés con
            vigencia durante todo el año.
          </p>
          <button className="border-2 w-36 h-10  p-2 mx-auto rounded-lg my-2 hover:bg-white hover:text-black">
            Conoce más
          </button>
        </div>
      </div>
    </section>
  );
};

export default Type;
