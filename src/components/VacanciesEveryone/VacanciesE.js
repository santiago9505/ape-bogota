import React from "react";
import Title from "../Titles/Title";
import Carousel from "../VacanciesEveryone/VacanciesCarousel.js";

const VacanciesE = () => {
  return (
    <div className="">
      <Title
        title="INTERMEDIACIÓN LABORAL PARA TODA LA POBLACIÓN"
        line="bg-principal-200"
        titleStyle="border-principal-100 w-10/12"
      />
      <Carousel />
    </div>
  );
};

export default VacanciesE;
