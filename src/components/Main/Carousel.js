import React from "react";
import { Link } from "react-router-dom";

import Image1 from "../../assets/static/img-main-1.jpg";
import Image2 from "../../assets/static/img-main-2.jpg";
import Image3 from "../../assets/static/img-main-3.jpeg";
const Carousel = () => {
  const handleChange = () => {
    let container = document.getElementById("carousel__container3");
    container.scrollLeft += 1380;
    handleOther();
  };
  const handleOther = () => {
    let container = document.getElementById("carousel__container3");
    container.scrollLeft += 2760;
  };

  return (
    <section
      className="flex overflow-x-auto overflow-y-hidden bg-red-500 h-2/5 sm:h-110 md:h-111 2xl:h-115 3xl:h-125"
      id="carousel__container3"
      onLoad={handleChange}
    >
      <div className="flex">
        <article className="w-screen">
          <img
            className="w-screen object-cover md:h-105 xl:h-111 xl:w-full 2xl:h-115 3xl:h-125"
            src={Image1}
            alt="imagen1"
          />
        </article>
        <article className="w-screen">
          <img
            className="w-screen object-cover md:h-105 xl:h-111 xl:w-full 2xl:h-115 3xl:h-125"
            src={Image2}
            alt="imagen2"
          />
        </article>
        <article className="w-screen">
          <img
            className="w-screen object-cover md:h-105 xl:h-111 xl:w-full 2xl:h-115 3xl:h-125"
            src={Image3}
            alt="imagen3"
          />
        </article>
      </div>
      <article className="text-9xl left-28 flex bottom-2 text-principal-300 main_options">
        <div>
          <Link onClick={handleChange}>.</Link>
        </div>
        <div>
          <Link>.</Link>
        </div>
        <div>
          <Link>.</Link>
        </div>
      </article>
    </section>
  );
};

export default Carousel;
