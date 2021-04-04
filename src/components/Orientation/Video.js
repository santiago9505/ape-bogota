import React from "react";

const Video = () => {
  return (
    <div className="bg-red-500 flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/EX_2WueQ8WE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Video;
