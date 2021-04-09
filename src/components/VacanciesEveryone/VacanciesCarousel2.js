import React from "react";
import Card2 from "./Card2.js";
import Vacancies2Items from "./Vacancies2Items.js";

const VacanciesCarousel2 = () => {
  return (
    <section className="">
      <div className="grid grid-flow-col overflow-x-auto scroll pb-4 ml-4 h-auto">
        {Vacancies2Items.map((item, index) => {
          return (
            <div className="pr-3" key={index}>
              <Card2
                image={item.image}
                cargoE={item.cargoE}
                educacion1E={item.educacion1E}
                educacion2E={item.educacion2E}
                educacion3E={item.educacion3E}
                descripcionE={item.descripcionE}
                fechaPublicacionE={item.fechaPublicacionE}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VacanciesCarousel2;
