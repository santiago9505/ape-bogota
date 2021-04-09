import Image1 from "../../assets/static/img-main-1.jpg";
import React from "react";

const Carousel = () => {
  return (
    <div className="">
      <div className="inset-0 w-full bg-pink-500 text-white flex items-center justify-center text-5xl">
        <img src={Image1} alt="" />
      </div>
    </div>
  );
};

export default Carousel;
