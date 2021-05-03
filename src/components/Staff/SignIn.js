import React from "react";
import LogoApe from "../../assets/static/logo-ape-regular.png";

const SignIn = () => {
  return (
    <div className="bg-gray-300 h-screen py-32 px-4">
      <div className="bg-white text-center w-4/6 max-w-sm h-96 p-2 mx-auto font-sena xl:h-98">
        <article className="">
          <img className="w-3/5 p-2" src={LogoApe} alt="" />
        </article>
        <form action="">
          <h1 className="mt-4 text-2xl text-principal-300">Funcionarios</h1>
          <div className="w-4/6 mx-auto max-w-xs">
            <label className="bg-yellow-500" htmlFor="">
              <span className="block mt-3 text-left text-principal-100">
                Usuario:
              </span>
              <input
                className="bg-gray-300 w-full text-base px-1 rounded-md"
                type="email"
                required
              />
            </label>
            <label className="" htmlFor="">
              <span className="block mt-4 text-left text-principal-100">
                Contraseña
              </span>
              <input
                className="bg-gray-300 w-full text-base px-1 rounded-md"
                type="password"
                required
              />
            </label>
            <button
              className="block rounded-md h-7 hover:bg-blue-450 mt-12 bg-principal-100 text-white py-1 w-24 mx-auto"
              placeholder="Send"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
