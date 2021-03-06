import React from "react";
import Logo from "../../assets/static/logo-sena-blanco.png";

class Card2 extends React.Component {
  render() {
    return (
      <button className="border-2 cursor-pointer font-sena border-gray-100 h-auto w-80 rounded-md text-center sm:w-84 sm:h-103 lg:w-90 lg:h-105 3xl:w-96 3xl:h-113">
        <div className="flex flex-col h-full content-center justify-between text-left">
          <div className="h-56 md:h-64 lg:h-72 3xl:h-96 relative">
            <img src={this.props.image} className="rounded-sm" alt="" />
            <img
              src={Logo}
              className="absolute bottom-4 object-cover w-10 left-4"
              alt=""
            />
          </div>
          <div className="h-full pb-5 pl-3">
            <div className="flex gap-1 mt-0 text-sm font-normal sm:mt-2 lg:text-md 3xl:text-lg">
              <p className="bg-principal-200 h-3 rounded-md h-5 w-auto w-auto px-2">
                {this.props.educacion1E}
              </p>
              <p className="bg-blue-450 h-3 rounded-md h-5 w-auto text-white w-auto px-2">
                {this.props.educacion2E}
              </p>
              <p className="bg-principal-200 h-3 rounded-md h-5 w-auto w-auto px-2">
                {this.props.educacion3E}
              </p>
            </div>
            <h4 className="text-lg font-extrabold mb-0 pl-1 pt-1 lg:text-xl lg:mt-1 3xl:text-2xl">
              {this.props.cargoE}
            </h4>
            <p className="p-1 leading-5 my-2 lg:my-3 lg:text-base 3xl:text-xl">
              {this.props.descripcionE}
            </p>
            <a
              href={
                "https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/demanda/solicitud-sintesis/" +
                this.props.solicitud
              }
              className="bg-blue-450 hover:bg-principal-100 rounded-sm ml-1 w-24 px-6 py-1 font-sans text-base text-white self-center mt-3"
            >
              Postularme
            </a>
          </div>
        </div>
      </button>
    );
  }
}

export default Card2;
