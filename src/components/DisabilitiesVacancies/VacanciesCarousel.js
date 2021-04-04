import React from "react";
import Card from "./Card.js";
import VacanciesItems from "./VacanciesItems.js";

const VacanciesCarousel = () => {
  return (
    <section className="">
      <div className="grid grid-flow-col overflow-x-auto scroll gap-4 ml-4 h-auto">
        {VacanciesItems.map((item, index) => {
          return (
            <Card
              solicitud={item.solicitud}
              cargo={item.cargo}
              educacion1={item.educacion1}
              educacion2={item.educacion2}
              educacion3={item.educacion3}
              descripcion={item.descripcion}
              fechaPublicacion={item.fechaPublicacion}
            />
          );
        })}
      </div>
    </section>
  );
};

export default VacanciesCarousel;
