import React from "react";
import Title from "../Titles/Title.js";
import Introduction from "./Introduction.js";
import Card3 from "./Card3.js";
import Video from "./Video.js";

const Orientation = () => {
  return (
    <section id="orientacion" className="">
      <Title
        title="ORIENTACIÓN OCUPACIONAL"
        line="bg-principal-300 h-0.5 w-2/5 mt-1.5 mb-1"
        titleStyle="border-principal-200"
      />
      <Introduction />
      <Card3 />
      <Card3 />
      <Card3 />
      <Card3 />
      <Video />
    </section>
  );
};

export default Orientation;
