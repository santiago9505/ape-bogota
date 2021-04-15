import React from "react";
import LastOffer from "./LastOffer.js";
import Title from "../Titles/Title";
import Type from "./Type.js";

const Formacion = () => {
  return (
    <div id="formacion">
      <Title
        title="FORMACIÓN"
        line="bg-principal-100"
        titleStyle="border-principal-300 w-60 tracking-wider"
      />
      <LastOffer />
      <Type />
    </div>
  );
};

export default Formacion;
