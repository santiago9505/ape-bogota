import React from "react";

//assets
import Image1 from "../../assets/static/img-main-1.jpg";

const Main = () => {
  return (
    <div className="">
      <div className="inset-0 w-screen bg-pink-500 text-white flex items-center justify-center text-5xl">
        <img src={Image1} alt="" />
      </div>
    </div>
  );
};

export default Main;
