import React from "react";
import Title from "../Titles/Title.js";
import BoxTurn from "./BoxTurns.js";

const Turns = () => {
  return (
    <div id="contactanos">
      <Title
        title="TURNOS VIRTUALES"
        line="bg-principal-300 h-0.5 w-2/5 mt-1.5 mb-1"
        titleStyle="border-principal-100"
      />
      <BoxTurn />
    </div>
  );
};

export default Turns;
