import React from "react";

export default function VideoPlayer({ videoSrc, posterSrc }) {
  const containerStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    overflow: "hidden", // Hide overflowing content
  };

  const videoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Make the video cover the entire container
  };

  return (
    <div className="bg-gray-800 rounded p-4 h-full" style={containerStyle}>
      <video
        src={videoSrc}
        poster={posterSrc} // Use the posterSrc prop for the poster image
        style={videoStyle}
        controls
      ></video>
    </div>
  );
}


