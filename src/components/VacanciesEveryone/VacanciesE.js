import React from "react";
import Title from "../Titles/Title.js";
import VacanciesCarousel2 from "./VacanciesCarousel2.js";

const VacanciesE = () => {
  return (
    <div id="empleo">
      <Title
        title="INTERMEDIACIÓN LABORAL PARA TODA LA POBLACIÓN"
        line="bg-principal-200"
        titleStyle="border-principal-100 w-11/12"
      />
      <VacanciesCarousel2 />
    </div>
  );
};

export default VacanciesE;
