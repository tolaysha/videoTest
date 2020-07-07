import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";

const Video4 = () => {
  // camera stream video element
  const videoElm = useRef(null)
  // flip button element
  //let flipBtn = document.querySelector('#flip-btn');

  // default user media options
  let defaultsOpts = { audio: false, video: true }
  let [shouldFaceUser, setShouldFaceUser] = useState(true);

  // check whether we can use facingMode
  let supports = navigator.mediaDevices.getSupportedConstraints();
  if (supports['facingMode'] === true) {
    //alert(`your device support facingMode`)
  }

  let stream = null;
  navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  defaultsOpts.video = { facingMode: shouldFaceUser ? 'user' : 'environment', width: { ideal: 4096 }, height: { ideal: 2160 } }
  if (typeof navigator.mediaDevices.getUserMedia === "function") {
    navigator.mediaDevices.getUserMedia(defaultsOpts)
      .then(function (_stream) {
        stream = _stream;
        videoElm.current.srcObject = stream;
        videoElm.current.play();
      })
      .catch(function (err) {
        console.log(err)
      });

  } else {
    alert('1');
    navigator.getUserMedia(defaultsOpts,
      function (_stream) {
        stream = _stream;
        videoElm.current.srcObject = stream;
        videoElm.current.play();
      },
      function (err) {
        console.log("The following error occurred: " + err.name);
      }
    );
  }
  const handleSwitchCamera = function () {
    if (stream == null) return
    // we need to flip, stop everything
    stream.getTracks().forEach(t => {
      t.stop();
    });
    // toggle / flip
    setShouldFaceUser(!shouldFaceUser);

  }
  return (
    <div className="video1">
      <video ref={videoElm} muted playsInline />
      <button onClick={handleSwitchCamera}>Switch))))</button>
    </div>
  );
};
export default memo(Video4);
