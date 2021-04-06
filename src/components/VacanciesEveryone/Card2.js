import React from "react";

class Card2 extends React.Component {
  render() {
    return (
      <article className="border-2 font-sena font-semibold text-lg border-black h-80 w-96 rounded-lg text-center">
        <div className="flex flex-col h-full content-center justify-between">
          <p className="bg-gray-100 font-sans text-sm font-bold rounded-t-md p-2 self-center w-full">
            SOLICITUD: {this.props.solicitudE}
          </p>
          <div className="h-full py-6">
            <h4 className="font-bold mb-0">{this.props.cargoE}</h4>
            <div className="flex justify-center gap-2 mt-0 mb-6 text-standard font-bold">
              <p className="bg-principal-200 h-6 rounded-2xl w-auto px-2">
                {this.props.educacion1E}
              </p>
              <p className="bg-blue-450 h-6 text-white rounded-2xl w-auto px-2">
                {this.props.educacion2E}
              </p>
              <p className="bg-principal-200 h-6 rounded-2xl w-auto px-2">
                {this.props.educacion3E}
              </p>
            </div>
            <p className="p-1 leading-5 mt-2">{this.props.descripcionE}</p>
            <button className="bg-blue-450 rounded-xl w-28 text-white h-6 self-center underline mt-4 h-5">
              Postularme
            </button>
          </div>

          <p className="bg-gray-100 font-sans text-sm font-bold w-full rounded-b-md mb-0">
            {this.props.fechaPublicacionE}
          </p>
        </div>
      </article>
    );
  }
}

export default Card2;
