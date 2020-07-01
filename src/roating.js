import React from "react";
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

export default function App() {
  return (
    <Router>
      <div className='router'>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
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
            <Video1 />
          </Route>
          <Route path="/video2">
            <Video2 />
          </Route>
          <Route path="/video3">
            <Video3 />
          </Route>
          <Route path="/video4">
            <Video4 />
          </Route>
          <Route path="/">
            <h1>Квест, найди рабочий вариант, где работает смена камеры)</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

