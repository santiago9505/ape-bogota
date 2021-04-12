import React from "react";

class Card extends React.Component {
  render() {
    return (
      <article className="card mt-1 border-2 cursor-pointer font-sena text-lg border-gray-100 h-84 w-84 rounded-md text-center sm:h-90 sm:w-96">
        <div className="flex flex-col h-full content-center justify-between">
          <p className="bg-gray-100 font-sans text-base font-normal rounded-t-sm p-2 self-center w-full sm:p-3">
            Solicitud: {this.props.solicitud}
          </p>
          <div className="h-full py-6 sm:py-7">
            <h4 className="mb-0 font-semibold">{this.props.cargo}</h4>
            <div className="flex justify-center items-center gap-2 mt-0 mb-2 text-standard sm:mb-4">
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
            <p className="px-2 mb-4 leading-5 font-normal text-justify overflow-clip sm:leading-6 sm:px-3">
              {this.props.descripcion}
            </p>
            <a
              href={
                "https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/demanda/" +
                this.props.solicitud
              }
              className="p-1 bg-blue-450 hover:bg-principal-100 rounded-sm w-24 font-sans text-base text-white h-8 self-center mt-8 h-5"
            >
              Postularme
            </a>
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
