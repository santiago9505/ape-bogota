import React, { useState, useEffect } from "react";
import firebase from "../../firebase.js";

const BoxTurns = () => {
  const [turns, setTurns] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url =
      "https://ape-bogota-react-default-rtdb.firebaseio.com/turns.json";
    const data = await fetch(url);
    const turnsinfo = await data.json();
    setTurns(turnsinfo);
  };

  const deleteLink = async (id) => {
    const url = `https://ape-bogota-react-default-rtdb.firebaseio.com/turns/${id}.json`;
    const data = await fetch(url, {
      method: "DELETE",
    });
    getData();
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
                if (turns === null) {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td className="text-principal-100">
                        <p>No hay turnos disponibles en este momento</p>
                      </td>
                    </tr>
                  );
                } else {
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td className="text-principal-100">
                        <a onClick={() => deleteLink(item.id)} href={item.link}>
                          {item.link}
                        </a>
                      </td>
                    </tr>
                  );
                }
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
              En caso de no contar con ning??n turno disponible, puede registrar
              sus datos haciendo{" "}
              <a
                className="underline"
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=gcPCyy4vk02R0VBskxas5_uaYzbSud1LmU6-S958qnFUMVZEQ0paT0JLVzFGOE5JNEJYVzNEWDQyUS4u"
              >
                click aqu??
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};
export default BoxTurns;
