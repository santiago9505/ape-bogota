import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import ArrowLeft from "../../assets/static/arrow-left.png";

const VacanciesCarousel = () => {
  // const [searchValue, setSearchValue] = React.useState("");
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/vacancies.json";
    const data = await fetch(url);
    const vacanciesinfo = await data.json();
    setVacancies(vacanciesinfo);
  };

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
      {/* <SearchVacancies
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      /> */}
      <div
        onChange={handleChange}
        id="carousel__container"
        className=" flex gap-5 ml-3 font-sans overflow-x-auto overflow-y-hidden  items-center carousel__container sm:ml-6"
      >
        {vacancies ? (
          Object.values(vacancies).map((item, index) => {
            return (
              <div
                className="py-2 px-4 carousel lg:py-6 3xl:py-28 carousel__item"
                key={index}
              >
                <Card
                  id={item.id}
                  solicitud={item.solicitud}
                  cargo={item.cargo.toUpperCase()}
                  educacion1={
                    item.educacion1 ? item.educacion1.toLowerCase() : null
                  }
                  educacion2={
                    item.educacion2 ? item.educacion2.toLowerCase() : null
                  }
                  educacion3={
                    item.educacion3 ? item.educacion3.toLowerCase() : null
                  }
                  descripcion={item.description}
                  fechaPublicacion={item.fechaPublicacion}
                />
              </div>
            );
          })
        ) : (
          <h1>En este momento no se encuentran vacantes disponibles</h1>
        )}
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
};

export default VacanciesCarousel;
