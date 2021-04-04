import React from "react";
import Title from "../Titles/Title";
import Carousel from "../VacanciesEveryone/VacanciesCarousel.js";

const VacanciesE = () => {
  return (
    <div className="">
      <Title
        title="INTERMEDIACIÓN LABORAL PARA TODA LA POBLACIÓN"
        line="bg-principal-200 h-0.5 w-2/5 mt-1.5 mb-1"
        titleStyle="border-principal-100"
      />
      <Carousel />
    </div>
  );
};

export default VacanciesE;
