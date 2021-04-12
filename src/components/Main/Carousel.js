import React from "react";

import Image1 from "../../assets/static/img-main-1.jpg";
import Image2 from "../../assets/static/img-main-2.jpg";
import Image3 from "../../assets/static/img-main-3.jpeg";
const Carousel = () => {
  return (
    <article className=" grid grid-flow-col bg-yellow-500 sm:h-96 lg:h-110 overflow-x-auto overflow-y-hidden carousel">
      <ul className="flex">
        <li className="w-screen" id="img1" htmlFor="">
          <img
            className="lg:object-cover lg:h-3/5 lg:w-full"
            src={Image1}
            alt="imagen1"
          />
        </li>
        <li className="w-screen" id="img2" htmlFor="">
          <img
            className="lg:object-cover lg:h-3/5 lg:w-full"
            src={Image2}
            alt="imagen2"
          />
        </li>
        <li className="w-screen" id="img3" htmlFor="">
          <img
            className="lg:object-cover lg:h-3/5 lg:w-full"
            src={Image3}
            alt="imagen3"
          />
        </li>
      </ul>
    </article>
  );
};

export default Carousel;
