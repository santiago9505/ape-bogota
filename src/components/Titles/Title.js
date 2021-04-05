import React from "react";

class Title extends React.Component {
  render() {
    return (
      <div className="flex justify-center">
        <h1
          className={
            this.props.titleStyle +
            " w-76 border-b-8 font-extrabold leading-4 px-2 pb-2 my-5 max-w-xs min-w-min border-2 font-sena text-left text-lg "
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
