import React from "react";
import { Link } from "react-router-dom";

import Image1 from "../../assets/static/img-main-1.jpg";
import Image2 from "../../assets/static/img-main-2.jpg";
import Image3 from "../../assets/static/img-main-3.jpeg";
const Carousel = () => {
  const handleChange = () => {
    document.getElementById("carousel__container3").scrollLeft += 1380;
  };
  return (
    <section
      className="flex overflow-x-auto relative"
      id="carousel__container3"
      onLoad={handleChange}
    >
      <div className="flex">
        <article className="w-screen">
          <img
            className="w-screen object-cover xl:h-111 xl:w-full"
            src={Image1}
            alt="imagen1"
          />
        </article>
        <article className="w-screen">
          <img
            className="w-screen object-cover xl:h-111 xl:w-full"
            src={Image2}
            alt="imagen2"
          />
        </article>
        <article className="w-screen">
          <img
            className="w-screen object-cover xl:h-111 xl:w-full"
            src={Image3}
            alt="imagen3"
          />
        </article>
      </div>
      <article className="absolute text-9xl left-28 flex bottom-2 text-principal-300">
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
