import React from "react";

class Card extends React.Component {
  render() {
    return (
      <button
        href=""
        className="carousel__item flex flex-wrap rounded-2xl border-1 border-gray-900 content-between justify-center font-sena h-90 w-80"
      >
        <div className="bg-gray-222 flex flex-wrap rounded-t-2xl justify-center font-medium font-sans content-center w-full h-10">
          <p>Solicitud: {this.props.solicitud}</p>
        </div>
        <div className="flex flex-col justify-center content-center text-md font-extrabold w-full h-10 gap-1">
          <p>{this.props.cargo}</p>
          <div className="flex justify-center text-sm font-normal gap-1">
            <div className="bg-principal-200 rounded-2xl px-2">
              <h6 className="">{this.props.educacion1}</h6>
            </div>
            <div className="bg-blue-450 rounded-2xl px-3">
              <h6 className="text-white">{this.props.educacion2}</h6>
            </div>
            <div className="bg-principal-200 rounded-2xl px-3">
              <h6 className="">{this.props.educacion3}</h6>
            </div>
          </div>
        </div>

        <div className="px-2">
          <p>{this.props.descripcion}</p>
        </div>
        <div className="w-full">
          <a className="py-1.5 px-4 bg-blue-450 rounded-2xl hover:bg-principal-100 rounded-sm font-sans text-base text-white h-5">
            Postularme
          </a>
        </div>
        <div className="bg-gray-222 flex flex-wrap rounded-b-2xl font-medium font-sans justify-center content-center w-full h-10">
          <p>{this.props.fechaPublicacion}</p>
        </div>
      </button>
      // <a className="" href="">
      //   <article className="h-screen cursor-pointer font-sena text-lg border-gray-100 rounded-md text-center">
      //     <div className="bg-green-500">
      //       <p className="bg-gray-100 font-sans border-b-2 text-base font-normal rounded-t-sm p-2 self-center w-full sm:p-3 md:text-lg">
      //         Solicitud: {this.props.solicitud}
      //       </p>
      //       <div className="bg-yellow-500">
      //         <h4 className="mb-0 font-semibold">{this.props.cargo}</h4>
      //         <div className="gap-2 mt-0 mb-2 text-standard">
      //           <p className="bg-principal-200 rounded-md h-5 w-auto px-1 md:px-2">
      //             {this.props.educacion1}
      //           </p>
      //           <p className="bg-blue-450 h-5 rounded-md text-white w-auto px-1 md:px-2">
      //             {this.props.educacion2}
      //           </p>
      //           <p className="bg-principal-200 rounded-md  h-5 w-auto px-1 md:px-2">
      //             {this.props.educacion3}
      //           </p>
      //         </div>
      //         <p className="leading-5 font-normal text-lg text-justify sm:leading-6">
      //           {this.props.descripcion}
      //         </p>
      //         <a
      //           href={
      //             "https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/demanda/" +
      //             this.props.solicitud
      //           }
      //           className="py-1.5 px-3 bg-blue-450 hover:bg-principal-100 rounded-sm w-24 font-sans text-base text-white h-8 self-center mt-8 h-5"
      //         >
      //           Postularme
      //         </a>
      //       </div>
      //       <p className="bg-gray-100 bg-red-500 font-sans font-normal text-base w-full rounded-b-sm mb-0">
      //         {this.props.fechaPublicacion}
      //       </p>
      //     </div>
      //   </article>
      // </a>
    );
  }
}

export default Card;
