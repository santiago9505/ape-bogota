import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/Main/Main.js";
import Disabilities from "./components/DisabilitiesVacancies/Disabilities.js";
import Vacancies from "./components/VacanciesEveryone/VacanciesE.js";
import Formacion from "./components/Formacion/Formacion.js";
import Orientation from "./components/Orientation/Orientation.js";
import Turns from "./components/Turns/Turns.js";
import Footer from "./components/Footer/Footer.js";
import { FirebaseDatabaseProvider } from "@react-firebase/database";

function App() {
  return (
    <div>
      <FirebaseDatabaseProvider>
        <Navbar />
        <Main />
        <Disabilities />
        <Vacancies />
        <Formacion />
        <Orientation />
        <Turns />
        <Footer />
      </FirebaseDatabaseProvider>
    </div>
  );
}

export default App;
