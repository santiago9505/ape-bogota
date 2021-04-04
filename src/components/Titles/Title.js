import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <h1
          className={
            this.props.titleStyle +
            " w-56 border-b-8 font-extrabold leading-3 px-2 pb-2 my-5 max-w-xs min-w-min border-2 font-sena text-left text-xs sm:my-7 sm:w-56 sm:text-sm"
          }
        >
          <hr className={this.props.line} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Title;
