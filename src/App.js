import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';


function App() {
  return (
    <>
  <div className="outerWrap">
  <div className="App">
    <SideBar />
    <HomePage />
  </div>
  </div>
  <div className="musicControls">music controls</div>
</>
  );
}

export default App;

