import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Disabilities from "./components/DisabilitiesVacancies/Disabilities.js";
import Vacancies from "./components/VacanciesEveryone/VacanciesE.js";
import Formacion from "./components/Formacion/Formacion.js";
import Orientation from "./components/Orientation/Orientation.js";
import Turns from "./components/Turns/Turns.js";
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Disabilities />
      <Vacancies />
      <Formacion />
      <Orientation />
      <Turns />
      <Footer />
    </div>
  );
}

export default App;
