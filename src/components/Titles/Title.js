import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="flex justify-center my-5">
        <h1
          className={
            this.props.titleStyle +
            " max-w-sm border-b-8 font-extrabold leading-6 px-3 pb-4 my-5 border-2 font-sena text-left text-xl lg:text-2xl md:max-w-md "
          }
        >
          <hr className={"h-1 w-2/5 mt-3 mb-2 " + this.props.line} />
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Title;
