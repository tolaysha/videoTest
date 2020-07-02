import React, { memo, useEffect, useRef, useState } from "react";
import "./App.css";

const Video1 = ({ postMethod }) => {
  const convasVideoPageRef = useRef(null);
  const video = useRef(null);
  const mainStreamVideo = useRef(null);
  const [deviceId, setDeviceId] = useState('');
  const [deviceIdnumber, setDeviceIdnumber] = useState(0);
  const videoDevices = [];
  let mainStream;
  let count = 0;
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
    const newDeviceIdNumber = deviceIdnumber + 1 === count?0:deviceIdnumber + 1 ;
    setDeviceId(videoDevices[newDeviceIdNumber]);
    setDeviceIdnumber(newDeviceIdNumber);
  };
  const mediaStreamConstraints = {
    audio: false,
    video: {
      deviceId : { exact: deviceId }
    }
  };
  let Node = null;
  function gotDevices(mediaDevices) {
    mediaDevices.forEach(mediaDevice => {
      if (mediaDevice.kind === 'videoinput') {
        videoDevices.push(mediaDevice.deviceId);
        count++;
      }
    });
    console.log('videoDevices-', videoDevices);
    mediaStreamConstraints.video.deviceId.exact = videoDevices[deviceIdnumber];
    //setDeviceId(videoDevices[0]);
    navigator.mediaDevices
      .getUserMedia(mediaStreamConstraints)
      .then(stream => {
        video.current = Node;

        mainStreamVideo.current = stream;
        Node.srcObject = stream;
        mainStream = Node;
        return navigator.mediaDevices.enumerateDevices();
      })
      
      .catch(error => {
        console.error(error);
      });
  }
  const videoRef = (node) => {
    if (node !== null) {
      Node = node;
      navigator.mediaDevices.enumerateDevices()
      .then(gotDevices)
      
    }
  };
  return (
    <div className="video1">
      <video ref={videoRef} autoPlay muted playsInline />
      <button onClick={handleSwitchCamera}>Switch))</button>
    </div>
  );
};
export default memo(Video1);
