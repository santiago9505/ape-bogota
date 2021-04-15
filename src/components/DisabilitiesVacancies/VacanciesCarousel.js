import React from "react";
import Card from "./Card.js";
import VacanciesItems from "./VacanciesItems.js";

const VacanciesCarousel = () => {
  return (
    <section className="carousel">
      <div className="flex gap-5 ml-3 font-sans overflow-x-auto overflow-y-hide items-center carousel__container">
        {VacanciesItems.map((item, index) => {
          return (
            <div className="py-16 px-4 carousel" key={index}>
              <Card
                solicitud={item.solicitud}
                cargo={item.cargo}
                educacion1={item.educacion1}
                educacion2={item.educacion2}
                educacion3={item.educacion3}
                descripcion={item.descripcion}
                fechaPublicacion={item.fechaPublicacion}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VacanciesCarousel;
