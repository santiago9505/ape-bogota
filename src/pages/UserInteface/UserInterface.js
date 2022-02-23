import React, { useState, useEffect } from "react";
import VacanciesCarousel from "../../components/DisabilitiesVacancies/VacanciesCarousel.js";
import firebase from "../../firebase.js";
import Card from "../../components/DisabilitiesVacancies/Card.js";
import ArrowLeft from "../../assets/static/arrow-left.png";

const BoxTurns = () => {
  const [turns, setTurns] = useState([{}]);
  const [vacancies, setVacancies] = useState([{}]);
  const [date, setDate] = useState([{}]);

  useEffect(() => {
    getData();
    getVacancies();
    getDate();
  }, []);

  const getData = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/turns.json";
    const data = await fetch(url);
    const turnsinfo = await data.json();
    setTurns(turnsinfo);
  };

  const handleScrollRight = () => {
    handleChange(500);
  };
  const handleScrollLeft = () => {
    handleChange(-500);
  };
  const handleChange = (number) => {
    document.getElementById("carousel__container").scrollLeft += number;
  };

  const getVacancies = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/vacancies.json";
    const data = await fetch(url);
    const vacanciesinfo = await data.json();
    setVacancies(vacanciesinfo);
  };

  const getDate = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/date.json";
    const data = await fetch(url);
    const dateinfo = await data.json();
    setDate(dateinfo);
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

  const updateDate = (event) => {
    event.preventDefault();
    const dateRef = firebase.database().ref("date");
    const date = event.target.newdate.value;
    const modalidad = event.target.modalidad.value;
    const newDate = {
      dia: date,
      modalidad: modalidad,
    };
    dateRef.set(newDate);
    getDate();
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
      {/* Carousel */}
      <section className="carousel">
        {/* <SearchVacancies
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      /> */}
        <div
          onChange={handleChange}
          id="carousel__container"
          className=" flex gap-5 ml-3 font-sans overflow-x-auto overflow-y-hidden  items-center carousel__container sm:ml-6"
        >
          {vacancies ? (
            Object.values(vacancies).map((item, index) => {
              return (
                <div
                  className="py-2 px-4 carousel lg:py-6 3xl:py-28 carousel__item"
                  key={index}
                >
                  <Card
                    id={item.id}
                    solicitud={
                      item.solicitud ? item.solicitud.toUpperCase() : null
                    }
                    cargo={item.cargo}
                    educacion1={
                      item.educacion1 ? item.educacion1.toLowerCase() : null
                    }
                    educacion2={
                      item.educacion2 ? item.educacion2.toLowerCase() : null
                    }
                    educacion3={
                      item.educacion3 ? item.educacion3.toLowerCase() : null
                    }
                    descripcion={item.description}
                    fechaPublicacion={item.fechaPublicacion}
                  />
                </div>
              );
            })
          ) : (
            <h1>En este momento no se encuentran vacantes disponibles</h1>
          )}
        </div>
        <div id="container" className="arrows relative">
          <div className="arrow__right">
            <button
              id="slide"
              onClick={handleScrollRight}
              className="bottom-48  h-32"
            >
              <img
                className="w-6 origin-center transform rotate-180"
                src={ArrowLeft}
                alt="flecha_derecha"
              />
            </button>
          </div>
          <div className="arrow__left">
            <button id="slide" onClick={handleScrollLeft} className=" h-32">
              <img className="w-6" src={ArrowLeft} alt="flecha_izquierda" />
            </button>
          </div>
        </div>
      </section>

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
            maxLength={200}
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Educacion 1</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="educacion1"
            type="text"
            maxLength={10}
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Educacion 2</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="educacion2"
            type="text"
            maxLength={10}
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Educacion 3</span>
          <input
            className="bg-gray-300 flex-col rounded-full px-2"
            name="educacion3"
            type="text"
            maxLength={10}
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Fecha pubicacion</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="fechaPublicacion"
            type="date"
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
      <div className="bg-gray-200 rounded-sm flex flex-col gap-2 font-sans tracking-tight mx-auto text-lg py-4 mb-4 w-11/12 max-w-md lg:grid lg:grid-cols-2 lg:max-w-none lg:text-xl 2xl:text-2xl 2xl:justify-center">
        <article className="text-center font-bold text-xl text-blue-450 self-center p-2 py-auto lg:text-2xl 2xl:text-3xl">
          <h1>ÚLTIMAS CONVOCATORIAS</h1>
        </article>
        <article className="flex justify-between px-3 gap-5 lg:justify-evenly">
          <p className="bg-green-450 text-center rounded-sm shadow-2xl p-2 text-white pt-3 self-center lg:w-48 lg:font-semibold lg:pt-2 2xl:w-72">
            DEL {date.dia}
          </p>
          <p className="text-blue-450 text-center w-96 lg:w-72 2xl:w-88">
            Inscripciones a programas de formación en modalidad {date.modalidad}
          </p>
        </article>
      </div>
      <form
        onSubmit={updateDate}
        className="grid justify-items-center content-center grid-cols-2 gap-8 border-4 rounded-md m-8 p-8"
        action=""
      >
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Fecha</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="newdate"
            type="text"
            required
          />
        </label>
        <label className="flex flex-col gap-2" htmlFor="">
          <span>Modalidad</span>
          <input
            className="bg-gray-300 rounded-full px-2"
            name="modalidad"
            type="text"
            required
          />
        </label>
        <label className="self-center col-span-2" htmlFor="">
          <input
            className="bg-blue-450 hover:bg-principal-100 text-white w-60 py-0.5 rounded-full cursor-pointer "
            type="submit"
          />
        </label>
      </form>
    </section>
  );
};
export default BoxTurns;
