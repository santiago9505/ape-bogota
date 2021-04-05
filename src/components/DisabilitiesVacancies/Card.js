import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="border-2 font-sena font-semibold text-lg border-black h-72 w-96 rounded-lg text-center">
        <div className="relative flex flex-col h-full content-center ">
          <p className="bg-gray-100 rounded-t-md p-2 self-center w-full">
            SOLICITUD: {this.props.solicitud}
          </p>
          <h4 className="mt-8 font-bold leading-3">{this.props.cargo}</h4>
          <div className="flex justify-center gap-1 mt-0 p-1 text-base">
            <p className="bg-principal-200 h-6 rounded-md w-28">
              {this.props.educacion1}
            </p>
            <p className="bg-blue-450 h-6 text-white rounded-md w-28">
              {this.props.educacion2}
            </p>
            <p className="bg-principal-200 h-6 rounded-md w-28">
              {this.props.educacion3}
            </p>
          </div>
          <p className="p-1 leading-5 mt-1">{this.props.descripcion}</p>
          <button className="bg-blue-450 rounded-xl w-28 text-white h-6 self-center underline mt-1 h-5">
            Postularme
          </button>
          <p className="bg-gray-100 w-full absolute bottom-0 rounded-b-md mb-0">
            {this.props.fechaPublicacion}
          </p>
        </div>
      </article>
    );
  }
}

export default Card;
