import React from "react";
import Title from "../../components/Titles/Title.js";
import UserInterface from "./UserInterface";

const Turns = () => {
  return (
    <div id="contactanos">
      <Title
        seña="https://media.giphy.com/media/bAFQns8md2BSxMLkeJ/giphy.gif"
        title="ACTUALIZA LOS TURNOS VIRTUALES"
        line="bg-principal-300"
        titleStyle="border-principal-100"
      />
      <UserInterface />
    </div>
  );
};

export default Turns;
