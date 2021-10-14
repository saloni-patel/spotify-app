import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import HomePage from './components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App=() => {
  return (
    <>
  <div className="outerWrap">
  <div className="App">
    <SideBar />
    <HomePage />
    {/* <Router>
      <HomePage />
    </Router> */}
  </div>
  </div>
  <div className="musicControls">music controls</div>
</>
  );
}

export default App;

