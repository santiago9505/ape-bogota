import React from "react";

class Card extends React.Component {
  render() {
    return (
      <button
        href=""
        className="flex flex-wrap rounded-2xl border-1 border-gray-300 content-between justify-center font-sena h-96 w-80 sm:w-96 sm:h-80 sm:border-2 lg:w-105 3xl:w-115 3xl:h-96"
      >
        <div className="bg-gray-222 flex flex-wrap rounded-t-2xl justify-center font-medium font-sans content-center w-full h-10 3xl:text-xl">
          <p>SOLICITUD: {this.props.solicitud}</p>
        </div>
        <div className="flex flex-col justify-center content-center text-lg font-extrabold w-full h-10 gap-1 md:text-xl 3xl:text-3xl">
          <p>{this.props.cargo}</p>
          <div className="flex justify-center text-sm font-normal gap-1 md:gap-2 2xl:text-lg">
            <div
              className={
                this.props.educacion1
                  ? "bg-principal-200 rounded-2xl px-2"
                  : "hidden"
              }
            >
              <h6 className="">{this.props.educacion1}</h6>
            </div>
            <div
              className={
                this.props.educacion2
                  ? "bg-blue-450 rounded-2xl px-3"
                  : "hidden"
              }
            >
              <h6 className="text-white">{this.props.educacion2}</h6>
            </div>
            <div
              className={
                this.props.educacion3
                  ? "bg-principal-200 rounded-2xl px-3"
                  : "hidden"
              }
            >
              <h6 className="">{this.props.educacion3}</h6>
            </div>
          </div>
        </div>

        <div className="px-2 3xl:text-2xl">
          <p>{this.props.descripcion}</p>
        </div>
        <div className="w-full">
          <a
            href={
              "https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/demanda/solicitud-sintesis/" +
              this.props.solicitud
            }
            className="py-1 px-10 bg-blue-450 rounded-2xl hover:bg-principal-100 rounded-sm font-sans text-sm font-medium text-white h-5 3xl:text-lg"
          >
            POSTULARME
          </a>
        </div>
        <div className="bg-gray-222 flex flex-wrap rounded-b-2xl font-medium font-sans justify-center content-center w-full h-10">
          <p>{this.props.fechaPublicacion}</p>
        </div>
      </button>
    );
  }
}

export default Card;
