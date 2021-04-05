import React from "react";
import Vacancie1 from "../../assets/static/img-main-1.jpg";

class Card extends React.Component {
  render() {
    return (
      <article className="border-2 font-sena font-semibold text-lg border-black h-96 w-80 rounded-lg text-xs text-left p-2">
        <div className="relative">
          <img className="h-40 w-full sm:h-32" src={Vacancie1} alt="hola" />
          <p className="absolute bg-white top-2 right-3 rounded-xl h-4">
            {this.props.fechaPublicacion}
          </p>
        </div>

        <h4 className="mt-4 font-bold leading-3 leading-3">
          {this.props.cargo}
        </h4>

        <div className="flex justify-start text-base mt-1 p-0.5 pl-0 gap-2">
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

        <p className="p-1 leading-5 mt-1 pl-0">{this.props.descripcion}</p>

        <div className="flex justify-between items-end mt-2 px-1 content-end">
          <p className="place-self-end">SOLICITUD: {this.props.solicitud}</p>
          <button className="bg-blue-450 rounded-xl w-28 text-white h-6 self-center underline mt-1 h-5">
            Postularme
          </button>
        </div>
      </article>
    );
  }
}
export default Card;
