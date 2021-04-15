import React from "react";

const Sign = () => {
  return (
    <div>
      <img
        className={
          ghyph2
            ? "absolute top-28 right-40 w-60 block sm:w-80 sm:right-90"
            : "hidden"
        }
        src="https://media.giphy.com/media/T6QoFn5bn0SS9RAjjT/giphy.gif"
        alt=""
      />
    </div>
  );
};

export default Sign;
