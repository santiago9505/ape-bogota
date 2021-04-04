import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="relative border-2 font-sena font-semibold text-xxs border-black h-72 w-56 rounded-lg text-xs text-left p-2">
        <img className="h-28 sm:h-32" src="" alt="hola" />
        <h4 className="text-xs mt-4 font-bold leading-3 leading-3">
          {this.props.cargo}
        </h4>

        <div className="flex justify-start mt-1 p-0.5 pl-0 gap-2">
          <p className="bg-principal-200 h-3 rounded-md w-14">
            {this.props.educacion1}
          </p>
          <p className="bg-blue-450 h-3 text-white rounded-md w-14">
            {this.props.educacion2}
          </p>
          <p className="bg-principal-200 h-3 rounded-md w-14">
            {this.props.educacion3}
          </p>
        </div>

        <p className="p-1 leading-3	text-xs mt-1 pl-0 sm:text-xs">
          {this.props.descripcion}
        </p>
        <p className="absolute bg-white top-2 right-3 rounded-xl h-4">
          {this.props.fechaPublicacion}
        </p>
        <div className="flex justify-between items-end mt-4 px-1">
          <button className="bg-blue-450 rounded-xl w-24 text-xs text-white h-5 underline ">
            Postularme
          </button>
          <p className="">SOLICITUD: {this.props.solicitud}</p>
        </div>
      </article>
    );
  }
}
export default Card;
