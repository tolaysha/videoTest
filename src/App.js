import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Video1 from './video1'
import Root from './roating'

function App() {
  useEffect(()=>{
    document.getElementsByClassName('App')[0].style.height= window.innerHeight + 'px';
    //alert(window.innerHeight)
  })

  return (
    <div className="App">
      <Root />
    </div>
  );
}
export default App;
