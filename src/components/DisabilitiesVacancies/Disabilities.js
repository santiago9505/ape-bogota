import React from "react";
import Title from "../Titles/Title.js";
import VacanciesCarousel from "./VacanciesCarousel.js";

const Disabilities = () => {
  return (
    <div id="empleo" className="">
      <Title
        seña="https://media.giphy.com/media/PbmAiZCa2sCzaLZttd/giphy.gif"
        title="INTERMEDIACIÓN LABORAL PERSONAS CON DISCAPACIDAD"
        line="bg-principal-300"
        titleStyle="border-principal-200 w-11/12"
      />
      <VacanciesCarousel />
    </div>
  );
};

export default Disabilities;
