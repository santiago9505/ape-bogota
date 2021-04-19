import React from "react";

import Image1 from "../../assets/static/img-main-1.jpg";
import Image2 from "../../assets/static/img-main-2.jpg";
import Image3 from "../../assets/static/img-main-3.jpeg";
const Carousel = () => {
  return (
    <section className="bg-red-500 flex overflow-x-scroll overflow-y-hidden lg:h-110">
      <article>
        <div className="">
          <img
            className="w-screen lg:h-105 bg-green-500"
            src={Image1}
            alt="imagen1"
          />
        </div>
      </article>
      <article>
        <div>
          <img
            className="w-screen lg:h-105 bg-green-500"
            src={Image2}
            alt="imagen2"
          />
        </div>
      </article>
      <article>
        <div>
          <img
            className="w-screen lg:h-105 bg-green-500"
            src={Image3}
            alt="imagen3"
          />
        </div>
      </article>
    </section>
  );
};

export default Carousel;
