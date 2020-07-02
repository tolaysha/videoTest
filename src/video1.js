import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";

const Video1 = () => {
  const convasVideoPageRef = useRef(null);
  const video = useRef(null);
  const mainStreamVideo = useRef(null);
  const [cameraMode, setCameraMode] = useState("user");
  let mainStream;
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
  const handleOnclick = () => {
    const context = convasVideoPageRef.current?.getContext("2d");
    if (context) {
      context.canvas.width = mainStream.videoWidth;
      context.canvas.height = mainStream.videoHeight;
      context.drawImage(mainStream, 0, 0);
      const image =
        convasVideoPageRef.current &&
        convasVideoPageRef.current.toDataURL("image/png");
    }
  };

  const videoRef = (node) => {
    if (node !== null) {
      navigator.mediaDevices
        .getUserMedia(mediaStreamConstraints)
        .then((stream) => {
          video.current = node;

          mainStreamVideo.current = stream;
          node.srcObject = stream;
          mainStream = node;
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
