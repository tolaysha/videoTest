import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";

const Video1 = () => {
    // camera stream video element
    //let videoElm = document.querySelector('#camera-stream');
    const videoElm = useRef(null);
    // flip button element
    let flipBtn = document.querySelector('#flip-btn');

    // default user media options
    let defaultsOpts = { audio: false, video: true }
    const [shouldFaceUser , setShouldFaceUser] = useState(true)
    //let shouldFaceUser = true;

    // check whether we can use facingMode
    let supports = navigator.mediaDevices.getSupportedConstraints();
    if (supports['facingMode'] === true) {
        flipBtn.disabled = false;
    }

    let stream = null;

    function capture() {
        defaultsOpts.video = { facingMode: shouldFaceUser ? 'user' : 'environment' }
        navigator.mediaDevices.getUserMedia(defaultsOpts)
            .then(function (_stream) {
                stream = _stream;
                videoElm.current.srcObject = stream;
                videoElm.current.play();
            })
            .catch(function (err) {
                console.log(err)
            });
    }

    const handleSwitchCamera = () => {
        if (stream == null) return
        // we need to flip, stop everything
        stream.getTracks().forEach(t => {
            t.stop();
        });
        // toggle / flip
        setShouldFaceUser(!shouldFaceUser);
        capture();
    }

    capture();
    return (
        <div className="video1">
            <video ref={videoElm} autoPlay muted playsInline />
            <button onClick={handleSwitchCamera}>Switch)</button>
        </div>
    );
};
export default memo(Video1);
