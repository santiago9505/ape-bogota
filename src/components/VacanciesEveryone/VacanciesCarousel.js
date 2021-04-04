import React from "react";
import Card2 from "./Card2.js";
import Vacancies2Items from "./Vacancies2Items";

const VacanciesCarousel = () => {
  return (
    <section className="">
      <div className="grid grid-flow-col overflow-x-auto scroll gap-4 ml-4 h-auto">
        {Vacancies2Items.map((item, index) => {
          return (
            <Card2
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
