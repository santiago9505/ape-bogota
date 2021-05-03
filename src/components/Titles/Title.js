import React from "react";
import Signs from "../../assets/static/signs-icon.svg";

class Title extends React.Component {
  render() {
    return (
      <button className="flex justify-center mx-auto my-5 title__container">
        <h1
          className={
            this.props.titleStyle +
            " max-w-sm border-b-8 font-extrabold leading-6 px-3 pb-4 my-5 border-2 font-sena text-left text-xl lg:text-2xl md:max-w-lg 2xl:text-3xl 3xl:text-4xl 3xl:max-w-2xl"
          }
        >
          <hr
            className={
              "h-1 w-2/5 mt-3 mb-2 2xl:h-1.5 2xl:w-3/5 2xl:mt-4 2xl:mb-3 " +
              this.props.line
            }
          />
          {this.props.title}
          <figure className="flex items-center justify-center">
            <img className="flex w-8" src={Signs} alt="lengua_señas" />
          </figure>
        </h1>
        <div className="title__sign">
          <img src={this.props.seña} alt="lengua_de_señas" />
        </div>
      </button>
    );
  }
}

export default Title;
