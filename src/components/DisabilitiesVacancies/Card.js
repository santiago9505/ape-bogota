import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="border-2 font-sena text-lg border-gray-100 h-84 w-84 rounded-md text-center">
        <div className="flex flex-col h-full content-center justify-between">
          <p className="bg-gray-100 font-sans text-base font-normal rounded-t-sm p-2 self-center w-full">
            Solicitud: {this.props.solicitud}
          </p>
          <div className="h-full py-6">
            <h4 className="mb-0 font-semibold">{this.props.cargo}</h4>
            <div className="flex justify-center items-center gap-2 mt-0 mb-2 text-standard">
              <p className="bg-principal-200 rounded-md h-5 w-auto px-1">
                {this.props.educacion1}
              </p>
              <p className="bg-blue-450 h-5 rounded-md text-white w-auto px-1">
                {this.props.educacion2}
              </p>
              <p className="bg-principal-200 rounded-md  h-5 w-auto px-1">
                {this.props.educacion3}
              </p>
            </div>
            <p className="px-2 leading-5 font-normal text-justify overflow-clip">
              {this.props.descripcion}
            </p>
            <button className="bg-blue-450 rounded-sm w-24 font-sans text-base text-white h-8 self-center mt-3 h-5">
              Postularme
            </button>
          </div>

          <p className="bg-gray-100 font-sans font-normal text-base w-full rounded-b-sm mb-0">
            {this.props.fechaPublicacion}
          </p>
        </div>
      </article>
    );
  }
}

export default Card;
