import React from "react";
import Title from "../Titles/Title.js";
import BoxTurn from "./BoxTurns.js";

const Turns = () => {
  return (
    <div id="contactanos">
      <Title
        seña="https://media.giphy.com/media/bAFQns8md2BSxMLkeJ/giphy.gif"
        title="TURNOS VIRTUALES"
        line="bg-principal-300"
        titleStyle="border-principal-100"
      />
      <BoxTurn />
    </div>
  );
};

export default Turns;
