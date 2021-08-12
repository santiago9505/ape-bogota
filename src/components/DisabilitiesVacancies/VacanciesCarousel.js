import React from "react";
import Card from "./Card.js";
import ArrowLeft from "../../assets/static/arrow-left.png";
import VacanciesItems from "./VacanciesItems.js";
import firebase from "../../firebase.js";

class VacanciesCarousel extends React.Component {
  render() {
    const handleScrollRight = () => {
      handleChange(500);
    };
    const handleScrollLeft = () => {
      handleChange(-500);
    };
    const handleChange = (number) => {
      document.getElementById("carousel__container").scrollLeft += number;
    };

    return (
      <section className="carousel">
        <div
          onChange={handleChange}
          id="carousel__container"
          className=" flex gap-5 ml-3 font-sans overflow-x-auto overflow-y-hidden  items-center carousel__container sm:ml-6"
        >
          {VacanciesItems.map((item, index) => {
            return (
              <div
                className="py-2 px-4 carousel lg:py-6 3xl:py-28 carousel__item"
                key={index}
              >
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
          <div className="arrow__right">
            <button
              id="slide"
              onClick={handleScrollRight}
              className="bottom-48  h-32"
            >
              <img
                className="w-6 origin-center transform rotate-180"
                src={ArrowLeft}
                alt="flecha_derecha"
              />
            </button>
          </div>
          <div className="arrow__left">
            <button id="slide" onClick={handleScrollLeft} className=" h-32">
              <img className="w-6" src={ArrowLeft} alt="flecha_izquierda" />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default VacanciesCarousel;
