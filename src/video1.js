import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";

const Video1 = () => {
  const video = useRef(null);
  const mainStreamVideo = useRef(null);
  const [cameraMode, setCameraMode] = useState("user");
  useEffect(() => {
    return () => {
      mainStreamVideo.current.getTracks()[0].stop();
      video.current.pause();
    };
  }, []);
  const handleSwitchCamera = () => {
    mainStreamVideo.current.getTracks().forEach(t => {
      t.stop();
    });
    if (cameraMode === "user") {
      setCameraMode("environment");
    } else {
      setCameraMode("user");
    }
  };
  const mediaStreamConstraints = {
    audio: false,
    video: {
      facingMode: cameraMode,
    },
  };

  const videoRef = (node) => {
    if (node !== null) {
      navigator.mediaDevices
        .getUserMedia(mediaStreamConstraints)
        .then((stream) => {
          video.current = node;
          mainStreamVideo.current = stream;
          node.srcObject = stream;
          node.play();
        }, console.error);
    }
  };
  return (
    <div className="video1">
      <video ref={videoRef} muted playsInline />
      <button onClick={handleSwitchCamera}>Switch)</button>
    </div>
  );
};
export default memo(Video1);
