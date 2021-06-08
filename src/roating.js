import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Video1 from './video1'
import Video2 from './video2'
import Video3 from './video3'
import Video4 from './video4'
import './App.css'
import MobileDetect from 'mobile-detect'

export default function App() {
  const [videoDevices, setVideoDevices] = useState([])
  const [videoDevicesState, setVideoDevicesState] = useState(0)
  function gotDevices(mediaDevices) {
    let _videoDevices = []
    mediaDevices.forEach(mediaDevice => {
      if (mediaDevice.kind === 'videoinput') {
        _videoDevices.push(mediaDevice);
      }
    });
    setVideoDevicesState(1)
    setVideoDevices(_videoDevices);
  }
  useEffect(() => {
    if (videoDevicesState === 0) {
      navigator.mediaDevices.enumerateDevices()
        .then(gotDevices)
    }
  }, [videoDevicesState])
  const handleCheckFocus = () => {
    let supports = navigator.mediaDevices.getSupportedConstraints();
    if (supports['focusMode'] === true) {
      alert('your device supported focusMode')
    } else {
      alert('your device did not supported focusMode')
    }
  }
  const handleCheckMobile = () => {
   alert(new MobileDetect(window.navigator.userAgent).mobile())
  }
  const handleCheckMediaStream = () => {
    if (typeof navigator.mediaDevices.getUserMedia === "function") {
      alert('your device supported MediaStream')
    } else {
      alert('your device did not supported MediaStream')
    }
  }
  const handleCheckGetUserMedia = () => {
    if (typeof navigator.getUserMedia === "function") {
      alert('your device supported getUserMedia')
    } else {
      alert('your device did not supported getUserMedia')
    }
  }
  const handleCheckFocusDistance = () => {
    let supports = navigator.mediaDevices.getSupportedConstraints();
    if (supports['focusDistance'] === true) {
      alert('your device supported focusDistance')
    } else {
      alert('your device did not supported focusDistance')
    }
  }
  return (
    <Router>
      <div className='router'>
        <nav>
          <ul>
            <li>
              <Link to="/videoTest">Home</Link>
            </li>
            <li>
              <Link to="/video1">Variant 1</Link>
            </li>
            <li>
              <Link to="/video2">Variant 2</Link>
            </li>
            <li>
              <Link to="/video3">Variant 3</Link>
            </li>
            <li>
              <Link to="/video4">Variant 4</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/video1">
            <Video4 />
          </Route>
          <Route path="/video2">
            <Video2 />
          </Route>
          <Route path="/video3">
            <Video3 />
          </Route>
          <Route path="/video4">
            <Video1 />
          </Route>
          <Route path="/videoTest">
            <h1>Квест, найди рабочий вариант, где работает смена камеры)</h1>
            <button onClick={handleCheckFocus}>check focusMode</button>
            <button onClick={handleCheckFocusDistance}>check focusDistance</button>
            <button onClick={handleCheckMediaStream}>check MediaStream</button>
            <button onClick={handleCheckGetUserMedia}>check getUserMedia</button>
            <button onClick={handleCheckMobile}>is it mobile?</button>
            <br />
            <ul>
              {
                videoDevices.map((item, index) => {
                  return (<li key={`${item.label}${index}`}>{item.label}</li>)
                })}
            </ul>
            <h5>version-1.7</h5>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

