import React from "react";

//assets
import Tecnicos from "../../assets/static/img-tecnicos.jpg";
import Tecnologos from "../../assets/static/img-tecnologos.jpg";
import Especializaciones from "../../assets/static/img-especializaciones.jpg";
import Complementaria from "../../assets/static/img-complementaria.jpg";

const Type = () => {
  return (
    <section className="flex flex-col bg-blue-550 leading-snug text-white font-sena font-normal text-lg md:grid md:grid-cols-2">
      <article className="w-full h-auto">
        <img src={Tecnicos} alt="Técnicos" />
      </article>
      <div className="p-4 flex flex-col gap-2 tracking-tight">
        <h1 className="text-4xl">Técnicos</h1>
        <h2 className="">
          Duración:
          <p>
            1 año (Seis meses de etapa lectiva y seis meses de etapa práctica.
          </p>
        </h2>
        <h2 className="">
          Inscripciones:
          <p>Cada 3 meses a través de http://www.senasofiaplus.edu.co/</p>
        </h2>
        <p>
          Programas técnicos, con duración de un año; seis meses de etapa
          lectiva, y seís meses de etapa práctica, convocatorias para
          inscripciones cada 3 meses a través de Sena Sofía Plus, nivel
          educativo requerido, noveno grado aprobado
        </p>
        <button className="border-2 w-36 mx-auto rounded-lg my-2">
          Conoce más
        </button>
      </div>
      <article className="w-full h-auto">
        <img src={Tecnologos} alt="Tecnólogos" />
      </article>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-4xl">Tecnólogos</h1>
        <h2 className="">
          Duración:
          <p>
            2 años (Un año y seis meses de etapa lectiva y seis meses de etapa
            práctica.)
          </p>
        </h2>
        <h2 className="">
          Inscripciones:
          <p>Cada 3 meses a través de http://www.senasofiaplus.edu.co/</p>
        </h2>
        <p>
          Programas Tecnológicos, con duración de un año; seis meses de etapa
          lectiva, y seís meses de etapa práctica, convocatorias para
          inscripciones cada 3 meses a través de Sena Sofía Plus, nivel
          educativo requerido, bachiller académico con prueba de estado ICFES.
        </p>
        <button className="border-2 w-36 mx-auto rounded-lg my-2">
          Conoce más
        </button>
      </div>
      <article className="w-full h-auto">
        <img src={Especializaciones} alt="Especializaciones" />
      </article>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-4xl">Especializaciones Tecnológicas</h1>
        <h2 className="">
          Duración:
          <p>2 años</p>
        </h2>
        <h2 className="">
          Inscripciones:
          <p>Cada 3 meses a través de http://www.senasofiaplus.edu.co/</p>
        </h2>
        <p>
          Especializaciones Tecnológicas, con duración de dos años; convocatoria
          para inscripciones cada 3 meses a través de Sena Sofía Plus
        </p>
        <button className="border-2 w-36 mx-auto rounded-lg my-2">
          Conoce más
        </button>
      </div>
      <article className="w-full h-auto">
        <img src={Complementaria} alt="Complementaria" />
      </article>
      <div className="p-4 flex flex-col gap-2">
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
          Formación complementaria, Inscripciones a través de Sena Sofía Plus en
          diferentes áreas de conocimiento, programas de inglés con vigencia
          durante todo el año.
        </p>
        <button className="border-2 w-36 mx-auto rounded-lg my-2">
          Conoce más
        </button>
      </div>
    </section>
  );
};

export default Type;
