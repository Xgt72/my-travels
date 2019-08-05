import React from 'react';
import logo from './logo.svg';
import './App.css';

import Travels from "./Travels"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Travels</h1>
      </header>
      <Travels />
    </div>
  );
}

export default App;
