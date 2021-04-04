import React from "react";
import Title from "../Titles/Title.js";
import VacanciesCarousel from "./VacanciesCarousel.js";

const Disabilities = () => {
  return (
    <div id="empleo">
      <Title
        title="INTERMEDIACION LABORAL PERSONAS CON DISCAPACIDAD"
        line="bg-principal-300 h-0.5 w-2/5 mt-1.5 mb-1"
        titleStyle="border-principal-200"
      />
      <VacanciesCarousel />
    </div>
  );
};

export default Disabilities;
