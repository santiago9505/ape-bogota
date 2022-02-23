import React from "react";
import Title from "../Titles/Title.js";
import Introduction from "./Introduction.js";
import Card3 from "./Card3.js";
import Video from "./Video.js";

const Orientation = () => {
  return (
    <section id="orientacion" className="">
      <Title
        seña="https://media.giphy.com/media/3sroI8NT5rAL1oorYX/giphy.gif"
        title="ORIENTACIÓN OCUPACIONAL"
        line="bg-principal-300"
        titleStyle="border-principal-200"
      />
      <Introduction />
      <div className="carousel__container3 flex flex-col items-center lg:grid lg:grid-cols-2 gap-8 lg:mx-10 lg:justify-items-center xl:mx-40">
        <Card3
          name="Taller de introducción al mundo laboral"
          description="En este taller podrás entender como realizar tu hoja de vida, cómo presentar una entrevista."
          link="https://apebogota.com"
        />
        <Card3
          name="Taller de emociones y comunicación asertiva"
          description="En este taller podrás entender como realizar tu hoja de vida, cómo presentar una entrevista."
          link="https://apebogota.com"
        />
        <Card3
          name="Taller de adaptabilidad laboral"
          description="En este taller podrás entender como realizar tu hoja de vida, cómo presentar una entrevista."
          link="https://apebogota.com"
        />
        <Card3
          name="Taller de emociones y comunicación asertiva"
          description="En este taller podrás entender como realizar tu hoja de vida, cómo presentar una entrevista."
          link="https://apebogota.com"
        />
      </div>
      <Video />
    </section>
  );
};

export default Orientation;
