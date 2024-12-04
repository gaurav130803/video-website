import React, { useEffect } from "react";

const VideoPlayer = () => {
  useEffect(() => {
    // Disable right-click to prevent video download
    const disableRightClick = (event) => event.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Exclusive Video Content</h1>
      <video controls width="300px" height="300px">
        <source src="/videos/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;