import React from "react";
import LogoApe from "../../assets/static/logo-ape-regular.png";

const SignIn = () => {
  return (
    <div className="bg-gray-300 h-screen py-40">
      <div className="bg-white text-center w-80 h-80 p-2 mx-auto font-sena">
        <article className="">
          <img className="w-52 p-2" src={LogoApe} alt="" />
        </article>
        <form action="">
          <h1 className="text-xl text-principal-300">Funcionarios</h1>
          <label htmlFor="">
            <span className="block text-left ml-16 mt-2 text-principal-100">
              Usuario:
            </span>
            <input
              className="bg-gray-300 w-44 text-base px-1 rounded-md"
              type="email"
            />
          </label>
          <label className="" htmlFor="">
            <span className="block text-left ml-16 mt-3 text-principal-100">
              Contraseña
            </span>
            <input
              className="bg-gray-300 w-44 text-base px-1 rounded-md"
              type="email"
            />
          </label>
          <button
            className="block rounded-md h-7 hover:bg-blue-450 mt-7 ml-48 bg-principal-100 text-white py-1 w-24"
            placeholder="Send"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
