import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Title from "../../components/Titles/Title.js";
import { AuthContext } from "../../auth/Auth";
import UserInterface from "./UserInterface";
import config from "../../firebase";
import Navbar from "../../components/Navbar/Navbar";

const Turns = () => {
  return (
    <div id="contactanos">
      <Navbar />
      <Title
        seña="https://media.giphy.com/media/bAFQns8md2BSxMLkeJ/giphy.gif"
        title="ACTUALIZA LOS TURNOS VIRTUALES"
        line="bg-principal-300"
        titleStyle="border-principal-100"
      />
      <UserInterface />
      <Link className="link" onClick={() => config.auth().signOut()} to="/">
        <div className="profile__icon--logout">SALIR</div>
      </Link>
    </div>
  );
};

export default Turns;
