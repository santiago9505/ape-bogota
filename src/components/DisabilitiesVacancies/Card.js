import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="relative border-2 font-sena font-semibold text-xxs border-black h-48 w-64 rounded-lg text-center">
        <p className="bg-gray-100 rounded-t-md p-2 mb-1 sm:p-2">
          SOLICITUD: {this.props.solicitud}
        </p>
        <h4 className="text-xs mt-4 font-bold leading-3">{this.props.cargo}</h4>
        <div className="flex justify-center gap-1 mt-0 p-0.5">
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
        <p className="p-1 leading-3	text-xs mt-1 sm:text-xs">
          {this.props.descripcion}
        </p>
        <button className="bg-blue-450 rounded-xl w-24 text-xs text-white h-4 underline mt-1 sm:text-xxs sm:w-20 h-5">
          Postularme
        </button>
        <p className="bg-gray-100 absolute w-full bottom-0 rounded-b-md sm:h-4 text-xs">
          {this.props.fechaPublicacion}
        </p>
      </article>
    );
  }
}

export default Card;
