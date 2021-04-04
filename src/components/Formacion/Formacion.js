import React from "react";
import LastOffer from "./LastOffer.js";
import Title from "../Titles/Title";
import Type from "./Type.js";

const Formacion = () => {
  return (
    <div id="formacion">
      <Title
        title="FORMACIÓN"
        line="bg-principal-100 h-0.5 w-2/5 mt-1.5 mb-1"
        titleStyle="border-principal-300"
      />
      <LastOffer />
      <Type />
    </div>
  );
};

export default Formacion;
