import React, { memo, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./App.css";


const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const [facingMode, setFacingMode] = useState("user")
    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode
    };
    let supports = navigator.mediaDevices.getSupportedConstraints();
    if (supports['facingMode'] === true) {
        debugger;
    }
    const capture = () => {
        if (facingMode === "user") {
            setFacingMode("environment")
        } else {
            setFacingMode("user")
        }
    }

    return (
        <>
            <Webcam
                className='video1'
                audio={false}
                height={250}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
                videoConstraints={videoConstraints}
            />
            <button onClick={capture}>Switch)))</button>
        </>
    );
};
export default WebcamCapture;