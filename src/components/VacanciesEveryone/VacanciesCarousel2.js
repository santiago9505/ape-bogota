import React from "react";
import Card2 from "./Card2.js";
import Vacancies2Items from "./Vacancies2Items.js";
import ArrowLeft from "../../assets/static/arrow-left.png";

const VacanciesCarousel2 = () => {
  const handleScrollRight = () => {
    handleChange(500);
  };
  const handleScrollLeft = () => {
    handleChange(-500);
  };
  const handleChange = (number) => {
    document.getElementById("carousel__container2").scrollLeft += number;
  };
  return (
    <section className="carousel">
      <div
        onChange={handleChange}
        id="carousel__container2"
        className="flex gap-0 ml-3 font-sans overflow-x-auto overflow-y-hide items-center carousel__container md:ml-8"
      >
        {Vacancies2Items.map((item, index) => {
          return (
            <div
              className="py-6 px-4 carousel lg:py-8 carousel__item"
              key={index}
            >
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
      <div id="container" className="arrows relative">
        <button
          id="slide"
          onClick={handleScrollRight}
          className="bottom-48 arrow__right h-32"
        >
          <img
            className="w-6 origin-center transform rotate-180"
            src={ArrowLeft}
            alt="flecha_derecha"
          />
        </button>
        <button
          id="slide"
          onClick={handleScrollLeft}
          className="arrow__left h-32"
        >
          <img className="w-6" src={ArrowLeft} alt="flecha_izquierda" />
        </button>
      </div>
    </section>
  );
};

export default VacanciesCarousel2;
