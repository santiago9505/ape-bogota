import React from "react";
import Card from "./Card.js";
import ArrowLeft from "../../assets/static/arrow-left.png";
import VacanciesItems from "./VacanciesItems.js";

const VacanciesCarousel = () => {
  const handleScrollRight = () => {
    handleChange(280);
  };
  const handleScrollLeft = () => {
    handleChange(-280);
  };
  const handleChange = (number) => {
    document.getElementById("carousel__container").scrollLeft += number;
  };

  return (
    <section className="carousel">
      <div
        onChange={handleChange}
        id="carousel__container"
        className="flex gap-5 ml-3 font-sans overflow-x-auto overflow-y-hide items-center carousel__container"
      >
        {VacanciesItems.map((item, index) => {
          return (
            <div className="py-2 px-4 carousel lg:py-8" key={index}>
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
      <div id="container" className="arrows relative">
        <button
          id="slide"
          onClick={handleScrollRight}
          className="bottom-48 arrow__right"
        >
          <img
            className="w-6 origin-center transform rotate-180"
            src={ArrowLeft}
            alt="flecha_derecha"
          />
        </button>
        <button id="slide" onClick={handleScrollLeft} className="arrow__left">
          <img className="w-6" src={ArrowLeft} alt="flecha_izquierda" />
        </button>
      </div>
    </section>
  );
};

export default VacanciesCarousel;
