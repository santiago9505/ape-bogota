import React, { useContext, useCallback } from "react";
import { Link } from "react-router-dom";
import { withRouter, Redirect } from "react-router";
import app from "../../firebase";
import { AuthContext } from "../../auth/Auth";
import LogoApe from "../../assets/static/logo-ape-regular.png";

const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/user" />;
  }

  return (
    <div className="bg-gray-300 h-screen py-32 px-4 2xl:py-56">
      <div className="bg-white text-center w-5/6 max-w-sm h-96 p-2 mx-auto font-sena xl:h-98 2xl:w-11/12 2xl:max-w-xl 2xl:h-110">
        <article className="">
          <img className="w-3/5 p-2" src={LogoApe} alt="" />
        </article>
        <form onSubmit={handleLogin} action="">
          <h1 className="mt-4 text-2xl text-principal-300">Funcionarios</h1>
          <div className="w-4/6 mx-auto max-w-xs text-lg">
            <label className="bg-yellow-500" htmlFor="">
              <span className="block mt-3 text-left text-principal-100">
                Usuario:
              </span>
              <input
                className="bg-gray-300 w-full text-base px-1 rounded-md"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </label>
            <label className="" htmlFor="">
              <span className="block mt-4 text-left text-principal-100">
                Contraseña
              </span>
              <input
                className="bg-gray-300 w-full text-base px-1 rounded-md"
                name="password"
                placeholder="Contraseña"
                type="password"
                required
              />
            </label>
            <div className="flex justify-end">
              <button
                className="rounded-md h-7 hover:bg-blue-450 mt-12 bg-principal-100 text-white py-1 w-24"
                placeholder="Send"
              >
                Ingresar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
