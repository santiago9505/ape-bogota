import React from "react";

//assets
import Tecnicos from "../../assets/static/img-tecnicos.jpg";
import Tecnologos from "../../assets/static/img-tecnologos.jpg";
import Especializaciones from "../../assets/static/img-especializaciones.jpg";
import Complementaria from "../../assets/static/img-complementaria.jpg";

const Type = () => {
  return (
    <section className="flex flex-col bg-blue-550 text-white font-sena text-sm md:grid md:grid-cols-2">
      <article className="w-full h-auto">
        <img src={Tecnicos} alt="Técnicos" />
      </article>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Técnicos</h1>
        <h2 className="font-semibold">
          Duración:
          <p>
            1 año (Seis meses de etapa lectiva y seis meses de etapa práctica.
          </p>
        </h2>
        <h2 className="font-semibold">
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
        <h1 className="text-2xl font-semibold">Técnicos</h1>
        <h2 className="font-semibold">
          Duración:
          <p>
            1 año (Seis meses de etapa lectiva y seis meses de etapa práctica.
          </p>
        </h2>
        <h2 className="font-semibold">
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
        <img src={Especializaciones} alt="Especializaciones" />
      </article>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Técnicos</h1>
        <h2 className="font-semibold">
          Duración:
          <p>
            1 año (Seis meses de etapa lectiva y seis meses de etapa práctica.
          </p>
        </h2>
        <h2 className="font-semibold">
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
        <img src={Complementaria} alt="Complementaria" />
      </article>
      <div className="p-4 flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Técnicos</h1>
        <h2 className="font-semibold">
          Duración:
          <p>
            1 año (Seis meses de etapa lectiva y seis meses de etapa práctica.
          </p>
        </h2>
        <h2 className="font-semibold">
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
    </section>
  );
};

export default Type;
