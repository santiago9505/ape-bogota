import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../auth/Auth";

const Card = ({
  id,
  solicitud,
  cargo,
  educacion1,
  educacion2,
  educacion3,
  descripcion,
  fechaPublicacion,
}) => {
  const [vacancies, setVacancies] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/vacancies.json";
    const data = await fetch(url);
    const vacanciesinfo = await data.json();
    setVacancies(vacanciesinfo);
  };

  const deleteVacancie = async (id) => {
    const url = `https://ape-bogota-react-default-rtdb.firebaseio.com/vacancies/${id}.json`;
    const data = await fetch(url, {
      method: "DELETE",
    });
    const vacanciesinfo = await data.json();
    setVacancies(vacanciesinfo);
    getData();
  };

  return (
    <button
      href=""
      className="flex flex-wrap rounded-2xl border-1 border-gray-300 content-between justify-center font-sena h-96 w-80 sm:w-96 sm:h-80 sm:border-2 lg:w-105 3xl:w-115 3xl:h-96 relative"
    >
      <div
        onClick={() => deleteVacancie(id)}
        className={currentUser ? "absolute top-0 -right-4" : "hidden"}
      >
        X
      </div>
      <div className="bg-gray-222 flex flex-wrap rounded-t-2xl justify-center font-medium font-sans content-center w-full h-10 3xl:text-xl">
        <p>SOLICITUD: {solicitud}</p>
      </div>
      <div className="flex flex-col justify-center content-center text-lg font-extrabold w-full h-10 gap-1 md:text-xl 3xl:text-3xl">
        <p>{cargo}</p>
        <div className="flex justify-center text-sm font-normal gap-1 md:gap-2 2xl:text-lg">
          <div
            className={
              educacion1 ? "bg-principal-200 rounded-2xl px-2" : "hidden"
            }
          >
            <h6 className="">{educacion1}</h6>
          </div>
          <div
            className={educacion2 ? "bg-blue-450 rounded-2xl px-3" : "hidden"}
          >
            <h6 className="text-white">{educacion2}</h6>
          </div>
          <div
            className={
              educacion3 ? "bg-principal-200 rounded-2xl px-3" : "hidden"
            }
          >
            <h6 className="">{educacion3}</h6>
          </div>
        </div>
      </div>

      <div className="px-2 3xl:text-2xl">
        <p>{descripcion}</p>
      </div>
      <div className="w-full">
        <a
          href={
            "https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/demanda/solicitud-sintesis/" +
            solicitud
          }
          className="py-1 px-10 bg-blue-450 rounded-2xl hover:bg-principal-100 rounded-sm font-sans text-sm font-medium text-white h-5 3xl:text-lg"
        >
          POSTULARME
        </a>
      </div>
      <div className="bg-gray-222 flex flex-wrap rounded-b-2xl font-medium font-sans justify-center content-center w-full h-10">
        <p>{fechaPublicacion}</p>
      </div>
    </button>
  );
};

export default Card;
