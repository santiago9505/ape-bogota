import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="border-2 font-sena font-semibold text-xs border-black h-52 w-68 rounded-lg text-center">
        <p className="bg-gray-100 rounded-t-md p-2 mb-1">
          SOLICITUD: {this.props.solicitud}
        </p>
        <h4 className="mt-4 font-bold leading-3">{this.props.cargo}</h4>
        <div className="flex justify-center gap-1 mt-0 p-1">
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
        <p className="p-1 leading-3 mt-1">{this.props.descripcion}</p>
        <button className="bg-blue-450 rounded-xl w-24 text-white h-4 underline mt-1 h-5">
          Postularme
        </button>
        <p className="bg-gray-100 w-full rounded-b-md mt-6 mb-0">
          {this.props.fechaPublicacion}
        </p>
      </article>
    );
  }
}

export default Card;
