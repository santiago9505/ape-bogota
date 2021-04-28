import React from "react";
import DataTurns from "./DataTurns.js";

class BoxTurns extends React.Component {
  render() {
    return (
      <div className="flex flex-col px-8 mx-4 rounded-xl mb-4 bg-gray-100 border-2 border-black py-4 font-sena text-center text-lg sm:py-5 lg:mx-48 lg:grid lg:grid-cols-2">
        <div className="flex justify-center lg:items-start">
          <table className="my-4 lg:my-0">
            <tr className="">
              <th className=""># TURNO</th>
              <th>LINK DE INGRESO</th>
            </tr>
            {DataTurns.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td className="text-principal-100">
                    <a href={item.link}>{item.link}</a>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <div className="h-full">
          <h3 className="font-extrabold sm:mb-3">SERVICIO AL CLIENTE</h3>
          <div className="flex flex-col gap-2 text-white sm:gap-4 sm:w-80 sm:mx-auto">
            <p className="bg-blue-475 rounded-lg p-2">
              Estamos para servirle, y atender su necesidad de la mejor manera.
            </p>
            <p className="bg-blue-475 rounded-lg p-2 ">
              Para ingresar debe registrarse con una cuenta de de google.
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
    );
  }
}
export default BoxTurns;
