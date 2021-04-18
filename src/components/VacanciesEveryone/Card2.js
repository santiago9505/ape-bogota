import React from "react";

class Card2 extends React.Component {
  render() {
    return (
      <button className="carousel__item border-2 cursor-pointer font-sena border-gray-100 h-auto w-80 rounded-md text-center">
        <div className="flex flex-col h-full content-center justify-between text-left">
          <div className="h-56">
            <img src={this.props.image} className="rounded-sm" alt="" />
          </div>
          <div className="h-full pb-5 pl-3">
            <div className="flex gap-1 mt-0 text-sm font-normal">
              <p className="bg-principal-200 h-3 rounded-md h-5 w-auto w-auto px-2">
                {this.props.educacion1E}
              </p>
              <p className="bg-blue-450 h-3 rounded-md h-5 w-auto text-white w-auto px-2">
                {this.props.educacion2E}
              </p>
              <p className="bg-principal-200 h-3 rounded-md h-5 w-auto w-auto px-2">
                {this.props.educacion3E}
              </p>
            </div>
            <h4 className="text-lg font-extrabold mb-0 pl-1 pt-1">
              {this.props.cargoE}
            </h4>
            <p className="p-1 leading-5 mt-2">{this.props.descripcionE}</p>
            <button className="bg-blue-450 hover:bg-principal-100 rounded-sm ml-1 w-24 font-sans text-base text-white h-8 self-center mt-3">
              Postularme
            </button>
          </div>
        </div>
      </button>
    );
  }
}

export default Card2;
