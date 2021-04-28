import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="flex justify-center my-5">
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
        </h1>
      </div>
    );
  }
}

export default Title;
