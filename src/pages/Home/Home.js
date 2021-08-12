import Navbar from "../../components/Navbar/Navbar";
import Main from "../../components/Main/Main.js";
import Disabilities from "../../components/DisabilitiesVacancies/Disabilities.js";
import VacanciesE from "../../components/VacanciesEveryone/VacanciesE.js";
import Formacion from "../../components/Formacion/Formacion.js";
import Orientation from "../../components/Orientation/Orientation.js";
import Turns from "../../components/Turns/Turns.js";
import Footer from "../../components/Footer/Footer.js";

import React from "react";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Main />
      <Disabilities />
      {/* <VacanciesE /> */}
      <Formacion />
      <Orientation />
      <Turns />
      <Footer />
    </div>
  );
};

export default Home;
