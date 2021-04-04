import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="border-2 font-sena font-semibold text-xs border-black h-72 w-60 rounded-lg text-xs text-left p-2">
        <div className="relative">
          <img className="h-28 sm:h-32" src="" alt="hola" />
          <p className="absolute bg-white top-2 right-3 rounded-xl h-4">
            {this.props.fechaPublicacion}
          </p>
        </div>

        <h4 className="mt-4 font-bold leading-3 leading-3">
          {this.props.cargo}
        </h4>

        <div className="flex justify-start mt-1 p-0.5 pl-0 gap-2">
          <p className="bg-principal-200 h-3 rounded-md w-20">
            {this.props.educacion1}
          </p>
          <p className="bg-blue-450 h-3 text-white rounded-md w-20">
            {this.props.educacion2}
          </p>
          <p className="bg-principal-200 h-3 rounded-md w-20">
            {this.props.educacion3}
          </p>
        </div>

        <p className="p-1 leading-3 mt-1 pl-0">{this.props.descripcion}</p>

        <div className="flex justify-between items-end mt-4 px-1">
          <p className="">SOLICITUD: {this.props.solicitud}</p>
          <button className="bg-blue-450 rounded-xl w-24 text-white h-5 underline ">
            Postularme
          </button>
        </div>
      </article>
    );
  }
}
export default Card;
