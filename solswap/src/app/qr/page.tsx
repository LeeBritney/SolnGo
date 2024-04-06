
import React from "react";
import WebcamVideo from "./component/webcam";
import Link from "next/link";



export default function Home() {
  const containerStyles = {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    overflow: "hidden", // Ensure that the video is clipped to the container
  };

  const videoStyles = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const frameStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px", // Adjust the width of the frame as needed
    height: "300px", // Adjust the height of the frame as needed
    border: "4px solid white", // Adjust the border as needed
    borderRadius: "20px", // Adjust the border radius to make corners rounded
    zIndex: 1, // Ensure that the frame appears on top of the video
    overflow: "hidden", // Ensure that the video is clipped to the frame
  };

  const scanStyles = {
    position: "fixed",
    top: "calc(50% + 170px)", // Adjust the position below the frame
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "18px", // Adjust the font size as needed
    fontFamily: "Arial", // Adjust the font family as needed
    color: "white", // Adjust the color as needed
    zIndex: 1, // Ensure that the text appears on top of the video
    border: "3px #3A3EA4 solid",
    borderRadius: "20px",
    padding: "10px 20px",
    backgroundColor: "transparent",
    cursor: "pointer",
  };

  const backButtonStyles = {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 2,
    backgroundColor: "transparent",
    border: "3px white solid",
    borderRadius: "20px",
    padding: "10px 20px",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <main style={{ position: "relative", width: "100%", height: "100%" }}>
      <div style={containerStyles}>
        <WebcamVideo style={videoStyles} />
        <div style={frameStyles}></div>
      </div>
      <button style={scanStyles}>Scan from gallery</button>
      <div style={backButtonStyles} ><Link href= "/">Back to Home</Link></div>
    </main>
  );
}
