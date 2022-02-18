import React, { useState, useEffect } from "react";
import VacanciesCarousel from "../../components/DisabilitiesVacancies/VacanciesCarousel.js";
import firebase from "../../firebase.js";

const BoxTurns = () => {
  const [turns, setTurns] = useState([{}]);
  const [vacancies, setVacancies] = useState([{}]);

  useEffect(() => {
    getData();
    getVacancies();
  }, []);

  const getData = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/turns.json";
    const data = await fetch(url);
    const turnsinfo = await data.json();
    setTurns(turnsinfo);
  };

  const getVacancies = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/vacancies.json";
    const data = await fetch(url);
    const vacanciesinfo = await data.json();
    setVacancies(vacanciesinfo);
  };

  const addingNewTurn = async (event) => {
    event.preventDefault();
    const linkRef = firebase.database().ref("turns").push();
    const key = linkRef.key;
    const link = event.target.link.value;
    const newLink = {
      id: key,
      link: link,
    };
    await linkRef.set(newLink);
    getData();
  };

  const addingNewVacancies = async (event) => {
    event.preventDefault();
    const vacancieRef = firebase.database().ref("vacancies").push();
    const key = vacancieRef.key;
    const cargo = event.target.cargo.value;
    const description = event.target.description.value;
    const educacion1 = event.target.educacion1.value;
    const educacion2 = event.target.educacion2.value;
    const educacion3 = event.target.educacion3.value;
    const fechaPublicacion = event.target.fechaPublicacion.value;
    const solicitud = event.target.solicitud.value;
    const newVacancie = {
      id: key,
      cargo: cargo,
      description: description,
      educacion1: educacion1,
      educacion2: educacion2,
      educacion3: educacion3,
      fechaPublicacion: fechaPublicacion,
      solicitud: solicitud,
    };
    await vacancieRef.set(newVacancie);
    getVacancies();
  };

  return (
    <section>
      <div className="flex flex-col px-8 mx-8 rounded-xl mb-4 bg-gray-100 border-2 border-black py-4 font-sena text-center text-lg sm:py-5 sm:mx-20 lg:mx-48 lg:grid lg:grid-cols-2">
        <div className="flex justify-center lg:items-start">
          <table className="w-88 sm:w-90 lg:w-110">
            <tr className="">
              <th>#TURNO</th>
              <th>LINK</th>
            </tr>
            {turns ? (
              Object.values(turns).map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td className="text-principal-100">
                      <a href={item.link}>{item.link}</a>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h1>No hay turnos disponibles en el momento</h1>
            )}
          </table>
        </div>
        <div className="h-full">
          <h3 className="font-extrabold sm:mb-3">SERVICIO AL CLIENTE</h3>
          <div className="flex flex-col gap-2 text-white sm:gap-4 sm:w-80 sm:mx-auto">
            <p className="bg-blue-475 rounded-lg p-2">
              Estamos para servirle, y atender su necesidad de la mejor manera.
            </p>
            <p className="bg-blue-475 rounded-lg p-2 ">
              Para ingresar debe registrarse con una cuenta de google.
            </p>
            <p className="bg-blue-475 rounded-lg p-2 ">
              Recuerde ser respetuoso con el orientador(a) que le corresponde.
            </p>
            <p className="bg-blue-475 rounded-lg p-2 ">
              En caso de no contar con ningún turno disponible, puede registrar
              sus datos haciendo click aquí.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center my-10 font-sena text-xl">
        <div className="flex justify-center my-5">
          <a
            className="bg-blue-450 text-center justify-self-center hover:bg-principal-100 text-white w-60 py-0.5 rounded-full"
            target="_blank"
            rel="noopener noreferrer"
            href="https://meet.google.com/new"
          >
            Crea tu reunión
          </a>
        </div>

        <div className="flex text-3xl justify-center my-2">
          <h1>Ingresa el link aquí</h1>
        </div>
        <form
          onSubmit={addingNewTurn}
          className="flex justify-center items-center gap-8"
          action=""
        >
          <label className="flex gap-8" htmlFor="">
            <span>Link</span>
            <input
              className="bg-gray-300 rounded-full px-2"
              name="link"
              type="text"
              required
            />
          </label>
          <label htmlFor="">
            <input
              className="bg-blue-450 hover:bg-principal-100 text-white w-60 py-0.5 rounded-full"
              type="submit"
            />
          </label>
        </form>
      </div>
      <VacanciesCarousel />
      <div className="flex text-3xl justify-center my-2">
        <h1>Agrega nuevas vacantes</h1>
      </div>
      <form
        onSubmit={addingNewVacancies}
        className="grid justify-items-center content-center grid-cols-2 gap-8 border-4 rounded-md m-8 p-8"
        action=""
      >
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Cargo</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="cargo"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Descripcion</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="description"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Educacion 1</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="educacion1"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Educacion 2</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="educacion2"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Educacion 3</span>
          <input
            className="bg-gray-300 flex-col rounded-full px-2"
            name="educacion3"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Fecha pubicacion</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="fechaPublicacion"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Número de solicitud</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="solicitud"
            type="text"
            required
          />
        </label>
        <label className="self-center " htmlFor="">
          <input
            className="bg-blue-450 hover:bg-principal-100 text-white w-60 py-0.5 rounded-full cursor-pointer"
            type="submit"
          />
        </label>
      </form>
    </section>
  );
};
export default BoxTurns;
